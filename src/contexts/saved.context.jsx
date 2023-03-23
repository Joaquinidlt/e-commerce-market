import { createContext, useState, useEffect } from 'react';

const addSavedItem = (savedItems, productToAdd) => {
  const existingCartItem = savedItems.find(
    (savedItem) => savedItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return savedItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem }
        : cartItem
    );
  }

  return [...savedItems, { ...productToAdd, quantity: 1 }];
};

const removeSavedItem = (savedItems, savedItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = savedItems.find(
    (cartItem) => cartItem.id === savedItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return savedItems.filter((cartItem) => cartItem.id !== savedItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return savedItems.map((savedItem) =>
  savedItem.id === savedItemToRemove.id
      ? { ...savedItem, quantity: savedItem.quantity - 1 }
      : savedItem
  );
};

const clearSavedItem = (savedItems, cartItemToClear) =>
    savedItems.filter((savedItem) => savedItem.id !== cartItemToClear.id);

export const SavedContext = createContext({
  savedItems: [],
  addItemToSaved: () => {},
  removeItemFromSaved: () => {},
  clearItemFromSaved: () => {},
});

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const addItemToSaved = (productToAdd) => {
    setSavedItems(addSavedItem(savedItems, productToAdd));
  };

  const removeItemToSaved = (cartItemToRemove) => {
    setSavedItems(removeSavedItem(savedItems, cartItemToRemove));
  };

  const clearItemFromSaved = (cartItemToClear) => {
    setSavedItems(clearSavedItem(savedItems, cartItemToClear));
  };

  const value = {
    addItemToSaved,
    removeItemToSaved,
    clearItemFromSaved,
    savedItems,
  };

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
};
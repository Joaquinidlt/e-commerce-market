import { createSlice } from '@reduxjs/toolkit';

const addSavedItem = (savedItems, productToAdd) => {
  const existingSavedItem = savedItems.find(
    (savedItem) => savedItem.id === productToAdd.id
  );

  if (existingSavedItem) {
    return savedItems.map((savedItem) =>
        savedItem.id === productToAdd.id
        ? { ...savedItem }
        : savedItem
    );
  }

  return [...savedItems, { ...productToAdd, quantity: 1 }];
};

const removeSavedItem = (savedItems, savedItemToRemove) => {
  // find the cart item to remove
  const existingSavedItem = savedItems.find(
    (savedItem) => savedItem.id === savedItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingSavedItem.quantity === 1) {
    return savedItems.filter((savedItem) => savedItem.id !== savedItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return savedItems.map((savedItem) =>
  savedItem.id === savedItemToRemove.id
      ? { ...savedItem, quantity: savedItem.quantity - 1 }
      : savedItem
  );
};

const clearSavedItem = (savedItems, savedItemToClear) =>
    savedItems.filter((savedItem) => savedItem.id !== savedItemToClear.id);

const SAVED_INITIAL_STATE = {
    savedItems: [],
};

export const savedSlice = createSlice({
    name: 'saved',
    initialState: SAVED_INITIAL_STATE,
    reducers: {
        addItemToSaved(state, action) {
            state.savedItems = addSavedItem(state.savedItems, action.payload);
        },
        removeItemToSaved(state, action) {
            state.savedItems = removeSavedItem(state.savedItems, action.payload);
        },
        clearItemFromSaved(state, action) {
            state.savedItems = clearSavedItem(state.savedItems, action.payload);
        },
    },
  });


export const {
    addItemToSaved,
    removeItemToSaved,
    clearItemFromSaved,
} = savedSlice.actions;

export const savedReducer = savedSlice.reducer

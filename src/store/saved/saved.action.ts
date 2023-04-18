import { SAVED_ACTION_TYPES} from './saved.types';
import { createAction, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { SavedItem } from './saved.types';

const addSavedItem = (savedItems: SavedItem[], productToAdd: SavedItem): SavedItem[] => {
  const existingCartItem = savedItems.find(
    (savedItem) => savedItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return savedItems.map((savedItem) =>
      savedItem.id === productToAdd.id
        ? { ...savedItem, quantity: savedItem.quantity + 1 }
        : savedItem
    );
  }

  return [...savedItems, { ...productToAdd, quantity: 1 }];
};

const clearSavedItem = (savedItems: SavedItem[], savedItemToClear: SavedItem) =>
savedItems.filter((savedItem) => savedItem.id !== savedItemToClear.id);

export type SetSavedItems = ActionWithPayload<SAVED_ACTION_TYPES.SET_SAVED_ITEMS, SavedItem[]>;

export const setSavedItems = withMatcher((savedItems: SavedItem[]): SetSavedItems =>
  createAction(SAVED_ACTION_TYPES.SET_SAVED_ITEMS, savedItems)
);

export const addItemToSaved = (savedItems: SavedItem[], productToAdd: SavedItem) => {
    const newSavedItems = addSavedItem(savedItems, productToAdd);
    return setSavedItems(newSavedItems);
};

export const clearItemFromSaved = (savedItems: SavedItem[], savedItemToClear: SavedItem) => {
    const newSavedItems = clearSavedItem(savedItems, savedItemToClear);
    return setSavedItems(newSavedItems);
};
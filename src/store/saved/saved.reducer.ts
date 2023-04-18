import { AnyAction } from 'redux';
import { CategoryItem } from '../categories/category.types'
import { setSavedItems } from './saved.action';

export type SavedState = {
  readonly savedItems: CategoryItem[],
};

export const SAVED_INITIAL_STATE: SavedState = {
  savedItems: [],
};

export const savedReducer = (state = SAVED_INITIAL_STATE, action = {} as AnyAction) => {

  if (setSavedItems.match(action)) {
    return {
      ...state,
      savedItems: action.payload,
    };
  }

  return state;
};
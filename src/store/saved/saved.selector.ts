import { createSelector } from 'reselect';
import { SavedState } from './saved.reducer';
import { RootState } from '../store';

const selectSavedReducer = (state: RootState): SavedState => state.saved;

export const selectSavedItems = createSelector(
  [selectSavedReducer],
  (saved) => saved.savedItems
);

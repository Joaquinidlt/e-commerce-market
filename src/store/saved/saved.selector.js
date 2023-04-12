import { createSelector } from 'reselect';

const selectSavedReducer = (state) => state.saved;

export const selectSavedItems = createSelector(
  [selectSavedReducer],
  (saved) => saved.savedItems
);

export const selectSavedTotal = createSelector([selectSavedItems], (savedItems) =>
    savedItems.reduce(
    (total, savedItem) => total + savedItem.quantity * savedItem.price,
    0
  )
);

export const selectSavedCount = createSelector([selectSavedItems], (savedItems) =>
    savedItems.reduce((total, savedItem) => total + savedItem.quantity, 0)
);
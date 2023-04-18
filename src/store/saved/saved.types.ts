import { CategoryItem } from '../categories/category.types';

export enum SAVED_ACTION_TYPES {
  SET_SAVED_ITEMS = 'saved/SET_SAVED_ITEMS',
}

export type SavedItem = {
  quantity: number;
} & CategoryItem;
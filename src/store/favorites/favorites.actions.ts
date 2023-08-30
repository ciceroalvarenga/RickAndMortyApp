import {createAction} from '@reduxjs/toolkit';
import {CharacterDetailProps} from 'interfaces';

export const setAddToFavorite = createAction<CharacterDetailProps[]>(
  'favorite/setAddToFavorite',
);

export const setRemoveFromFavorite = createAction<number>(
  'favorite/setRemoveFromFavorite',
);

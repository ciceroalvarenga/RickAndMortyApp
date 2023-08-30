import {createReducer} from '@reduxjs/toolkit';
import {CharacterDetailProps} from '../../interfaces';
import {setAddToFavorite, setRemoveFromFavorite} from './favorites.actions';

export interface IFavoritesState {
  character: CharacterDetailProps[];
  selectedAddToFavorite: CharacterDetailProps[];
}

const initialState: IFavoritesState = {
  character: [],
  selectedAddToFavorite: [],
};

export const favoriteCharacterReducer = createReducer(initialState, builder => {
  builder.addCase(setAddToFavorite, (state, action) => ({
    ...state,
    selectedAddToFavorite: state.selectedAddToFavorite.concat(action.payload),
  }));
  builder.addCase(setRemoveFromFavorite, (state, action) => ({
    ...state,
    selectedAddToFavorite: state.selectedAddToFavorite.filter(
      item => item.id !== action.payload,
    ),
  }));
});

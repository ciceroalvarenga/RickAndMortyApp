import {RootState} from '../store';

export const selectCharactersFavorite = (state: RootState) =>
  state.charactersFavorites.selectedAddToFavorite;

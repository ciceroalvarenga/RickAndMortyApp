import {createSlice} from '@reduxjs/toolkit';
import {CharacterDetailProps} from '../interfaces';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [] as CharacterDetailProps[],
  reducers: {
    addToFavorite(state, {payload}) {
      state.push(payload);
    },
    removeFromFavorite(state, {payload}) {
      return state.filter(({id}) => id !== payload);
    },
  },
});

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;

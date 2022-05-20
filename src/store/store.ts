import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from '@store/favoriteSlice';

let middlewaresToApply: any = [];

const createFlipperDebugger = require('redux-flipper').default;

middlewaresToApply.push(createFlipperDebugger());

const store = configureStore({
  reducer: {
    charactersFavorites: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewaresToApply),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

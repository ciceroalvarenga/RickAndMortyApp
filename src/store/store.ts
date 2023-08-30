import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import {favoriteCharacterReducer} from '@store/favorites/favorites.reducer';
import {characterReducer} from './character/character.reducer';

let middlewaresToApply: any = [];

const createFlipperDebugger = require('redux-flipper').default;

middlewaresToApply.push(createFlipperDebugger());

const rootReducer = combineReducers({
  charactersFavorites: favoriteCharacterReducer,
  character: characterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewaresToApply),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

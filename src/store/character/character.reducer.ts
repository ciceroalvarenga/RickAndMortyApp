import {createReducer} from '@reduxjs/toolkit';
import {CharacterDetailProps} from '../../interfaces';
import {setAddCharacter} from './character.actions';

export interface ICharacterState {
  selectedCharacter: CharacterDetailProps | null;
}

const initialState: ICharacterState = {
  selectedCharacter: null,
};

export const characterReducer = createReducer(initialState, builder => {
  builder.addCase(setAddCharacter, (state, action) => ({
    ...state,
    selectedCharacter: action.payload,
  }));
});

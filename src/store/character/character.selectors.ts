import {RootState} from '../store';

export const selectCharacter = (state: RootState) =>
  state.character.selectedCharacter;

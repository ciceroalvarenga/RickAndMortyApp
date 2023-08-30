import {createAction} from '@reduxjs/toolkit';
import {CharacterDetailProps} from 'interfaces';

export const setAddCharacter = createAction<CharacterDetailProps>(
  'character/setAddCharacter',
);

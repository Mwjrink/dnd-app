import { createContext, useContext } from 'react';
import { Character, CharacterState } from '../models/character';

export interface CurrentCharacterContext {
  character: Character;
  state: CharacterState;
}

let context: React.Context<CurrentCharacterContext>;

export function CreateCharacterContext(defaultValue: CurrentCharacterContext) {
  const characterContext = createContext(defaultValue);
  context = characterContext;
  return characterContext;
}

export function useCharacterContext() {
  return useContext(context);
}

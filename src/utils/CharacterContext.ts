import { createContext, useContext } from 'react';
import { Character } from '../models/character';

interface CurrentCharacterContext {
  character: Character | null;
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

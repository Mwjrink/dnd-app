import { User } from "./user";
import { Character, CharacterState } from "./character";

export interface DnDSession {
  dm: User;
  players: { user: User; character: Character, state: CharacterState }[];
  name: string;
}

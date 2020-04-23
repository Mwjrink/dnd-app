import { User } from "./user";
import { Character } from "./character";

export interface DnDSession {
  dm: User;
  players: { user: User; character: Character }[];
  name: string;
}

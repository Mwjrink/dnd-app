import { Class } from "./class";
import { Race } from "./race";

export class Character {
  name!: string;
  classes!: Class[];
  race!: Race;
}

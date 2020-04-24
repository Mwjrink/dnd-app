import { Die } from "./common";

export default interface Monster {
  hitPoints: Die[];
}

export interface MonsterState {
  hitPoints: number;
}

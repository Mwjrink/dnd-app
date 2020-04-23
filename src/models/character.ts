import {
  barbellOutline,
  barbellSharp,
  beerOutline,
  beerSharp,
  bicycleOutline,
  bicycleSharp,
  bookOutline,
  bookSharp,
  heartCircleOutline,
  heartCircleSharp,
} from "ionicons/icons";
import { Icon } from "../components/icon";
import { Class } from "./class";
import { Race } from "./race";

export const scoreKeys = ["str", "dex", "con", "int", "wis", "cha"] as const;

type scoreKeys_T = typeof scoreKeys[number];

export interface Score {
  name: string;
  score: number;
  savingThrowProficiency: boolean;
  icon: Icon;
}

interface Skill {
  name: string;
  proficiency: number; // 0 for not-proficient, 1 for proficient, 2 for expertise
  scoreKey: scoreKeys_T; // score this skill scales off
}

export type Character = {
  [index in scoreKeys_T]: Score;
} & {
  name: string;
  classes: Class[];
  race: Race;
  proficiencyBonus: number;
  str: Score;
  dex: Score;
  con: Score;
  int: Score;
  wis: Score;
  cha: Score;
  skills: Skill[];
};

export const baseCharacter = {
  name: "Enter a name",
  classes: [],
  race: { name: "Choose a race" },
  proficiencyBonus: 1,

  str: {
    name: "strength",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
  },
  dex: {
    name: "dexterity",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: bicycleOutline, mdIcon: bicycleSharp },
  },
  con: {
    name: "constitution",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: heartCircleOutline, mdIcon: heartCircleSharp },
  },
  int: {
    name: "intelligence",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: bookOutline, mdIcon: bookSharp },
  },
  wis: {
    name: "wisdom",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
  },
  cha: {
    name: "charisma",
    score: 10,
    savingThrowProficiency: false,
    icon: { iosIcon: beerOutline, mdIcon: beerSharp },
  },

  skills: [
    {
      name: "Athletics",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "str", // score this skill scales off
    },

    {
      name: "Acrobatics",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "dex", // score this skill scales off
    },
    {
      name: "Sleight of Hand",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "dex", // score this skill scales off
    },
    {
      name: "Stealth",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "dex", // score this skill scales off
    },

    {
      name: "Arcana",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "int", // score this skill scales off
    },
    {
      name: "History",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "int", // score this skill scales off
    },
    {
      name: "Investigation",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "int", // score this skill scales off
    },
    {
      name: "Nature",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "int", // score this skill scales off
    },
    {
      name: "Religion",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "int", // score this skill scales off
    },

    {
      name: "Animal Handling",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "wis", // score this skill scales off
    },
    {
      name: "Insight",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "wis", // score this skill scales off
    },
    {
      name: "Medicine",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "wis", // score this skill scales off
    },
    {
      name: "Perception",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "wis", // score this skill scales off
    },
    {
      name: "Survival",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "wis", // score this skill scales off
    },

    {
      name: "Deception",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "cha", // score this skill scales off
    },
    {
      name: "Intimidation",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "cha", // score this skill scales off
    },
    {
      name: "Performance",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "cha", // score this skill scales off
    },
    {
      name: "Persuasion",
      proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
      scoreKey: "cha", // score this skill scales off
    },
  ],
};

export function prefixValue(value: number) {
  return `${value >= 0 ? "+" : ""}${value}`
} 

export function getModifier(score: Score) {
  const modifier = Math.round((score.score - 10) / 2 - 0.5);
  const modifierString = prefixValue(modifier);
  
  return { modifier, modifierString };
}

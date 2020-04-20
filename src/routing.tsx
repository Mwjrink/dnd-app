import CharacterSheet from "./pages/CharacterSheet/CharacterSheet";

interface AppRoute {
  path: string;
  component: any;
}

export const routes: AppRoute[] = [
  {
    path: "/character-sheet",
    component: CharacterSheet,
  },
];

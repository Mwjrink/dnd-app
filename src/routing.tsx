import CharacterSheet from "./pages/CharacterSheet/CharacterSheet";
import SpellBook from './pages/Spellbook/SpellBook';
import Inventory from './pages/Inventory/Inventory';
import Maps from './pages/Maps/Maps';
import Notes from './pages/Notes/Notes';
import Database from './pages/Database/Database';
import Music from './pages/Music/Music';

interface AppRoute {
  path: string;
  component: any;
}

export const routes: AppRoute[] = [
  {
    path: "/character-sheet",
    component: CharacterSheet,
  },
  {
    path: "/spellbook",
    component: SpellBook,
  },
  {
    path: "/inventory",
    component: Inventory,
  },
  {
    path: "/maps",
    component: Maps,
  },
  {
    path: "/notes",
    component: Notes,
  },
  {
    path: "/database",
    component: Database,
  },
  {
    path: "/music",
    component: Music,
  },
];

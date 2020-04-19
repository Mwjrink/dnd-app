import React, { useState } from "react";
import { Avatar, Drawer } from "react-native-material-ui";
import { BoxShadow } from "../../style.utils";
import { Character } from "../../models/character";

interface NavDrawerProps {
  open: boolean;
  currentCharacter: Character;
  setCurrentCharacter: (arg0: Character) => void;
  characters: Character[];
}

type TabKeys =
  | "char-sheet"
  | "spell-book"
  | "inventory"
  | "maps"
  | "notes"
  | "database"
  | "music";

export function NavDrawer({
  open,
  currentCharacter,
  setCurrentCharacter,
  characters,
}: NavDrawerProps) {
  const [currentTabKey, setCurrentTabKey] = useState<TabKeys>("char-sheet");

  const characterSpecificTabs = [
    {
      icon: "bookmark-border",
      value: "Character Sheet",
      active: currentTabKey === "char-sheet",
      onPress: () => setCurrentTabKey("char-sheet"),
    },
    {
      icon: "bookmark-border",
      value: "Spellbook",
      active: currentTabKey === "spell-book",
      onPress: () => setCurrentTabKey("spell-book"),
    },
    {
      icon: "bookmark-border",
      value: "Inventory",
      active: currentTabKey === "inventory",
      onPress: () => setCurrentTabKey("inventory"),
    },
    {
      icon: "bookmark-border",
      value: "Notes",
      active: currentTabKey === "notes",
      onPress: () => setCurrentTabKey("notes"),
    },
  ];

  const staticTabs = [
    {
      icon: "bookmark-border",
      value: "Database",
      active: currentTabKey === "database",
      onPress: () => setCurrentTabKey("database"),
    },
    {
      icon: "bookmark-border",
      value: "Music",
      active: currentTabKey === "music",
      onPress: () => setCurrentTabKey("music"),
    },
  ];

  return (
    <Drawer
      style={{
        container: {
          width: "30%",
          minWidth: "320",
          maxWidth: "480",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          bottom: "0",
          ...BoxShadow(8),
          transform: open ? undefined : [{ translateX: -480 }],
        },
      }}
    >
      <>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<Avatar text={currentCharacter.name[0]} />}
            accounts={characters
              .filter((x) => currentCharacter !== x)
              .map((x) => ({ avatar: <Avatar text={x.name[0]} /> }))}
            footer={{
              dense: true,
              centerElement: {
                primaryText: currentCharacter.name,
                secondaryText: currentCharacter.classes[0].name,
              },
              rightElement: "arrow-drop-down",
            }}
          />
        </Drawer.Header>
        <Drawer.Section divider items={characterSpecificTabs} />
        <Drawer.Section
          // title="Personal"
          items={staticTabs}
        />
      </>
    </Drawer>
  );
}

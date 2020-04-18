import React from "react";
import { View, Text } from "react-native";
import { Character } from "../../models/character";

export function CharSheet(character: Character) {
  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  );
}

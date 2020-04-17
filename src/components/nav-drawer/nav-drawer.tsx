import React, { useState } from "react";
import { StyledNavDrawer } from "./nav-drawer.styled";
import { Button } from "react-native";

export function NavDrawer() {
  const [open, setOpen] = useState(true);

  return (
    <StyledNavDrawer open={open}>
      <Button onPress={() => setOpen(false)} title="Press Me" />
      {/* */}
      {/* <Text>
        hola world!
      </Text> */}
    </StyledNavDrawer>
  );
}

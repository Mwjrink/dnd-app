import React from "react";
import { Avatar, Drawer } from "react-native-material-ui";
import { BoxShadow } from "../../style.utils";

interface NavDrawerProps {
  open: boolean;
}

export function NavDrawer({ open }: NavDrawerProps) {
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
          transform: open ? undefined : [{ translateX: -480 }]
        },
      }}
    >
      <>
        <Drawer.Header>
          <Drawer.Header.Account
            avatar={<Avatar text="A" />}
            accounts={[
              { avatar: <Avatar text="B" /> },
              { avatar: <Avatar text="C" /> },
            ]}
            footer={{
              dense: true,
              centerElement: {
                primaryText: "Reservio",
                secondaryText: "business@email.com",
              },
              rightElement: "arrow-drop-down",
            }}
          />
        </Drawer.Header>
        <Drawer.Section
          divider
          items={[
            { icon: "bookmark-border", value: "Notifications" },
            { icon: "today", value: "Calendar", active: true },
            { icon: "people", value: "Clients" },
          ]}
        />
        <Drawer.Section
          title="Personal"
          items={[
            { icon: "info", value: "Info" },
            { icon: "settings", value: "Settings" },
          ]}
        />
      </>
    </Drawer>
  );
}

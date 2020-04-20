import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import {
  cubeOutline,
  cubeSharp,
  flashOutline,
  flashSharp,
  libraryOutline,
  librarySharp,
  manOutline,
  manSharp,
  mapOutline,
  mapSharp,
  musicalNotesOutline,
  musicalNotesSharp,
  pencilOutline,
  pencilSharp,
} from "ionicons/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const characterPages: AppPage[] = [
  {
    title: "Character Sheet",
    url: "/character-sheet",
    iosIcon: manOutline,
    mdIcon: manSharp,
  },
  {
    title: "Spellbook",
    url: "/spellbook",
    iosIcon: flashOutline,
    mdIcon: flashSharp,
  },
  {
    title: "Inventory",
    url: "/inventory",
    iosIcon: cubeOutline,
    mdIcon: cubeSharp,
  },
  {
    title: "Maps",
    url: "/maps",
    iosIcon: mapOutline,
    mdIcon: mapSharp,
  },
  {
    title: "Notes",
    url: "/notes",
    iosIcon: pencilOutline,
    mdIcon: pencilSharp,
  },
];

const staticPages: AppPage[] = [
  {
    title: "Database",
    url: "/database",
    iosIcon: libraryOutline,
    mdIcon: librarySharp,
  },
  {
    title: "Music",
    url: "/music",
    iosIcon: musicalNotesOutline,
    mdIcon: musicalNotesSharp,
  },
];

// const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

// pawOutline for database/beasts
// cloud-upload-outline for syncing db to google drive etc
// bonfireOutline for SOMETHING cause its hype
// beerOutline for SOMETHING cause its hype

function Menu() {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" swipeGesture>
      <IonContent>
        <IonList id="character-pages">
          <IonItem lines="full">
            <IonAvatar slot="start">
              <img
                src="https://media.giphy.com/media/7isbcNAx367qU/200.gif"
                alt="spoodr-mon"
              />
            </IonAvatar>
            <IonLabel>Spider-Man</IonLabel>
          </IonItem>
          {characterPages.map((characterPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === characterPage.url ? "selected" : ""
                  }
                  routerLink={characterPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={characterPage.iosIcon} />
                  <IonLabel>{characterPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList id="static-pages">
          <IonListHeader>Other</IonListHeader>
          {staticPages.map((staticPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === staticPage.url ? "selected" : ""
                  }
                  routerLink={staticPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" icon={staticPage.iosIcon} />
                  <IonLabel>{staticPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
}

export default Menu;

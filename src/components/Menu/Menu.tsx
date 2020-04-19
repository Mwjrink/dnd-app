import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
  IonItemDivider,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { documentOutline, documentSharp, colorWandOutline, colorWandSharp, cubeOutline, cubeSharp, mapOutline, mapSharp, pencilOutline, pencilSharp, fileTrayFullOutline, fileTrayFullSharp, musicalNotesOutline, musicalNotesSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const characterPages: AppPage[] = [
  {
    title: 'Character Sheet',
    url: '/page/character-sheet',
    iosIcon: documentOutline,
    mdIcon: documentSharp
  },
  {
    title: 'Spellbook',
    url: '/page/spellbook',
    iosIcon: colorWandOutline,
    mdIcon: colorWandSharp
  },
  {
    title: 'Inventory',
    url: '/page/inventory',
    iosIcon: cubeOutline,
    mdIcon: cubeSharp
  },
  {
    title: 'Maps',
    url: '/page/maps',
    iosIcon: mapOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Notes',
    url: '/page/notes',
    iosIcon: pencilOutline,
    mdIcon: pencilSharp
  }
];

const staticPages: AppPage[] = [
  {
    title: 'Database',
    url: '/page/database',
    iosIcon: fileTrayFullOutline,
    mdIcon: fileTrayFullSharp
  },
  {
    title: 'Music',
    url: '/page/music',
    iosIcon: musicalNotesOutline,
    mdIcon: musicalNotesSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="character-pages">
          <IonItem lines="full">
            <IonAvatar slot="start">
              <img src="https://media.giphy.com/media/7isbcNAx367qU/200.gif"></img>
            </IonAvatar>
            <IonLabel>Spider-Man</IonLabel>
          </IonItem>
          {characterPages.map((characterPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === characterPage.url ? 'selected' : ''} routerLink={characterPage.url} routerDirection="none" lines="none" detail={false}>
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
                <IonItem className={location.pathname === staticPage.url ? 'selected' : ''} routerLink={staticPage.url} routerDirection="none" lines="none" detail={false}>
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
};

export default Menu;

import React from "react";
import {
  IonLabel,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

interface MusicProps {}

function Music({}: MusicProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Music</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Music;

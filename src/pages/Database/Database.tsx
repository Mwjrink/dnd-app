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

interface DatabaseProps {}

function Database({}: DatabaseProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Database</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Database;

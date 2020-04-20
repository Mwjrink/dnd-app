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
import PageHeader from "../../components/MenuBar/MenuBar";

interface MusicProps {}

function Music({}: MusicProps) {
  return (
    <IonPage>
      <PageHeader title={"Music"} />

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Music;

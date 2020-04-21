import React from "react";
import {
  IonLabel,
  IonPage,
  IonContent,
} from "@ionic/react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface MusicProps {}

function Music({}: MusicProps) {
  return (
    <IonPage>
      <PageHeader title={"Music"} />

      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default Music;

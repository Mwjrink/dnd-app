import React from "react";
import {
  IonLabel,
  IonHeader,
  IonPage,
  IonContent,
} from "@ionic/react";
import { Character } from "../../models/character";
import PageHeader from "../../components/MenuBar/MenuBar";

interface MapsProps {
  
}

function Maps({ }: MapsProps) {
  return (
    <IonPage>
      <PageHeader title={"Maps"} />

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Maps;

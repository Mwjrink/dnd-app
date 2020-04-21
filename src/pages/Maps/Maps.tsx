import React from "react";
import {
  IonLabel,
  IonPage,
  IonContent,
} from "@ionic/react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface MapsProps {
  
}

function Maps({ }: MapsProps) {
  return (
    <IonPage>
      <PageHeader title={"Maps"} />

      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default Maps;

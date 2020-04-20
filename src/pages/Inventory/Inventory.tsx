import React from "react";
import {
  IonLabel,
  IonHeader,
  IonPage,
  IonContent,
} from "@ionic/react";
import { Character } from "../../models/character";
import PageHeader from "../../components/MenuBar/MenuBar";

interface InventoryProps {
  character: Character;
}

function Inventory({ character }: InventoryProps) {
  return (
    <IonPage>
      <PageHeader title={"Inventory"} />

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Inventory;

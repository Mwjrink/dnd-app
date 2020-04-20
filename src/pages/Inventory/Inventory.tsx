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
import { Character } from "../../models/character";

interface InventoryProps {
  character: Character;
}

function Inventory({ character }: InventoryProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            Inventory {character ? ": " + character.name : ""}
          </IonTitle>
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

export default Inventory;

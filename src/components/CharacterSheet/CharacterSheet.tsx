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

interface CharacterSheetProps {
  character: Character;
}

function CharacterSheet({ character }: CharacterSheetProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            Character Sheet {character ? ": " + character.name : ""}
          </IonTitle>
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

export default CharacterSheet;

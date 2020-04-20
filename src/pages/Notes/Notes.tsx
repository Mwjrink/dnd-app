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

interface NotesProps {
  character: Character;
}

function Notes({ character }: NotesProps) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Notes {character ? ": " + character.name : ""}</IonTitle>
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

export default Notes;

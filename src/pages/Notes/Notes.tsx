import React from "react";
import {
  IonLabel,
  IonHeader,
  IonPage,
  IonContent,
} from "@ionic/react";
import { Character } from "../../models/character";
import PageHeader from "../../components/MenuBar/MenuBar";

interface NotesProps {
  character: Character;
}

function Notes({ character }: NotesProps) {
  return (
    <IonPage>
      <PageHeader title={"Notes"} />

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Notes;

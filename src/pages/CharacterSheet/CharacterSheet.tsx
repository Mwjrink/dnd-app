import React from "react";
import {
  IonLabel,
  IonHeader,
  IonPage,
  IonContent,
} from "@ionic/react";
import { Character } from "../../models/character";
import PageHeader from "../../components/MenuBar/MenuBar";

interface CharacterSheetProps {
  character: Character;
}

function CharacterSheet({ character }: CharacterSheetProps) {
  return (
    <IonPage>
      <PageHeader title={`Character Sheet ${character ? ": " + character.name : ""}`} />
      
      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default CharacterSheet;

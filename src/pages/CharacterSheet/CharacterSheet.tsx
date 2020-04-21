import { IonContent, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useCharacterContext } from "../../utils/CharacterContext";

interface CharacterSheetProps {
  
}

function CharacterSheet({ }: CharacterSheetProps) {
  const { character } = useCharacterContext();

  return (
    <IonPage>
      <PageHeader title={`Character Sheet ${character ? ": " + character.name : ""}`} />
      
      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default CharacterSheet;

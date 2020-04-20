import { IonContent, IonHeader, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import PageHeader from "../../components/MenuBar/MenuBar";
import { useCharacterContext } from "../../utils/CharacterContext";

interface CharacterSheetProps {
  
}

function CharacterSheet({ }: CharacterSheetProps) {
  const { character } = useCharacterContext();

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

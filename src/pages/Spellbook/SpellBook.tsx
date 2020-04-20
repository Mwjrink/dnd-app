import { IonContent, IonHeader, IonLabel, IonPage } from "@ionic/react";
import React from "react";
import { Character } from "../../models/character";
import PageHeader from "../../components/MenuBar/MenuBar";

interface SpellBookProps {
  character: Character;
}

function SpellBook({ character }: SpellBookProps) {
  return (
    <IonPage>
      <PageHeader title={"Database"} />

      <IonContent>
        <IonHeader>
          <IonLabel>REEE</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default SpellBook;

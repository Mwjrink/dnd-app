import React from "react";
import {
  IonLabel,
  IonPage,
  IonContent,
} from "@ionic/react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface NotesProps {
  
}

function Notes({ }: NotesProps) {
  return (
    <IonPage>
      <PageHeader title={"Notes"} />

      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default Notes;

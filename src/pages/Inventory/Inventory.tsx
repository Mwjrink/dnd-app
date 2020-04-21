import React from "react";
import {
  IonLabel,
  IonPage,
  IonContent,
} from "@ionic/react";
import PageHeader from "../../components/PageHeader/PageHeader";

interface InventoryProps {
  
}

function Inventory({ }: InventoryProps) {
  return (
    <IonPage>
      <PageHeader title={"Inventory"} />

      <IonContent>
        <IonLabel>REEE</IonLabel>
      </IonContent>
    </IonPage>
  );
}

export default Inventory;

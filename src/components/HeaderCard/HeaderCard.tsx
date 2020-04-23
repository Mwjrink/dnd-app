import { Character } from "../../models/character";
import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { AdaptiveHeaderCardContentLayout } from "./HeaderCard.Styles";

interface HeaderCardProps {
  character: Character;
}

export default function HeaderCard({ character }: HeaderCardProps) {
  return (
    <IonCard>
      <AdaptiveHeaderCardContentLayout>
        <img
          src="https://media.giphy.com/media/7isbcNAx367qU/200.gif"
          alt="spoodr-mon"
        />
        <div>
          <IonCardHeader>
            <IonCardTitle>{character.name}</IonCardTitle>
            <IonCardSubtitle>{`${character.race.name} ${character.classes
              .map((cl) => cl.name)
              .join(", ")}`}</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Hp, SpellPoints, HitDice, AC, ProfBonus
          </IonCardContent>
        </div>
      </AdaptiveHeaderCardContentLayout>
    </IonCard>
  );
}

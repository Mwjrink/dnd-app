import {
  IonCard,
  IonIcon,
  IonItem,
  IonLabel,
  IonCardTitle,
  IonCardHeader,
} from "@ionic/react";
import React from "react";
import {
  Character,
  Score,
  scoreKeys,
  getModifier,
  prefixValue,
} from "../../models/character";
import { ScoreLayout } from "../ScoresCard/ScoresCard.Styled";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import { SavingThrowsCardLayout } from "./SavingThrowsCard.Styled";

interface SavingThrowsCardProps {
  character: Character;
  abbreviate: boolean;
}

export default function SavingThrowsCard({
  character,
  abbreviate,
}: SavingThrowsCardProps) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Saving Throws</IonCardTitle>
      </IonCardHeader>
      {scoreKeys.map((key) => {
        const score: Score = character[key];
        const { modifier } = getModifier(score);
        const value =
          modifier +
          (score.savingThrowProficiency ? character.proficiencyBonus : 0);

        return (
          <IonItem key={key}>
            {/* // in order to make the item clickable add this to IonItem: href="#" */}
            <IonIcon
              ios={score.icon.iosIcon}
              md={score.icon.mdIcon}
              icon={score.icon.mdIcon}
              slot="start"
            />
            <SavingThrowsCardLayout>
              <IonLabel>
                {abbreviate ? score.name.substr(0, 3) : score.name}
              </IonLabel>
              <span>{prefixValue(value)}</span>
            </SavingThrowsCardLayout>
          </IonItem>
        );
      })}
    </IonCard>
  );
}

import { Character, Score, scoreKeys } from "../../models/character";
import React from "react";
import {
  IonCard,
  IonItem,
  IonIcon,
  IonLabel,
  IonCardTitle,
  IonCardHeader,
} from "@ionic/react";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";
import { ScoreLayout } from "./ScoresCard.Styled";

interface ScoresCardProps {
  character: Character;
  abbreviate: boolean;
}

export default function ScoresCard({ character, abbreviate }: ScoresCardProps) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ability Scores</IonCardTitle>
      </IonCardHeader>
      {scoreKeys.map((key) => {
        const score: Score = character[key];

        return (
          <IonItem key={key}>
            {/* // in order to make the item clickable add this to IonItem: href="#" */}
            <IonIcon
              ios={score.icon.iosIcon}
              md={score.icon.mdIcon}
              icon={score.icon.mdIcon}
              slot="start"
            />
            <ScoreLayout>
              <IonLabel>
                {abbreviate ? score.name.substr(0, 3) : score.name}
              </IonLabel>
              <ScoreDisplay score={score} swapScore />
            </ScoreLayout>
          </IonItem>
        );
      })}
    </IonCard>
  );
}

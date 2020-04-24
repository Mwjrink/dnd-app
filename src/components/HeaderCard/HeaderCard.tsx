import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import React from "react";
import { useCharacterContext } from "../../utils/CharacterContext";
import { AdaptiveHeaderCardContentLayout } from "./HeaderCard.Styles";
import { shieldOutline, shieldSharp } from "ionicons/icons";

export default function HeaderCard() {
  const { character, state } = useCharacterContext();

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

          {/* // Hp, SpellPoints, HitDice, ProfBonus */}
          <IonItem>
            <IonIcon
              slot="start"
              ios={shieldOutline}
              md={shieldSharp}
              icon={shieldSharp}
            />
            <IonLabel>HP</IonLabel>
            {/* // TODO: use characterState through context or something instead */}
            <span>{`${state.hitPoints}/${character.hitPoints}`}</span>
          </IonItem>

          <IonItem>
            <IonIcon
              slot="start"
              ios={shieldOutline}
              md={shieldSharp}
              icon={shieldSharp}
            />
            <IonLabel>Proficiency</IonLabel>
            {/* // TODO: use characterState through context or something instead */}
            <span>{character.proficiencyBonus}</span>
          </IonItem>

          <IonCardContent>{character.description}</IonCardContent>
        </div>
      </AdaptiveHeaderCardContentLayout>
    </IonCard>
  );
}

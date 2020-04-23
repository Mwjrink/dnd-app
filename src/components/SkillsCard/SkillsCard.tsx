import { IonCard, IonCardHeader, IonCardTitle, IonItem } from "@ionic/react";
import React from "react";
import { Character, getModifier, prefixValue } from "../../models/character";
import { SkillDisplay, SkillsCardLayout } from "./SkillsCard.Styled";

interface SkillsCardProps {
  character: Character;
}

export default function SkillsCard({ character }: SkillsCardProps) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Skills</IonCardTitle>
      </IonCardHeader>
      <SkillsCardLayout>
        {character.skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill) => {
            const { modifier } = getModifier(character[skill.scoreKey]);
            const value =
              modifier + skill.proficiency * character.proficiencyBonus;

            return (
              <IonItem key={skill.name}>
                {/* // in order to make the item clickable add this to IonItem: href="#" */}

                <SkillDisplay>
                  <span>{skill.name}</span>
                  <span>{prefixValue(value)}</span>
                </SkillDisplay>
              </IonItem>
            );
          })}
      </SkillsCardLayout>
    </IonCard>
  );
}

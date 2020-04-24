import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { pin } from "ionicons/icons";
import React from "react";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import PageHeader from "../../components/PageHeader/PageHeader";
import ScoresCard from "../../components/ScoresCard/ScoresCard";
import { useSessionContext } from "../../utils/DnDSessionContext";
import { useUserContext } from "../../utils/UserContext";
import { AdaptiveBodyCardLayout } from "./CharacterSheet.Styled";
import SavingThrowsCard from "../../components/SavingThrowsCard/SavingThrowsCard";
import SkillsCard from '../../components/SkillsCard/SkillsCard';

interface CharacterSheetProps {}

function CharacterSheet({}: CharacterSheetProps) {
  const { user } = useUserContext();
  const { session } = useSessionContext();

  // const { settings } = useSettingsContext();
  const abbreviate = true; // settings.abbreviateScoreLabels;

  const character = session.players.find((x) => x.user.id === user.id)
    ?.character;

  if (!character) {
    throw new Error("User is not a part of this campaign.");
  }

  return (
    <IonPage>
      <PageHeader
        title={`Character Sheet ${character ? ": " + character.name : ""}`}
      />
      <HeaderCard />

      <AdaptiveBodyCardLayout>
        <ScoresCard character={character} abbreviate={abbreviate} />

        <SavingThrowsCard character={character} abbreviate={abbreviate} />

        <SkillsCard character={character} />

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags, within an
            ion-cardContent element.
          </IonCardContent>
        </IonCard>
      </AdaptiveBodyCardLayout>
    </IonPage>
  );
}

export default CharacterSheet;

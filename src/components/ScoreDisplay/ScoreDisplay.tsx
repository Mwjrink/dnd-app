import React from "react";
import { StyledScoreDisplay } from "./ScoreDisplay.Styled";
import { getModifier, Score } from '../../models/character';

interface ScoreDisplayProps {
  swapScore: boolean;
  score: Score;
}

export default function ScoreDisplay({ score, swapScore }: ScoreDisplayProps) {
  const { modifierString } = getModifier(score);

  return (
    <StyledScoreDisplay>
      <span id="mainScore">{swapScore ? score.score : modifierString}</span>
      <span id="secondaryScore">{swapScore ? modifierString : score.score }</span>
    </StyledScoreDisplay>
  );
}

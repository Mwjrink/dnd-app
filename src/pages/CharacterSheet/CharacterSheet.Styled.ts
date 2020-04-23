import styled from "styled-components";

export const AdaptiveBodyCardLayout = styled.div`
  display: flex;
  flex: 1;

  /* Portrait */
  @media screen and (orientation: portrait) {
    /* Portrait styles here */
    flex-direction: column;
    justify-content: flex-start;
  }

  /* Landscape */
  @media screen and (orientation: landscape) {
    /* Landscape styles here */
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;

    img {
      width: 15rem;
      height: 15rem;
    }
  }
`;

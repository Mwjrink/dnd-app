import styled from "styled-components";

export const AdaptiveHeaderCardContentLayout = styled.div`
  display: flex;
  /* Portrait */
  @media screen and (orientation: portrait) {
    /* Portrait styles here */
    flex-direction: column;
    justify-content: space-between;
  }

  /* Landscape */
  @media screen and (orientation: landscape) {
    /* Landscape styles here */
    flex-direction: row-reverse;
    justify-content: space-between;

    img {
      width: 15rem;
      height: 15rem;
    }
  }
`;

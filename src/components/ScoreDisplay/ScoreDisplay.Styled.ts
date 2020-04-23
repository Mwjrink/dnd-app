import styled from "styled-components";

export const StyledScoreDisplay = styled.div`
  width: 3rem;
  height: 1.5rem;
  position: relative;

  /* first number */
  #mainScore {
    position: absolute;
    font-size: 1.5rem;
    left: 0;
    bottom: 0;
  }

  /* first number */
  #secondaryScore {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

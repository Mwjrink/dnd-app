import styled from "styled-components";

interface SavingThrowsColorizerProps {
  proficient: boolean;
}

// TODO: use a real theme, not just hard coded
export const SavingThrowsCardLayout = styled.div<SavingThrowsColorizerProps>`
  color: ${({ proficient }) => (proficient ? "#3880ff" : "inherit")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 8rem;
  width: 20%;
  max-width: 12rem;

  text-transform: uppercase;
  padding-right: 0.5rem;
`;

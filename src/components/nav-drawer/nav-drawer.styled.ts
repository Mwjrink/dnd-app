import styled from "../../styled-components";
import { BoxShadow } from "../../utils";
import { themeGenerator } from "../../theme";

interface StyledNavDrawerProps {
  open: boolean;
}

export const StyledNavDrawer = styled.View<StyledNavDrawerProps>`
  ${BoxShadow(3)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  height: 100vh;  
  width: 20%;
  min-width: 320px;
  max-width: 400px;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  /* transition: transform
    ${({ theme, open }) =>
      open ? theme.animation.inSpeed : theme.animation.outSpeed}
    ease-in-out; */
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-101%)")};
/* 
  @media (max-width: 20%) {
    width: 100%;
  }

  a {
    width: 100%;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.onSurface};
*/
    /* // TODO: @Max, make this not use background */
/* 
    background: ${({ theme }) => theme.colors.surface};
    text-decoration: none;
    transition: background
      ${({ theme, open }) =>
        open ? theme.animation.inSpeed : theme.animation.outSpeed}
      linear;

    @media (max-width: 20%) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  } 
*/
`;

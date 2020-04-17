import * as styledComponents from "styled-components/native";
import { themeGenerator } from "./theme";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ReturnType<typeof themeGenerator>>;

export { css, ThemeProvider };
export default styled;
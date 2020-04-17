import React from "react";
import styled, { ThemeProvider } from "./src/styled-components";
import { themeGenerator } from "./src/theme";
import NavDrawer from "./src/components/nav-drawer";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;

export default function App() {
  // const settings: Settings = {
  //   closeTabs: false,
  //   includePinnned: false,
  //   width: 450,
  //   height: 600, // max for chrome extension
  //   ignoreNewtabs: false,
  //   unsuspendTabs: true,
  // };
  const theme = themeGenerator(false);

  return (
    // <SettingsContext.Provider value={settings}>
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <Title>React Native with 💅 Styled Components</Title>
        </Container>
        <NavDrawer /> 
      </>
    </ThemeProvider>
    // </SettingsContext.Provider>
  );
}

// <View>
// <Text>
// <Image>
// <ScrollView>
// <TextInput>

// async function getMoviesFromApiAsync() {
//   try {
//     let response = await fetch('https://reactnative.dev/movies.json');
//     let json = await response.json();
//     return json.movies;
//   } catch (error) {
//     console.error(error);
//   }
// }

// function getMoviesFromApi() {
//   return fetch('https://reactnative.dev/movies.json')
//     .then((response) => response.json())
//     .then((json) => {
//       return json.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

/*
inventory
rules/rulebook
maps
dice rolling

database view (create and view)
  - import export xml
  - item database
  - spell database
  - class database
  - race database
  - monsters database
  - feats database
  - backgrounds database
*/

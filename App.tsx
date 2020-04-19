import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// MUST BE FIRST ^
import React, { useState } from "react";
import "react-native-gesture-handler";
import { getTheme, ThemeContext, Button } from "react-native-material-ui";
import { NavDrawer } from "./src/components/nav-drawer/nav-drawer";
import { CharSheet } from "./src/pages/char-sheet/char-sheet";
import { lightUiTheme } from "./src/theme";
import { View, Text } from "react-native";
import { BoxShadow } from "./src/style.utils";

export default function App() {
  const Stack = createStackNavigator();

  const [isNavDrawerOpen, openNavDrawer] = useState(false);

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={getTheme(lightUiTheme)}>
        <View
          style={{
            height: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              bottom: "0",
            }}
          >
            {/* // navigation.navigate('Profile', {name: 'Jane'}) */}
            <Button
              text="Click mee!"
              onPress={() => openNavDrawer((value) => !value)}
            />
            {/*           
            <Stack.Navigator>
              <Stack.Screen
                name="Character Sheet"
                component={CharSheet}
                options={{ title: "Welcome" }}
              />
              <Stack.Screen name="Profile" component={CharSheet} />
            </Stack.Navigator> */}
          </View>
          <NavDrawer open={isNavDrawerOpen} />
          {/* // topbar */}
          <View />
        </View>
      </ThemeContext.Provider>
    </NavigationContainer>
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

/*
import { withTheme } from 'react-native-material-ui'

class MyButton extends Component {
    render() {
	    // it's really easy to get primary color everywhere in your app
        const { primaryColor } = this.props.theme.palette;

        return ...
    }
}

export default withTheme(MyButton)
*/

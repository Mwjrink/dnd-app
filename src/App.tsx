import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import {
  barbellOutline,
  barbellSharp,
  beerOutline,
  beerSharp,
  bicycleOutline,
  bicycleSharp,
  bookOutline,
  bookSharp,
  heartCircleOutline,
  heartCircleSharp,
} from "ionicons/icons";
// import Page from "./pages/Page";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./routing";
/* Theme variables */
import "./theme/variables.css";
import { CreateSessionContext } from "./utils/DnDSessionContext";
import { CreateUserContext } from "./utils/UserContext";
import { Character } from './models/character';

const App: React.FC = () => {
  const defaultCharContext = {
    character: {
      name: "Abraxus Rex",
      classes: [{ name: "Fighter" }],
      race: { name: "Dragonborn" },
      proficiencyBonus: 1,

      str: {
        name: "strength",
        score: 10,
        savingThrowProficiency: true,
        icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
      },
      dex: {
        name: "dexterity",
        score: 10,
        savingThrowProficiency: false,
        icon: { iosIcon: bicycleOutline, mdIcon: bicycleSharp },
      },
      con: {
        name: "constitution",
        score: 10,
        savingThrowProficiency: true,
        icon: { iosIcon: heartCircleOutline, mdIcon: heartCircleSharp },
      },
      int: {
        name: "intelligence",
        score: 10,
        savingThrowProficiency: false,
        icon: { iosIcon: bookOutline, mdIcon: bookSharp },
      },
      wis: {
        name: "wisdom",
        score: 10,
        savingThrowProficiency: false,
        icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
      },
      cha: {
        name: "charisma",
        score: 10,
        savingThrowProficiency: false,
        icon: { iosIcon: beerOutline, mdIcon: beerSharp },
      },

      skills: [
        {
          name: "Athletics",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "str", // score this skill scales off
        },

        {
          name: "Acrobatics",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "dex", // score this skill scales off
        },
        {
          name: "Sleight of Hand",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "dex", // score this skill scales off
        },
        {
          name: "Stealth",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "dex", // score this skill scales off
        },

        {
          name: "Arcana",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "int", // score this skill scales off
        },
        {
          name: "History",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "int", // score this skill scales off
        },
        {
          name: "Investigation",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "int", // score this skill scales off
        },
        {
          name: "Nature",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "int", // score this skill scales off
        },
        {
          name: "Religion",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "int", // score this skill scales off
        },

        {
          name: "Animal Handling",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "wis", // score this skill scales off
        },
        {
          name: "Insight",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "wis", // score this skill scales off
        },
        {
          name: "Medicine",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "wis", // score this skill scales off
        },
        {
          name: "Perception",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "wis", // score this skill scales off
        },
        {
          name: "Survival",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "wis", // score this skill scales off
        },

        {
          name: "Deception",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "cha", // score this skill scales off
        },
        {
          name: "Intimidation",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "cha", // score this skill scales off
        },
        {
          name: "Performance",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "cha", // score this skill scales off
        },
        {
          name: "Persuasion",
          proficiency: 0, // 0 for not-proficient, 1 for proficient, 2 for expertise
          scoreKey: "cha", // score this skill scales off
        },
      ],
    } as Character,
  };

  const defaultUserContext = {
    user: {
      id: 0,
      userName: "string",
      email: "string",
      firstName: "string",
      lastName: "string",
    },
  };

  const defaultSessionContext = {
    session: {
      dm: {
        id: 0,
        userName: "string",
        email: "string",
        firstName: "string",
        lastName: "string",
      },
      players: [
        {
          user: defaultUserContext.user,
          character: defaultCharContext.character,
        },
      ],
      name: "string",
    },
  };

  // const CharacterContext = CreateCharacterContext(defaultCharContext);
  const SessionContext = CreateSessionContext(defaultSessionContext);
  const UserContext = CreateUserContext(defaultUserContext);
  // const db = new DbManager(SQLite);
  // db.init();

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main"> */}
        <Menu />
        {/* <CharacterContext.Provider value={defaultCharContext}> */}
        <SessionContext.Provider value={defaultSessionContext}>
          <UserContext.Provider value={defaultUserContext}>
            <IonRouterOutlet id="main">
              {routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    component={route.component}
                    exact
                  />
                );
              })}
              {/* <Route path="/page/:name" component={Page} exact /> */}
              <Redirect from="/" to="/character-sheet" exact />
            </IonRouterOutlet>
          </UserContext.Provider>
        </SessionContext.Provider>
        {/* </CharacterContext.Provider> */}
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

// NPC Generator
// Encounter Builder

// https://ionicframework.com/docs/native/app-preferences
// https://ionicframework.com/docs/native/app-rate
// https://ionicframework.com/docs/native/app-update
// https://ionicframework.com/docs/native/spotify-auth
// https://ionicframework.com/docs/native/push
// https://ionicframework.com/docs/native/file
// https://ionicframework.com/docs/native/unique-device-id

/*
https://ionicframework.com/docs/native/firebase-authentication
https://ionicframework.com/docs/native/firebase-config
https://ionicframework.com/docs/native/firebase-crashlytics same as: https://ionicframework.com/docs/native/firebase-crash
https://ionicframework.com/docs/native/firebase-messaging
https://ionicframework.com/docs/native/firebase-x same as: https://ionicframework.com/docs/native/firebase ??
*/

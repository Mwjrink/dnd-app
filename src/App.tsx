import { IonApp, IonRouterOutlet, isPlatform } from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
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
import { Character, CharacterState } from "./models/character";
import { routes } from "./routing";
/* Theme variables */
import "./theme/variables.css";
import { CreateSessionContext } from "./utils/DnDSessionContext";
import { CreateUserContext } from "./utils/UserContext";
import { Die } from "./models/common";
import {
  CreateCharacterContext,
  CurrentCharacterContext,
} from "./utils/CharacterContext";

if (isPlatform("electron")) {
  // const { Menu : ElectronMenu } = require("electron");
  // ElectronMenu.setApplicationMenu(null);
}

const Router: any = isPlatform("electron")
  ? IonReactHashRouter
  : IonReactHashRouter;

const App: React.FC = () => {
  console.log("Current route: " + window.location.href);

  console.log((isPlatform("electron") ? "#/" : "") + "some-route-page");

  const defaultCharContext: CurrentCharacterContext = {
    character: {
      name: "Abraxus Rex",
      classes: [{ name: "Fighter" }],
      race: { name: "Dragonborn" },
      proficiencyBonus: 1,
      ac: 13,
      hitPoints: 20,
      hitDice: ["d6"],
      speed: 30,
      passivePerception: 15,
      initiative: 12,
      alignment: {
        minor: "neutral",
        major: "neutral",
      },

      gender: "male",
      age: 34,
      weight: 200,
      height: 72,
      size: "medium",
      description: "this is a description", // allow markdown formatting or something like that

      inventory: {
        items: [],
        money: {
          cp: 1,
          sp: 2,
          ep: 3,
          gp: 4,
          pp: 5,
        },
      },
      equipment: {
        items: [],
        money: {
          cp: 1,
          sp: 2,
          ep: 3,
          gp: 4,
          pp: 5,
        },
      },
      // also allow access to a shared party inventory
      // array/dict if Inventories and wallets that can be named and shared at will

      background: {
        name: "string",
        lnnguages: ["string"],
        source: "string",
        page: 10,
        tools: ["string"],
        skills: ["string"],
      },
      attacks: [],
      spellSlots: [1, 1, 2, 3],

      // tags like active, cool, anything the user wants
      tags: ["this", "is", "a", "tag"],

      customProps: {},

      str: {
        name: "strength",
        score: 12,
        savingThrowProficiency: true,
        icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
      },
      dex: {
        name: "dexterity",
        score: 15,
        savingThrowProficiency: false,
        icon: { iosIcon: bicycleOutline, mdIcon: bicycleSharp },
      },
      con: {
        name: "constitution",
        score: 13,
        savingThrowProficiency: true,
        icon: { iosIcon: heartCircleOutline, mdIcon: heartCircleSharp },
      },
      int: {
        name: "intelligence",
        score: 9,
        savingThrowProficiency: false,
        icon: { iosIcon: bookOutline, mdIcon: bookSharp },
      },
      wis: {
        name: "wisdom",
        score: 12,
        savingThrowProficiency: false,
        icon: { iosIcon: barbellOutline, mdIcon: barbellSharp },
      },
      cha: {
        name: "charisma",
        score: 11,
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
    state: {
      hitPoints: 10,
      hitDice: ["d6" as Die],
      inspiration: false,
      deathSaves: [],
      spellSlots: [1, 1, 1, 2, 2, 3, 4, 5],
      // this is for stuff like lay on hands etc (maybe separate this for number vs string?)
      customProps: {
        "Hunted Monster Type": "dragons",
        layOnHands: 10,
      },
      experience: 69420,
    } as CharacterState,
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
          state: defaultCharContext.state,
        },
      ],
      name: "string",
    },
  };

  // TODO: is session and user even necessary? we could just pass it into menu and whatnot
  const SessionContext = CreateSessionContext(defaultSessionContext);
  const UserContext = CreateUserContext(defaultUserContext);
  // TODO: this should be derived from session and user
  const CharacterContext = CreateCharacterContext(defaultCharContext);
  // const db = new DbManager(SQLite);
  // db.init();

  return (
    <IonApp>
      {/* <IonReactRouter> */}
      <Router>
        {/* <IonSplitPane contentId="main"> */}
        <Menu />
        <SessionContext.Provider value={defaultSessionContext}>
          <UserContext.Provider value={defaultUserContext}>
            <CharacterContext.Provider value={defaultCharContext}>
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
                <Redirect from="/" to="character-sheet" exact />
                {/* <Route path="/" exact component={CharacterSheet} /> */}
              </IonRouterOutlet>
            </CharacterContext.Provider>
          </UserContext.Provider>
        </SessionContext.Provider>
        {/* </IonSplitPane> */}
      </Router>
      {/* </IonReactRouter> */}
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

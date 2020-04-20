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
// import Page from "./pages/Page";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./routing";
/* Theme variables */
import "./theme/variables.css";
import { CreateCharacterContext } from "./utils/CharacterContext";

const App: React.FC = () => {
  const defaultCharContext = { character: null };
  const CharacterContext = CreateCharacterContext(defaultCharContext);

  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main"> */}
        <Menu />
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
            <Redirect from="/" to="/character-sheet" exact />
          </IonRouterOutlet>
        </CharacterContext.Provider>
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

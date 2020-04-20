import {
  IonApp,
  IonMenuButton,
  IonRouterOutlet,
  IonSplitPane,
} from "@ionic/react";
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
import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { routes } from "./routing";
/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu open={navMenuOpen} />
          <IonMenuButton onClick={() => setNavMenuOpen((value) => !value)} />
          <IonRouterOutlet id="main">
            {routes.map((route) => {
              return (
                <Route path={route.path} component={route.component} exact />
              );
            })}
            {/* <Route path="/page/:name" component={Page} exact /> */}
            <Redirect from="/" to="/character-sheet" exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

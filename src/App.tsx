import React, { useState } from "react";
import { Route } from "react-router-dom";

import LoanDetails from "./pages/LoanDetails";
import WaysToSave from "./pages/WaysToSave";

import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { calculatorOutline, cashOutline } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [finalLoanDetails, setFinalLoanDetails] = useState<any>();
  const [calculated, setCalculated] = useState<Boolean>(false);

  const passPaymentDetails = (details: object) => {
    setFinalLoanDetails(details);
  };

  const setCaulatedHandler = (bool: boolean) => {
    setCalculated(bool);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/">
              <LoanDetails
                passPaymentDetails={passPaymentDetails}
                setCalculatedHandler={setCaulatedHandler}
              />
            </Route>
            <Route exact path="/save">
              <WaysToSave
                finalLoanDetails={finalLoanDetails}
                calculated={calculated}
              />
            </Route>
          </IonRouterOutlet>
          <IonTabBar color="primary" slot="bottom">
            <IonTabButton tab="loan-details" href="/">
              <IonIcon icon={calculatorOutline} />
              <IonLabel>Loan Details</IonLabel>
            </IonTabButton>
            <IonTabButton tab="save" href="/save">
              <IonIcon icon={cashOutline} />
              <IonLabel>How To Save</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;

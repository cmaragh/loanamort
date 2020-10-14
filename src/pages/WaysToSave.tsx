import React from "react";

import SaveContainer from "../components/SaveContainer";

import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

const WaysToSave: React.FC<{
  finalLoanDetails: any;
  calculated: Boolean;
}> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Manage Loan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {props.calculated ? (
          <SaveContainer finalLoanDetails={props.finalLoanDetails} />
        ) : (
          <h1>Please provide loan details</h1>
        )}
      </IonContent>
    </IonPage>
  );
};

export default WaysToSave;

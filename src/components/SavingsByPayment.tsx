import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonItem,
  IonInput,
} from "@ionic/react";

const SavingsByPayment: React.FC<{
  newPaymentAmountString: string;
  newPaymentAmountCalc: (payment: number) => void;
  finalLoanDetails: any;
  newLoanDetails: any;
}> = (props) => {
  const newPaymentAmountHandler = (event: CustomEvent) => {
    props.newPaymentAmountCalc(event.detail.value);
  };

  const overallChange =
    Math.round(
      (props.finalLoanDetails.totalPaid - props.newLoanDetails.totalPaid) * 100
    ) / 100;

  let overallChangeColor = "white";

  if (overallChange === 0) {
    overallChangeColor = "white";
  } else if (overallChange > 0) {
    overallChangeColor = "green";
  } else if (overallChange < 0) {
    overallChangeColor = "red";
  }

  return (
    <React.Fragment>
      <IonItem className="ion-margin">
        <IonLabel position="floating">Monthly Payment</IonLabel>
        <IonInput
          type="number"
          placeholder={props.newPaymentAmountString}
          onIonChange={newPaymentAmountHandler}
        ></IonInput>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>
              <p>Overall Savings or Loss</p>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <p>Adjusted Loan Term</p>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <p>Original Loan Term</p>
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto", color: overallChangeColor }}>{`$${overallChange}`}</h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>{`${
                props.newLoanDetails.newTerm
                  ? props.newLoanDetails.newTerm
                  : props.finalLoanDetails.duration
              } years`}</h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                {`${props.finalLoanDetails.duration} years`}
              </h2>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </React.Fragment>
  );
};

export default SavingsByPayment;

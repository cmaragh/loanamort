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
  savingsColor: string;
  savingsColorHandler: (color: string) => void;
}> = (props) => {
  const newPaymentAmountHandler = (event: CustomEvent) => {
    props.newPaymentAmountCalc(event.detail.value);
  };

  const overallChange =
    Math.round(
      (props.finalLoanDetails.totalPaid - props.newLoanDetails.totalPaid) * 100
    ) / 100;

  if (overallChange === 0) {
    props.savingsColorHandler("#EDEDED");
  } else if (overallChange > 0) {
    props.savingsColorHandler("#72C953");
  } else if (overallChange < 0) {
    props.savingsColorHandler("#ED4040");
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
              <h2
                style={{
                  margin: "auto",
                  color:
                    overallChange === 0 || isNaN(overallChange)
                      ? "initial"
                      : props.savingsColor,
                }}
              >
                {isNaN(overallChange)
                  ? "Not enough to pay off loan"
                  : `$${overallChange}`}
              </h2>
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

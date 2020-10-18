import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

const SavingsByYear: React.FC<{
  newTermDurationString: string;
  newTermDurationCalc: (term: number) => void;
  finalLoanDetails: any;
  newLoanDetails: any;
  savingsColor: string;
  savingsColorHandler: (color: string) => void;
}> = (props) => {
  const newTermDurationHandler = (event: CustomEvent) => {
    props.newTermDurationCalc(event.detail.value);
  };

  return (
    <React.Fragment>
      <IonItem className="ion-margin">
        <IonLabel position="floating">Loan Term (years)</IonLabel>
        <IonInput
          type="number"
            placeholder={props.newTermDurationString}
            onIonChange={newTermDurationHandler}
        ></IonInput>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>
              <p>Overall Savings</p>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <p>Adjusted Monthly Payment</p>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <p>Original Monthly Payment</p>
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                {`$${
                  Math.round(
                    (props.finalLoanDetails.totalPaid -
                      props.newLoanDetails.totalPaid) *
                      100
                  ) / 100
                }`}
              </h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                {`$${
                props.newLoanDetails.newPaymentAmount
                  ? props.newLoanDetails.newPaymentAmount
                  : props.finalLoanDetails.paymentAmount
              }`}
              </h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                {`$${props.finalLoanDetails.paymentAmount}`}
              </h2>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </React.Fragment>
  );
};

export default SavingsByYear;

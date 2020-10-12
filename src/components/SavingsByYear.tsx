import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

const SavingsByYear: React.FC = (props) => {
  return (
    <React.Fragment>
      <IonItem className="ion-margin">
        <IonLabel position="floating">Loan Term</IonLabel>
        <IonInput
          type="number"
        //   placeholder={props.newPaymentAmountString}
        //   onIonChange={newPaymentAmountHandler}
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
              <h2 style={{ margin: "auto" }}>
                {/* {`$${
                  Math.round(
                    (props.finalLoanDetails.totalPaid -
                      props.newLoanDetails.totalPaid) *
                      100
                  ) / 100
                }`} */}
              </h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                  {/* {`${
                props.newLoanDetails.newTerm
                  ? props.newLoanDetails.newTerm
                  : props.finalLoanDetails.duration
              } years`} */}
              </h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <h2 style={{ margin: "auto" }}>
                {/* {`${props.finalLoanDetails.duration} years`} */}
              </h2>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </React.Fragment>
  );
};

export default SavingsByYear;

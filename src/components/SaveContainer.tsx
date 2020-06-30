import React, { useState, useEffect } from "react";
import SaveBarChart from "./SaveBarChart";
import { IonItem, IonLabel, IonInput, IonText } from "@ionic/react";

const SaveContainer: React.FC<{
  finalLoanDetails: any;
}> = (props) => {
  const [newPaymentAmount, setNewPaymentAmount] = useState<number>(
    props.finalLoanDetails.paymentAmount
  );
  const [newLoanDetails, setNewLoanDetails] = useState<any>(
    props.finalLoanDetails
  );

  let newPaymentAmountString = "";
  if (newPaymentAmount) {
    newPaymentAmountString = newPaymentAmount.toString();
  }

  const newPaymentAmountHandler = (event: CustomEvent) => {
    if (event.detail.value > props.finalLoanDetails.paymentAmount) {
      setNewPaymentAmount(event.detail.value);
    } else {
      setNewPaymentAmount(props.finalLoanDetails.paymentAmount);
    }
  };

  useEffect(() => {
    let detailsForGraph;
    if (newPaymentAmount > props.finalLoanDetails.paymentAmount) {
      detailsForGraph = newLoanTermsCalc(newPaymentAmount);
      setNewLoanDetails(detailsForGraph);
    } else {
      setNewLoanDetails(props.finalLoanDetails);
    }
  }, [newPaymentAmount]);

  const newLoanTermsCalc = (payment: number) => {
    const loanAmount = props.finalLoanDetails.enteredPaymentAmount;
    const interestRate = props.finalLoanDetails.interestRate;
    const effectiveInterest = interestRate / (12 * 100);
    const v = 1 / (1 + effectiveInterest);
    const newTerm =
      Math.log(1 - (loanAmount * effectiveInterest) / payment) / Math.log(v);

    return {
      payment: payment,
      totalPaid: Math.round(payment * newTerm * 100) / 100,
      interestSavings:
        props.finalLoanDetails.totalInterest - (newTerm * payment - loanAmount),
      newTerm: Math.round((newTerm / 12) * 10) / 10,
    };
  };

  return (
    <div className="save-container ion-text-center">
      <IonText color="primary">
        <h1>Current Payment</h1>
      </IonText>
      <IonText color="primary">
        <h1>{props.finalLoanDetails.paymentAmount}</h1>
      </IonText>

      <IonItem className="ion-margin">
        <IonText>
          The more you pay per month, the less you pay overall! Try increasing
          your payment by any amount to see how much you will save in the long
          run.
        </IonText>
      </IonItem>
      <IonItem className="ion-margin">
        <IonLabel position="floating">Adjust Payment</IonLabel>
        <IonInput
          type="number"
          placeholder={newPaymentAmountString}
          onIonChange={newPaymentAmountHandler}
        ></IonInput>
      </IonItem>
      <div className="ion-text-center">
        <IonText>
          <p style={{ margin: "3px" }}>Overall Savings</p>
          <h2 style={{ margin: "auto" }}>
            {`$${
              Math.round(
                (props.finalLoanDetails.totalPaid - newLoanDetails.totalPaid) *
                  100
              ) / 100
            }`}
          </h2>
          <br></br>
          <p style={{ margin: "3px" }}>New Loan Term</p>
          <h2 style={{ margin: "auto" }}>{`${
            newLoanDetails.newTerm
              ? newLoanDetails.newTerm
              : props.finalLoanDetails.duration
          } years`}</h2>
          <br></br>
          <br></br>
          <br></br>
        </IonText>
      </div>
      <SaveBarChart
        newLoanDetails={newLoanDetails}
        finalLoanDetails={props.finalLoanDetails}
      />
    </div>
  );
};

export default SaveContainer;

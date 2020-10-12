import React, { useState, useEffect } from "react";
import SaveBarChart from "./SaveBarChart";
import TogglePaymentYear from "./TogglePaymentYear";
import SavingsByPayment from "./SavingsByPayment";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const SaveContainer: React.FC<{
  finalLoanDetails: any;
}> = (props) => {
  const [newPaymentAmount, setNewPaymentAmount] = useState<number>(
    props.finalLoanDetails.paymentAmount
  );
  const [newLoanDetails, setNewLoanDetails] = useState<any>(
    props.finalLoanDetails
  );

  const [selectedValue, setSelectedValue] = useState<string>("Payment");
  const toggleOption = (option: string) => {
    setSelectedValue(option);
  };

  let newPaymentAmountString = "";
  if (newPaymentAmount) {
    newPaymentAmountString = newPaymentAmount.toString();
  }

  const newPaymentAmountCalc = (value: number) => {
    if (value > props.finalLoanDetails.paymentAmount) {
      setNewPaymentAmount(value);
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
      <TogglePaymentYear
        toggleOption={toggleOption}
        selectedValue={selectedValue}
      />
      <div className="ion-text-center">
        {selectedValue === "Payment" ? (
          <SavingsByPayment
            newPaymentAmountString={newPaymentAmountString}
            newPaymentAmountCalc={newPaymentAmountCalc}
            finalLoanDetails={props.finalLoanDetails}
            newLoanDetails={newLoanDetails}
          />
        ) : (
          "SavingsByYear"
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <SaveBarChart
        newLoanDetails={newLoanDetails}
        finalLoanDetails={props.finalLoanDetails}
      />
    </div>
  );
};

export default SaveContainer;

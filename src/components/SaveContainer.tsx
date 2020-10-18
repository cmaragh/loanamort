import React, { useState, useEffect } from "react";
import SaveBarChart from "./SaveBarChart";
import TogglePaymentYear from "./TogglePaymentYear";
import SavingsByPayment from "./SavingsByPayment";
import SavingsByYear from "./SavingsByYear";

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

  const [newTermDuration, setNewTermDuration] = useState<number>(
    props.finalLoanDetails.duration
  );

  const [newLoanDetails, setNewLoanDetails] = useState<any>(
    props.finalLoanDetails
  );

  const [selectedValue, setSelectedValue] = useState<string>("Payment");


  const [savingsColor, setSavingsColor] = useState<string>("#EDEDED");
  const savingsColorHandler = (color: string) => {
    setSavingsColor(color);
  }

  const toggleOption = (option: string) => {
    setSelectedValue(option);
  };

  //Used for the SavingsByPayment component placeholder
  let newPaymentAmountString = "";
  if (newPaymentAmount) {
    newPaymentAmountString = newPaymentAmount.toString();
  }

  let newTermDurationString = "";
  if (newTermDuration) {
    newTermDurationString = newTermDuration.toString();
  }

  //USED FOR SAVINGSBYPAYMENT COMPONENT
  //This function is passed as prop for SavingsByPayment component and is set by user
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
  //////

  //USED FOR SAVINGSBYYEAR COMPONENT

  const newTermDurationCalc = (term: number) => {
    if (term > 0) {
      setNewTermDuration(term);
    } else {
      setNewTermDuration(props.finalLoanDetails.duration);
    }
  };

  const newPaymentCalc = (loanTerm: number) => {
    const loanAmount = props.finalLoanDetails.enteredPaymentAmount;
    const interestRate = props.finalLoanDetails.interestRate;
    const effectiveInterest = interestRate / (12 * 100);
    const v = 1 / (1 + effectiveInterest);
    const newNumberOfPayments = loanTerm * 12;
    const aAngleN = (1 - Math.pow(v, newNumberOfPayments)) / effectiveInterest;
    const newPaymentAmount =
      Math.round(
        (props.finalLoanDetails.enteredPaymentAmount / aAngleN) * 100
      ) / 100;

    return loanTerm == props.finalLoanDetails.duration
      ? props.finalLoanDetails
      : {
          newPaymentAmount,
          totalPaid: Math.round(newPaymentAmount * loanTerm * 12 * 100) / 100,
          interestSavings:
            props.finalLoanDetails.totalInterest -
            (loanTerm * 12 * newPaymentAmount - loanAmount),
        };
  };

  useEffect(() => {
    let detailsForGraph;
    detailsForGraph = newPaymentCalc(newTermDuration);
    setNewLoanDetails(detailsForGraph);
  }, [newTermDuration]);
  //////

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
            savingsColor={savingsColor}
            savingsColorHandler={savingsColorHandler}
          />
        ) : (
          <SavingsByYear
            newTermDurationString={newTermDurationString}
            newTermDurationCalc={newTermDurationCalc}
            finalLoanDetails={props.finalLoanDetails}
            newLoanDetails={newLoanDetails}
            savingsColor={savingsColor}
            savingsColorHandler={savingsColorHandler}
          />
        )}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <SaveBarChart
        newLoanDetails={newLoanDetails}
        finalLoanDetails={props.finalLoanDetails}
        savingsColor={savingsColor}
      />
    </div>
  );
};

export default SaveContainer;

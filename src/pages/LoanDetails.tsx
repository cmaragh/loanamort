import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react";
import InputContainer from "../components/InputContainer";
import InfoContainer from "../components/InfoContainer";
import Chart from "../components/Chart";

import "../theme/variables.css";

const LoanDetails: React.FC<{
  passPaymentDetails: (details: any) => void;
  setCalculatedHandler: (bool: boolean) => void;
}> = (props) => {
  // const [calculated, setCalculated] = useState<Boolean>();
  const [finalLoanDetails, setFinalLoanDetails] = useState<any>({
    calculated: false,
  });

  const calculatePayment = (details: any) => {
    const newNumberOfPayments = +details.duration * 12;
    const duration = +details.duration;
    const interestRate = +details.interestRate;
    const effectiveInterest = +details.interestRate / (12 * 100);
    const enteredPaymentAmount = +details.loanAmount;

    if (!newNumberOfPayments || !effectiveInterest || !enteredPaymentAmount) {
      return;
    }

    const v = 1 / (1 + effectiveInterest);
    const aAngleN = (1 - Math.pow(v, newNumberOfPayments)) / effectiveInterest;
    const paymentAmount =
      Math.round((enteredPaymentAmount / aAngleN) * 100) / 100;

    //----- CALC PAYMENT/INTEREST ARRAYS -----//
    const payments = [];
    for (let i = 0; i < newNumberOfPayments; i++) {
      payments.push({
        amount: paymentAmount,
        number: i,
        interest:
          Math.round(
            paymentAmount * (1 - Math.pow(v, newNumberOfPayments - i)) * 100
          ) / 100,
      });
    }

    //----- SUM INTEREST -----//
    let totalInterest = 0;
    for (let i = 0; i < payments.length; i++) {
      totalInterest = totalInterest + payments[i].interest;
    }
    const totalPaid = enteredPaymentAmount + totalInterest;

    setFinalLoanDetails({
      enteredPaymentAmount,
      numberOfPayments: newNumberOfPayments,
      paymentAmount,
      payments,
      totalInterest,
      totalPaid,
      calculated: true,
      duration,
      interestRate,
    });
  };

  useEffect(() => {
    props.passPaymentDetails(finalLoanDetails);
  }, [finalLoanDetails]);

  const loanDetailsHandler = (details: object) => {
    calculatePayment(details);
    props.setCalculatedHandler(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Loan Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <InputContainer loanDetailsHandler={loanDetailsHandler} />
        {finalLoanDetails.calculated && (
          <InfoContainer
            paymentAmount={finalLoanDetails.paymentAmount}
            totalInterest={finalLoanDetails.totalInterest}
          />
        )}
        {finalLoanDetails.calculated && (
          <div style={{ margin: "auto" }}>
            <Chart
              totalInterest={finalLoanDetails.totalInterest}
              loanAmount={finalLoanDetails.enteredPaymentAmount}
            />
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default LoanDetails;

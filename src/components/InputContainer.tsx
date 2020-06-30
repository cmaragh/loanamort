import React, { useRef, useState } from "react";

import {
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonButton,
} from "@ionic/react";

import "./GrayContainer.css";

const InputContainer: React.FC<{
  loanDetailsHandler: (details: object) => void;
}> = (props) => {
  const loanAmountRef = useRef<HTMLIonInputElement>(null);
  const durationRef = useRef<HTMLIonInputElement>(null);
  const interestRateRef = useRef<HTMLIonInputElement>(null);

  const passInitialDetails = () => {
    const initialDetails = {
      loanAmount: loanAmountRef.current!.value,
      duration: durationRef.current!.value,
      interestRate: interestRateRef.current!.value
    };

    props.loanDetailsHandler(initialDetails);
  }

  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Loan Amount</IonLabel>
              <IonInput type="number" ref={loanAmountRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Duration (In Years)</IonLabel>
              <IonInput type="number" ref={durationRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Interest Rate (%)</IonLabel>
              <IonInput type="number" ref={interestRateRef}></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton
              color="secondary"
              shape="round"
              onClick={passInitialDetails}
            >
              Calculate
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default InputContainer;

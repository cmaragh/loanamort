import React from "react";
import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const TogglePaymentYear: React.FC<{
  selectedValue: string;
  toggleOption: (value: string) => void;
}> = (props) => {
  const toggleOptionHandler = (event: CustomEvent) => {
    props.toggleOption(event.detail.value);
  };

  return (
    <IonSegment value={props.selectedValue} onIonChange={toggleOptionHandler}>
      <IonSegmentButton value="Payment">
        <IonLabel>Adjust Payment</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value="Year">
        <IonLabel>Adjust Loan Term</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default TogglePaymentYear;

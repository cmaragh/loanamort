import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const HelpModal: React.FC<{
  showModal: boolean;
  showModalHandler: () => void;
}> = (props) => {
  return (
    <IonModal isOpen={props.showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Loan Information</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={props.showModalHandler}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          
      </IonContent>
    </IonModal>
  );
};

export default HelpModal;

import React, { useState } from "react";
import { IonGrid, IonCol, IonRow, IonLabel, IonItem } from "@ionic/react";

import "./GrayContainer.css";

const InfoContainer: React.FC<{
  paymentAmount: any;
  totalInterest: any;
  totalPaid: any;
}> = (props) => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>
              <p>Total Loan Cost</p>
            </IonLabel>
            <IonLabel>
              <h1>${Number(props.totalPaid).toLocaleString()}</h1>
            </IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>
              <p>Monthly Payment</p>
            </IonLabel>
            <IonLabel>
              <h2>${Number(props.paymentAmount).toLocaleString()}</h2>
            </IonLabel>
          </IonCol>
          <IonCol>
            <IonLabel>
              <p>Total Interest Paid</p>
            </IonLabel>
            <IonLabel>
              <h2>${Number(props.totalInterest).toLocaleString()}</h2>
            </IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default InfoContainer;

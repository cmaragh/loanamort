import React from "react";
import { IonGrid, IonRow, IonCol, IonLabel } from "@ionic/react";

const SaveInfo: React.FC<{
  saveInfo: any;
  duration: number;
  percentage: string;
}> = (props) => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonLabel>Monthly Payment</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>{props.saveInfo.payment}</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonLabel>{props.percentage} more per month</IonLabel>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default SaveInfo;

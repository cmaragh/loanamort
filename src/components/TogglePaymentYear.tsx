import React from "react";
import {IonSegment, IonSegmentButton, IonLabel} from '@ionic/react';

const TogglePaymentYear: React.FC = (props) => {
  return (
      <IonSegment>
          <IonSegmentButton>
              <IonLabel>
                  Adjust Payment
              </IonLabel>
          </IonSegmentButton>
          <IonSegmentButton>
              <IonLabel>
                  Adjust Loan Term
              </IonLabel>
          </IonSegmentButton>
      </IonSegment>
  );
};

export default TogglePaymentYear;

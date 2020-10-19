import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonText,
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
      <IonContent class="ion-padding">
        <IonLabel>
          <h1>Loan Amount</h1>
        </IonLabel>
        <IonText>
          <p>
            This is the total remaining amount for your loan (also referred to
            as the principal). This could also be the remaining principal on an
            already active loan. For example, on a ten-year loan that has nine
            remaining years, you can enter the remaining principal for those
            nine years in this field.
          </p>
        </IonText>
        <br></br>
        <IonLabel>
          <h1>Duration</h1>
        </IonLabel>
        <IonText>
          <p>
            This is the time remaining before the loan is fully paid off.
            Similar to Loan Amount, you can enter the years remaining on an
            existing loan. This is a factor that affects the total cost of your
            loan (along with interest rate); the longer the loan term, the more
            the overall cost of the loan.
          </p>
        </IonText>
        <br></br>
        <IonLabel>
          <h1>Interest Rate</h1>
        </IonLabel>
        <IonText>
          <p>
            This is the interest rate associated with your loan. Typically, a
            better credit score means a lower interest rate. This is a factor
            that affects the total cost of a loan (along with loan duration);
            the higher the interest rate, the more the overall cost of the loan.
          </p>
          <p>
            Many lenders use what is called a nominal interest rate convertible
            monthly. This means, for example, that a 12% annual interest rate
            would compound 1% of the remaining principal every month.
          </p>
        </IonText>
        <br></br>
        <IonLabel>
          <h1>Monthly Payment</h1>
        </IonLabel>
        <IonText>
          <p>
            This is the payment you will pay every month (typically the same
            amount each month) until the loan is fully paid off. The payment is
            comprised of both principal and interest. As you continue to make
            payments, each payment includes more principal and less interest
            (although they start with mostly interest).
          </p>
        </IonText>
        <br></br>
        <IonLabel>
          <h1>Total Interest Paid</h1>
        </IonLabel>
        <IonText>
          <p>
            This is the interest rate associated with your loan. Typically, a
            better credit score means a lower interest rate. This is a factor
            that affects the total cost of a loan (along with loan duration);
            the higher the interest rate, the more the overall cost of the loan.
          </p>
        </IonText>
      </IonContent>
    </IonModal>
  );
};

export default HelpModal;

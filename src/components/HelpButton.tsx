import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { helpCircleOutline } from "ionicons/icons";
import { attachProps } from "@ionic/react/dist/types/components/utils";

const HelpButton: React.FC<{
  showModalHandler: () => void;
}> = (props) => {
  return (
    <IonButton shape="round" fill="clear" onClick={props.showModalHandler}>
      <IonIcon icon={helpCircleOutline} size="large" />
    </IonButton>
  );
};

export default HelpButton;

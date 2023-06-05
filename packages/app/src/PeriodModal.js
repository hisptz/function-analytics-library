import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  ButtonStrip,
  Button,
} from "@dhis2/ui";
import React from "react";

const PeriodModal = ({ setIsOpenPeriod }) => {
  const handleUpdate = () => {
    alert("You are about to update");
  };
  return (
    <div>
      <Modal onClose={() => setIsOpenPeriod(false)}>
        <ModalTitle>Period Selection</ModalTitle>
        <ModalContent></ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={() => setIsOpenPeriod(false)} secondary>
              Hide
            </Button>
            <Button primary onClick={handleUpdate} secondary>
              Update
            </Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
};

export default PeriodModal;

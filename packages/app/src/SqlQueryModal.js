import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui";
import React from "react";

const SqlQueryModal = ({ setIsOpenSqlQuery }) => {
  const handleUpdate = () => {
    alert("you are about to update");
  };
  return (
    <div>
      <Modal onClose={() => setIsOpenSqlQuery(false)}>
        <ModalTitle>Sql View query Selection </ModalTitle>
        <ModalContent></ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={onclick} secondary>
              {" "}
              save{" "}
            </Button>
            <Button primary onClick={onclick} secondary>
              {" "}
              Cancel
            </Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
};

export default SqlQueryModal;

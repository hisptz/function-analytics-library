import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
  OrganisationUnitTree,
} from "@dhis2/ui";
import React from "react";
import CustomBox from "./CustomBox";

function OrganizationTreeModal({ isOpen, setIsOpen }) {
  return (
    <div>
      <Modal large onClose={() => setIsOpen(false)}>
        <ModalTitle>Organization Unit</ModalTitle>
        <ModalContent>
          <OrganisationUnitTree
            initiallyExpanded={["/ImspTQPwCqd/ImspTQPwCqd"]}
            name="Root org unit"
            onChange={() => {}} //to be implemented
            roots={["ImspTQPwCqd"]}
          />
        </ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={() => setIsOpen(false)} secondary>
              Hide
            </Button>
            <Button primary>Update</Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
}

export default OrganizationTreeModal;

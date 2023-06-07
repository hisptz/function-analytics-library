import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  ButtonStrip,
  Button,
  Transfer,
} from "@dhis2/ui";
import React, { useState } from "react";

const PeriodModal = ({ setIsOpenPeriod }) => {
  const [selectedii, setselectedii] = useState();
  const handleUpdate = () => {
    alert("You are about to update");
  };
  return (
    <div>
      <Modal onClose={() => setIsOpenPeriod(false)}>
        <ModalTitle>Period Selection</ModalTitle>
        <ModalContent>
          <Transfer
            selected={selectedii}
            dataTest="dhis2-uicore-transfer"
            filterCallback={() => {}}
            filterCallbackPicked={() => {}}
            height="240px"
            initialSearchTerm=""
            initialSearchTermPicked=""
            maxSelections={Infinity}
            onChange={({ selected }) => setselectedii(selected)}
            options={[
              {
                label: "This Month",
                value: "This Month",
              },
              {
                label: "Last Month",
                value: "Last Month",
              },
              {
                label: "Last 3 Months",
                value: "Last 3 Months",
              },
              {
                label: "Last 6 Months",
                value: "Last 6 Months",
              },
              {
                label: "Months this Year",
                value: "Months this Year",
              },
              {
                label: "Year",
                value: "Year",
              },
            ]}
          />
        </ModalContent>
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

import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui";
import { DataSourceSelector } from "@hisptz/dhis2-ui";
import PropTypes from "prop-types";
import React, { useState } from "react";

const DataElementModal = ({ setIsOpenDataElement }) => {
  const [selectedi, setSelectedi] = useState();
  return (
    <div>
      <Modal onClose={() => setIsOpenDataElement(false)}>
        <ModalTitle>Data Element Selection</ModalTitle>
        <ModalContent>
          <DataSourceSelector
            selected={selectedi}
            maxSelections={Infinity}
            onSelect={(selection) => setSelectedi(selection)}
            dataSources={[
              "indicator",
              "dataElement",
              "dataSet",
              "programIndicator",
              "sqlView",
            ]}
          />
        </ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={() => setIsOpenDataElement(false)} secondary>
              Hide
            </Button>
            <Button primary onClick={onclick} secodary>
              Update
            </Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
};
export default DataElementModal;

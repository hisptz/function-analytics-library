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

const DataElementModal = ({ hide, onClose, onUpdate }) => {
  const [selectedi, setSelectedi] = useState();
  const [sqlViews, setSqlViews] = useState([]);

  const fetchSQLViews = async () => {
    const sqlViewClient = new SQLView({
      baseURL: "https://vmi1245558.contaboserver.net/udsmfyp",
      username: "admin",
      password: "district"
    });

    try {
      const result = await sqlViewClient.get();
      setSqlViews(result);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleClickUpdate = () => {
    // Perform the desired action with the selected SQL Views query
    console.log('Selected SQL Views:', selectedi);
    // Close the modal
    onUpdate(selectedi);
    onClose()
  };

  return (
    <div>
      <Modal hide={hide} onClose={onClose}>
        <ModalTitle>Data Element Selection</ModalTitle>
        <ModalContent>
          <DataSourceSelector
            selected={selectedi}
            maxSelections={1}
            onSelect={(selection) => {
              setSelectedi(selection)}}
            dataSources={[
              // "indicator",
              // "dataElement",
              // "programIndicator",
              "sqlView",
            ]}
          />
           {/* Display the SQL Views query options */}
           {sqlViews.map((sqlView) => (
            <div key={sqlView.id}>{sqlView.query}</div>
          ))}
        </ModalContent>
        <ModalActions>
          <ButtonStrip end>
            <Button onClick={onClose} secodary>
              Hide
            </Button>
            
            <Button primary onClick={handleClickUpdate} secodary>
              Update
            </Button>
          </ButtonStrip>
        </ModalActions>
      </Modal>
    </div>
  );
};
export default DataElementModal;

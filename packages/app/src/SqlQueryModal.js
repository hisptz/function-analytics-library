import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
  SingleSelectField,
  SingleSelectOption,
} from "@dhis2/ui";
import React, { useState } from "react";

const inputStyle = {
  borderRadius: 6,
  padding: "2px 3px",
  outline: "none",
  border: "2px solid gray",
  height: 50,
};
const initialForm = {
  name: "",
  Description: "",
  Cachestrategy: "",
  SQLtype: "",
  SQLquery: "",
};
const SqlQueryModal = ({ setIsOpenSqlQuery }) => {
  const [formData, setFormData] = useState(initialForm);
  const handleUpdate = () => {
    alert("you are about to update");
  };
  return (
    <div>
      <Modal onClose={() => setIsOpenSqlQuery(false)}>
        <ModalTitle> Sql query </ModalTitle>
        <ModalContent>
          <div>
            <h4>
              This object will be created with public edit and view rights
            </h4>
            <form
              style={{
                display: "flex",
                gap: 5,
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                type="text"
                style={inputStyle}
                placeholder="Name(*)"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="text"
                style={inputStyle}
                placeholder="Description"
                value={formData.Description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Description: e.target.value,
                  })
                }
              />

              <SingleSelectField
                placeholder="Cache strategy"
                onChange={() => {}}
              >
                <SingleSelectOption label="No cache" value="No cache" />
                <SingleSelectOption
                  label="cache for 15 minutes"
                  value="cache for 15 minutes"
                />
                <SingleSelectOption
                  label="respect system setting"
                  value="respect system setting "
                />
              </SingleSelectField>

              <SingleSelectField placeholder="Sql type" onChange={() => {}}>
                <SingleSelectOption label="View" value="view" />
                <SingleSelectOption
                  label="Materialized view"
                  value="materialized view"
                />
                <SingleSelectOption label="SQL" value="sql" />
              </SingleSelectField>

              <input
                type="text"
                style={inputStyle}
                placeholder="Sql query(*)"
                value={formData.SQLquery}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    SQLquery: e.target.value,
                  })
                }
              />
            </form>
          </div>
        </ModalContent>
        <ModalActions>
          <ButtonStrip>
            <Button primary onClick={onclick} secondary>
              {" "}
              save{" "}
            </Button>
            <Button onClick={onclick} secondary>
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

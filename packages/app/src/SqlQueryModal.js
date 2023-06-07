import {
  Button,
  ButtonStrip,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
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

              <input
                type="text"
                style={inputStyle}
                placeholder="Cache strategy(*)"
                value={formData.Cachestrategy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Cachestrategy: e.target.value,
                  })
                }
              />

              <input
                type="text"
                style={inputStyle}
                placeholder="SQL type(*)"
                value={formData.SQLtype}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    SQLtype: e.target.value,
                  })
                }
              />

              <textarea
                type="text"
                style={inputStyle}
                placeholder="SQL query"
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

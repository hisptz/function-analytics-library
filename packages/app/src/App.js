import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonStrip,
  DropdownButton,
  FlyoutMenu,
  MenuItem,
  Modal,
  ModalActions,
  ModalContent,
  ModalTitle,
} from "@dhis2/ui";
import classes from "./App.module.css";
import CustomBox from "./CustomBox";
import OrganizationTreeModal from "./OrganizationTreeModal";
import PeriodModal from "./PeriodModal";
import DataElementModal from "./DataElementModal";
import SqlQueryModal from "./SqlQueryModal";

const MyApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [isOpenDataElement, setIsOpenDataElement] = useState(false);
  const [isOpenSqlQuery, setIsOpenSqlQuery] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div style={{ display: "flex", gap: "5px", flexDirection: "row" }}>
        <CustomBox
          name="Write Query:"
          component={"sql view query"}
          onClick={() => setIsOpenSqlQuery(true)}
        />
        <CustomBox
          name="Data Selection:"
          component={"Data Element"}
          onClick={() => {
            setIsOpenDataElement(true);
          }}
        />
        <CustomBox
          name="Category Selection:"
          component={"Period"}
          onClick={() => setIsOpenPeriod(true)}
        />

        <CustomBox
          name="Filter Selection:"
          component={"Organization unit"}
          onClick={handleClick}
        />
      </div>
      <div
        style={{
          border: "1px solid #c4c9cc",
          padding: 8,
          paddingTop: 2,
          width: "100%",
        }}
      >
        <ButtonStrip>
          <Button name="Primary button" primary value="default">
            Update
          </Button>
          <Button>Options</Button>
          <Button>Download</Button>
          <DropdownButton
            end
            component={
              <FlyoutMenu>
                <MenuItem label="Line Graph" />
                <MenuItem label="Bar Chart" />
                <MenuItem label="Stacked Bar Chart" />
              </FlyoutMenu>
            }
            name="buttonName"
            value="buttonValue"
          >
            Visualization Type
          </DropdownButton>
        </ButtonStrip>
      </div>
      <div
        style={{
          height: "50%",
          width: "400px",
          margin: "auto auto",
        }}
      >
        <div style={{ backgroundColor: "#ffff" }}>
          <h3>Getting Started: </h3>
          <ul>
            <li>Select the dimensions above</li>
            <li>Select the type of visualization</li>
            <li>Click the update button to generate visualization</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#ffff", display: "block" }}>
          <h3>Your recent visualization: </h3>
          <ul>
            <li>ANC Bar Graph</li>
          </ul>
        </div>
      </div>
      {isOpen ? (
        <OrganizationTreeModal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : isOpenPeriod ? (
        <PeriodModal setIsOpenPeriod={setIsOpenPeriod} />
      ) : isOpenDataElement ? (
        <DataElementModal setIsOpenDataElement={setIsOpenDataElement} />
      ) : (
        isOpenSqlQuery && (
          <SqlQueryModal setIsOpenSqlQuery={setIsOpenSqlQuery} />
        )
      )}
    </div>
  );
};

export default MyApp;

import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonStrip,
  DropdownButton,
  FlyoutMenu,
  MenuItem,
} from "@dhis2/ui";
import classes from "./App.module.css";
import CustomBox from "./CustomBox";
import OrganizationTreeModal from "./OrganizationTreeModal";

const MyApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [component, setComponent] = useState('');
  const handleClick = () => {
    setIsOpen(!isOpen);
    setComponent()
  };

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div style={{display: 'flex'}}>
        <CustomBox
          name="Filter Selection:"
          component={"Organization unit"}
          onClick={handleClick}
        />
         <CustomBox
          name="Write Query:"
          component={"Select Query"}
          onClick={()=>alert('You just clicked')}
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
          <Button
                    disabled

                    name="Disabled primary button"

                    value
                    ="default">Download</Button>

          <DropdownButton
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
            <li>Select the dimensions </li>
            <li>Fill in your query in the form</li>
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
      {isOpen && (
        <OrganizationTreeModal isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default MyApp;

import React from "react";
import { useNavigate } from "react-router-dom";
import CustomBox from "../CustomBox";
import {
  Box,
  Button,
  ButtonStrip,
  DropdownButton,
  FlyoutMenu,
  MenuItem,
} from "@dhis2/ui";

const Header = ({ handleClick, setIsOpenPeriod, setIsOpenDataElement }) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", gap: "5px", flexDirection: "row" }}>
        <div style={{ display: "flex", flex: 1 }}>
          <CustomBox
            name="Data Selection:"
            component={"Data Element"}
            onClick={() => setIsOpenDataElement(true)}
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
            // border: "1px solid #c4c9cc",
            marginTop: "auto",
            padding: 8,
            // paddingTop: 2,
            // width: "100%",
            // marginLeft: "4.5cm",
            // marginTop: "0.5cm",
          }}
        >
          <DropdownButton
            end
            component={
              <FlyoutMenu>
                <MenuItem
                  onClick={() => {
                    navigate("/graph/line");
                  }}
                  label="Line Graph"
                />
                <MenuItem
                  onClick={() => {
                    navigate("/graph/bar");
                  }}
                  label="Bar Graph"
                />
                <MenuItem
                  onClick={() => {
                    navigate("/graph/multiple");
                  }}
                  label="Multiple column Graph"
                />
              </FlyoutMenu>
            }
            name="buttonName"
            value="buttonValue"
          >
            Visualization Type
          </DropdownButton>
        </div>
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

          <DropdownButton
            component={
              <FlyoutMenu>
                <MenuItem label="Open" />
                <MenuItem label="Download" />
                <MenuItem label="Save" />
                <MenuItem label="Save as" />
                <MenuItem label="Rename" />
              </FlyoutMenu>
            }
            name="buttonName"
            value="buttonValue"
          >
            File
          </DropdownButton>
          <Button name="" onClick={() => navigate("/")}>
            back to dashboard
          </Button>
        </ButtonStrip>
      </div>
    </>
  );
};

export default Header;

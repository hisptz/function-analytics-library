import React, { useState, useEffect } from "react";
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
import { SQLView } from "lib";
import { QueryClientProvider, useQuery, QueryClient } from "@tanstack/react-query"
//import SqlQueryModal from "./SqlQueryModal";
//import { SQLView, Fn } from '../../lib/src/client';
// import Chart from "./ChartComponent";
// import ChartComponent from "./ChartComponent";


async function get({ queryKey }) {
  console.log({queryKey})

  const sqlViewObject = queryKey[0];
  if (sqlViewObject) {
    const sqlView = new SQLView({
      baseURL: process.env.REACT_APP_DHIS2_PROXY,
      username: process.env.REACT_APP_DHIS2_USERNAME,
      password: process.env.REACT_APP_DHIS2_PASSWORD
    }).setId(sqlViewObject.id);

    return await sqlView.getData() ?? null;

  }
  else {
    return null;
  }
}

function Home() {


  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [isOpenDataElement, setIsOpenDataElement] = useState(false);
  const [sqlViewSelected, setSqlview] = useState();

  const { data, isLoading, error } = useQuery([sqlViewSelected], get, {
    enabled: !!sqlViewSelected,
  });


  const onUpdate = (selectedSqlView) => {
    console.log(selectedSqlView)
    const sqlView = selectedSqlView[0];
    setSqlview(sqlView);
  }


  console.log({ data })
  console.log({ isLoading })
  console.log({ error })

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
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
        </ButtonStrip>
      </div>
      <div
        style={{
          height: "50%",
          width: "400px",
          margin: "auto auto",
        }}
      >
        {
          !sqlViewSelected && (<>
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
            <div style={{ backgroundColor: "#ffff", display: "block" }}>
              <h3>
                Welcome {" "}
              </h3>
            </div>
          </>)
        }
        {
          sqlViewSelected && isLoading ? (
            <div>Loading...</div>
          ) : null
        }
        {
          data && (
            <div>{JSON.stringify(data)}</div>
          )
        }
      </div>
      {isOpen ? (
        <OrganizationTreeModal isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : isOpenPeriod ? (
        <PeriodModal setIsOpenPeriod={setIsOpenPeriod} />
      ) : isOpenDataElement ? (
        <DataElementModal onUpdate={onUpdate} hide={!isOpenDataElement} onClose={() => setIsOpenDataElement(false)} />
      ) : null}

      {/* The chart to appear here */}
      {/* <ChartComponent /> */}
    </div>
  );
}

const queryClient = new QueryClient()

function MyApp() {

  return (
    <QueryClientProvider client={queryClient} >
      <Home />
    </QueryClientProvider>
  )

}

export default MyApp;

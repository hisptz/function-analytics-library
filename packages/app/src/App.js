import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
} from "react-router-dom";
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
import PeriodModal from "./PeriodModal";
import DataElementModal from "./DataElementModal";
import { SQLView } from "lib";
import { QueryClientProvider, useQuery, QueryClient } from "@tanstack/react-query"
//import SqlQueryModal from "./SqlQueryModal";
//import { SQLView, Fn } from '../../lib/src/client';
// import Chart from "./ChartComponent";
// import ChartComponent from "./ChartComponent";
import Recents from "./components/Recents";
import { BarGraph, StackedBar, LineGraph } from "./components/graphs";
import Header from "./components/Header";

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
    <BrowserRouter>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Header
          handleClick={handleClick}
          setIsOpenPeriod={setIsOpenPeriod}
          setIsOpen={setIsOpen}
          setIsOpenDataElement={setIsOpenDataElement}
        />
        <div>
          <Routes>
            <Route path="" element={<Recents />} />
            <Route path="/graph/bar" element={<BarGraph />} />
            <Route path="/graph/line" element={<LineGraph />} />
            <Route path="/graph/multiple" element={<StackedBar />} />
          </Routes>
        </div>
        {isOpen ? (
          <OrganizationTreeModal isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : isOpenPeriod ? (
          <PeriodModal setIsOpenPeriod={setIsOpenPeriod} />
        ) : isOpenDataElement ? (
          <DataElementModal setIsOpenDataElement={setIsOpenDataElement} />
        ) : null}

        {/* The chart to appear here */}
        {/* <ChartComponent /> */}
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
    </BrowserRouter>
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

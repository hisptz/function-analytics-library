import React, { useState } from "react";
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
import Recents from "./components/Recents";
import { BarGraph, StackedBar, LineGraph } from "./components/graphs";
import Header from "./components/Header";

function MyApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPeriod, setIsOpenPeriod] = useState(false);
  const [isOpenDataElement, setIsOpenDataElement] = useState(false);
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
    </BrowserRouter>
  );
}

export default MyApp;

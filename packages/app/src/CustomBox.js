import { Button } from "@dhis2/ui";
import React from "react";

function CustomBox({ name, component, onClick }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        maxWidth: "300px",
        height: "70px",
        padding: "2px",
        borderRadius: 5,
        margin: "5px 3px",
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "baseline",
      }}
    >
      <p style={{ paddingLeft: 3, color: "GrayText" }}>{name}</p>
      <button
        type="button"
        style={{
          height: 30,
          marginTop: 30,
          cursor: "pointer",
          color: "ButtonText",
        }}
        onClick={onClick}
      >
        {component}
      </button>
    </div>
  );
}

export default CustomBox;

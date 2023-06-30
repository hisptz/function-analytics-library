import React from "react";

const Recents = () => {
  return (
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
      <div style={{ backgroundColor: "#ffff", display: "block" }}>
        <h3>
          Welcome to the Built-In- Functional Analytics Library where You can
          Build in and Visualize it{" "}
        </h3>
      </div>
    </div>
  );
};

export default Recents;

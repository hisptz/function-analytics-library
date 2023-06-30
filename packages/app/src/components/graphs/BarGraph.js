import React from "react";
import { ChartAnalytics } from "@hisptz/dhis2-analytics";

const data = {
  headerWidth: 3,
  headers: [
    {
      column: "Data",
      hidden: false,
      meta: true,
      name: "dx",
      type: "java.lang.String",
      valueType: "TEXT",
    },
    {
      column: "Organisation unit",
      hidden: false,
      meta: true,
      name: "ou",
      type: "java.lang.String",
      valueType: "TEXT",
    },
    {
      column: "Value",
      hidden: false,
      meta: false,
      name: "value",
      type: "java.lang.Double",
      valueType: "NUMBER",
    },
  ],
  height: 15,
  metaData: {
    dimensions: {
      co: [],
      dx: ["Uvn6LCg7dVU"],
      ou: [
        "YuQRtpLP10I",
        "vWbkYPRmKyS",
        "dGheVylzol6",
        "zFDYIgyGmXG",
        "BGGmAwx33dj",
        "YmmeuGbqOwR",
        "daJPPxtIrQn",
        "U6Kr7Gtpidn",
        "JdhagCUEMbj",
        "kU8vhUkAGaT",
        "I4jWcnFmgEC",
        "KctpIIucige",
        "sxRd2XOzFbz",
        "npWGUj37qDe",
        "ARZ4y5i4reU",
      ],
      pe: ["2022"],
    },
    items: {
      2022: {
        name: "2022",
      },
      ARZ4y5i4reU: {
        name: "Wonde",
      },
      BGGmAwx33dj: {
        name: "Bumpe Ngao",
      },
      I4jWcnFmgEC: {
        name: "Niawa Lenga",
      },
      JdhagCUEMbj: {
        name: "Komboya",
      },
      KctpIIucige: {
        name: "Selenga",
      },
      O6uvpzGd5pu: {
        code: "OU_264",
        name: "Bo",
        uid: "O6uvpzGd5pu",
      },
      THIS_YEAR: {
        name: "This year",
      },
      U6Kr7Gtpidn: {
        name: "Kakua",
      },
      Uvn6LCg7dVU: {
        name: "ANC 1 Coverage",
      },
      YmmeuGbqOwR: {
        name: "Gbo",
      },
      YuQRtpLP10I: {
        name: "Badjia",
      },
      dGheVylzol6: {
        name: "Bargbe",
      },
      daJPPxtIrQn: {
        name: "Jaiama Bongor",
      },
      dx: {
        name: "Data",
      },
      kU8vhUkAGaT: {
        name: "Lugbu",
      },
      npWGUj37qDe: {
        name: "Valunia",
      },
      ou: {
        name: "Organisation unit",
      },
      pe: {
        name: "Period",
      },
      sxRd2XOzFbz: {
        name: "Tikonko",
      },
      tTUf91fCytl: {
        name: "Chiefdom",
        uid: "tTUf91fCytl",
      },
      vWbkYPRmKyS: {
        name: "Baoma",
      },
      zFDYIgyGmXG: {
        name: "Bargbo",
      },
    },
  },
  rows: [
    ["Uvn6LCg7dVU", "YuQRtpLP10I", "304.1"],
    ["Uvn6LCg7dVU", "vWbkYPRmKyS", "213.7"],
    ["Uvn6LCg7dVU", "dGheVylzol6", "126.5"],
    ["Uvn6LCg7dVU", "zFDYIgyGmXG", "206.4"],
    ["Uvn6LCg7dVU", "BGGmAwx33dj", "120.9"],
    ["Uvn6LCg7dVU", "YmmeuGbqOwR", "203.1"],
    ["Uvn6LCg7dVU", "daJPPxtIrQn", "89.3"],
    ["Uvn6LCg7dVU", "U6Kr7Gtpidn", "104.4"],
    ["Uvn6LCg7dVU", "JdhagCUEMbj", "187.1"],
    ["Uvn6LCg7dVU", "kU8vhUkAGaT", "96.1"],
    ["Uvn6LCg7dVU", "I4jWcnFmgEC", "147.9"],
    ["Uvn6LCg7dVU", "KctpIIucige", "91.1"],
    ["Uvn6LCg7dVU", "sxRd2XOzFbz", "203.2"],
    ["Uvn6LCg7dVU", "npWGUj37qDe", "95.7"],
    ["Uvn6LCg7dVU", "ARZ4y5i4reU", "84.3"],
  ],
  width: 3,
};

const Graph = () => {
  return (
    <div>
      <ChartAnalytics
        analytics={data}
        config={{
          layout: {
            category: ["ou"],
            filter: ["pe"],
            series: ["dx"],
          },
          type: "column",
        }}
      />
    </div>
  );
};

export default Graph;

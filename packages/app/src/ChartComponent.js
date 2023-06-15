import React, { useEffect, useRef } from "react";
import Chart from "chart.js";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      // Customize the chart options as needed
      responsive: true,
      maintainAspectRatio: false,
    };

    const chartData = {
      // Provide your chart data here
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sample Dataset",
          data: [10, 20, 30, 25, 15, 35],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;

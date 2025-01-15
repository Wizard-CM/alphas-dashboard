"use client"
import React from "react";
import { Line } from "react-chartjs-2";

// Extra Setup
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

function LineChart({ chartData,options }) {
  Chart.register(CategoryScale);

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}
export default LineChart;

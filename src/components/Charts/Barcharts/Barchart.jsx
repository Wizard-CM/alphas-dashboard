"use client";
import React from "react";
import Chart, { CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData,options }) => {
  Chart.register(CategoryScale);

  return (
    <div className="">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;

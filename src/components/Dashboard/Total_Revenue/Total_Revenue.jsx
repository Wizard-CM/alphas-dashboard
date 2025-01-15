import BarChart from "@/components/Charts/Barcharts/Barchart";
import LineChart from "@/components/Charts/Linechart/Linechart";
import Title from "@/components/Title";
import { totalRevenueData, totalRevenueOptions } from "@/data/chartData";
import { Magnifier } from "@/svg/Navbar";

import React from "react";

const Total_Revenue = ({ className }) => {
  return (
    <div
      className={`${className} bg-component_bg p-2 md:p-5 h-full shadow-md rounded-xl `}
    >
      <Title className="mb-8 font-semibold" title="Total Revenue" />
      <BarChart chartData={totalRevenueData} options={totalRevenueOptions} />

      <div className="legend flex gap-5 justify-center mt-8">
        <div className="left flex gap-1">
          <Magnifier />
          <p>Online Sales</p>
        </div>
        <div className="right flex gap-1">
          <Magnifier />
          <p>Offline Sales</p>
        </div>
      </div>
    </div>
  );
};

export default Total_Revenue;

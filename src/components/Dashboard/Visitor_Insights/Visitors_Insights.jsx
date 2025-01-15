import LineChart from "@/components/Charts/Linechart/Linechart";
import Title from "@/components/Title";
import { visitorInsightsData, visitorInsightsOptions } from "@/data/chartData";
import React from "react";

const Visitors_Insights = ({className}) => {
  return (
    <div className={`${className} bg-component_bg p-2 md:p-5 shadow-md rounded-xl `}>
      <Title className="mb-8 font-semibold" title="Visitor's Insight" />
      <LineChart
        chartData={visitorInsightsData}
        options={visitorInsightsOptions}
      />
    </div>
  );
};

export default Visitors_Insights;

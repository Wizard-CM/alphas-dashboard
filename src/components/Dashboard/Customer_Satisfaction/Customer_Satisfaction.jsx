import LineChart from "@/components/Charts/Linechart/Linechart";
import React from "react";
import {
  customerSatisfactionData,
  customerSatisfactionOptions,
} from "@/data/chartData";
import { BlueIcon, GreenIcon } from "@/svg/CustomerSatisfaction";
import Title from "@/components/Title";

const Customer_Satisfaction = ({ className }) => {
  return (
    <div className={`${className} bg-component_bg p-2 md:p-5 shadow-md rounded-xl `}>
      <Title className="mb-8 font-semibold" title="Customer Satisfaction" />
      <LineChart
        chartData={customerSatisfactionData}
        options={customerSatisfactionOptions}
      />

      <div className="font-semibold flex w-full justify-center mt-5">
        <div className="left border-e-secondary_text_color border-e-[1px] pe-3">
          <div className="flex gap-1 items-center">
            <GreenIcon />
            <span className="text-secondary_text_color">Last Month</span>
          </div>
          <p className="text-center mt-2">$3004</p>
        </div>
        <div className="right ps-3">
          <div className="flex gap-1 items-center">
            <BlueIcon />
            <span className="text-secondary_text_color">This Month</span>
          </div>
          <p className="text-center mt-2">$4504</p>
        </div>
      </div>
    </div>
  );
};

export default Customer_Satisfaction;

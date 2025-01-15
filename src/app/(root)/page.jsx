"use client";
import Customer_Satisfaction from "@/components/Dashboard/Customer_Satisfaction/Customer_Satisfaction";
import Target_Reality from "@/components/Dashboard/Target_Reality/Target_Reality";
import Todays_Sales from "@/components/Dashboard/Todays_Sales/Todays_Sales";
import Total_Revenue from "@/components/Dashboard/Total_Revenue/Total_Revenue";
import Visitors_Insights from "@/components/Dashboard/Visitor_Insights/Visitors_Insights";
import { useGlobalContext } from "@/context/context";
import React from "react";

const page = () => {
  const { activeTab } = useGlobalContext();
  return (
    <div className={`w-full h-full relative`}>
      {/* Dashboard Section || Tab 1 */}
      <section
        className={`w-full `}
        style={{ display: activeTab == 1 ? "block" : "none" }}
      >
        <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_32%] gap-4  justify-between flex-wrap">
          <Todays_Sales className="w-full" />
          <Visitors_Insights className="w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[55%_44%] xl:grid-cols-[37%_1.7fr_1fr] my-4 gap-4 flex-wrap">
          <Total_Revenue className="w-full" />
          <Customer_Satisfaction className="w-full" />
          <Target_Reality className="w-full" />
        </div>
      </section>

      {/* Section 2 || || Tab 2 */}
      <Section2 activeTab={activeTab} />
      {/* Section 3 || Tab 3 */}
      <Section3 activeTab={activeTab} />
    </div>
  );
};

export default page;

const Section2 = ({activeTab}) => {
  return (
    <section
      className={`w-full h-full`}
      style={{ display: activeTab == 2 ? "block" : "none" }}
    >
      This is section 2
    </section>
  );
};

const Section3 = ({activeTab}) => {
  return (
    <section
      className={`w-full h-full`}
      style={{ display: activeTab == 3 ? "block" : "none" }}
    >
      This is section 3
    </section>
  );
};

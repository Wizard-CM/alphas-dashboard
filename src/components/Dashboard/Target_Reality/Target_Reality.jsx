import BarChart from "@/components/Charts/Barcharts/Barchart";
import Title from "@/components/Title";
import { targetRealityData, targetRealityOptions } from "@/data/chartData";
import { GreenIcon } from "@/svg/CustomerSatisfaction";
import { Magnifier } from "@/svg/Navbar";
import { YellowIcon } from "@/svg/TargetReality";
import React from "react";

const Target_Reality = ({ className }) => {
  return (
    <div
      className={`${className} bg-component_bg h-full p-2 md:p-5 shadow-md rounded-xl `}
    >
      <Title className="mb-8 font-semibold" title="Target vs Reality" />
      <BarChart chartData={targetRealityData} options={targetRealityOptions} />

      <div className="realityStats flex flex-col mt-5">
        <div className="top w-[80%] flex justify-between items-center mb-4">
          <div className="left flex items-center gap-3">
            {/* <GreenIcon /> */}
            <Magnifier />
            <div className="text flex flex-col gap-1">
              <h3 className="font-semibold">Reality Sales</h3>
              <p className="text-sm text-secondary_text_color">Global</p>
            </div>
          </div>
          <div className="right text-[#27AE60] font-semibold">8823</div>
        </div>
        <div className="bottom w-[80%] flex justify-between items-center">
          <div className="left flex items-center gap-3">
            {/* <YellowIcon /> */}
            <Magnifier />
            <div className="text flex flex-col gap-1">
              <h3 className="font-semibold">Target Sales</h3>
              <p className="text-sm text-secondary_text_color">Commercial</p>
            </div>
          </div>
          <div className="right text-[#FFA412] font-semibold">8823</div>
        </div>
      </div>
    </div>
  );
};

export default Target_Reality;

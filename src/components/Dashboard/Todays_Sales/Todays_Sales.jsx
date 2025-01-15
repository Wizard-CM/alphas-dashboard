import React from "react";
import { salesData } from "@/data/datas";
import { Magnifier } from "@/svg/Navbar";
import Title from "@/components/Title";

const Todays_Sales = ({className}) => {
  return (
    <div className={`${className} flex w-full flex-wrap gap-10 flex-col bg-component_bg p-2 md:p-5 font-semibold shadow-md rounded-xl `}>
      <div className=" flex w-full justify-between items-center">
        <div className="left flex flex-col gap-2">
        <Title className="font-semibold" title="Total Sales" />
        <p className="text-secondary_text_color font-normal">Sales Summary</p>
        </div>
        <button className="cursor-pointer right px-3 py-2 border-secondary_text_color border-[1px] rounded-md flex items-center gap-2">
          <Magnifier size={18} />
          Export
        </button>
      </div>
      <div className=" flex w-full gap-4 justify-center lg:justify-start flex-wrap">
        {salesData.map((item, ind) => (
          <Widgets key={ind} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Todays_Sales;

// Local Component

const Widgets = ({ data }) => {
  return (
    <div
      className={`flex flex-col gap-1 px-4 py-2 rounded-2xl w-[170px]`}
      style={{ backgroundColor: data.bgColor }}
    >
      {/* {data.icon} */}
      {data.icon}
      <h3 className="text-2xl font-bold mt-2">{data.value}</h3>
      <p>{data.title}</p>
      <p className="text-blue-300 whitespace-nowrap text-[12px]">{data.change}</p>
    </div>
  );
};

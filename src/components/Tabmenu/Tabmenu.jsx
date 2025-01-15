"use client";
import { useGlobalContext } from "@/context/context";
import React from "react";

const tabOptions = [
  { id: 1, name: "Tab1" },
  { id: 2, name: "Tab2" },
  { id: 3, name: "Tab3" },
];

const Tabmenu = ({ className }) => {
  const { activeTab, setActiveTab } = useGlobalContext();

  const clickHandler = (id) => {
    setActiveTab(id);
  };

  return (
    <div
      className={`${className} bg-component_bg w-full  h-14 flex gap-4 md:gap-10 items-center p-2 md:p-5 font-semibold shadow-md rounded-xl `}
    >
      {tabOptions.map((option) => (
        <div
          key={option.id}
          className={`${
            activeTab == option.id && "border-red-500 border-4"
          } cursor-pointer bg-theme_color px-4 md:px-8 py-1 text-white rounded-md`}
          onClick={() => {
            clickHandler(option.id);
          }}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default Tabmenu;

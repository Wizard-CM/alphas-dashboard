"use client";
import React, { useEffect, useState } from "react";
import { DummyLogo } from "@/svg/Sidebar";
import { useGlobalContext } from "@/context/context";
import { DownArrow } from "@/svg/Navbar";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const Sidebar = ({ className, navigationItems }) => {


  const { isSidebarOpen, setSidebarOpen } = useGlobalContext();


  return (
    <div
      className={`${className} flex flex-col fixed w-[250px] transition-all duration-300 ease-in-out shadow-md  ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 bg-white z-10 p-5 bg-component_bg gap-6 items-center`}
    >
      <SidebarLogo_List className="" navigationItems={navigationItems} />
      <SidebarPremium className="" />
    </div>
  );
};

export default Sidebar;

// Sidebar Local Components

const SidebarLogo_List = ({ className, navigationItems }) => {
  const { setSidebarOpen } = useGlobalContext();
  const [dropDownOpen1, setDropDownOpen1] = useState(false);
  const [dropDownOpen2, setDropDownOpen2] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // know kih which item is clicked
  // if clicked item && the items that is being mapped matches , then only display the dropdown

  const pathname = usePathname()

  return (
    <div className={`${className} w-full flex flex-col gap-5`}>
      {/* LOGO PART */}
      <div className="logo flex items-center gap-5">
        <DummyLogo />
        <p>Dabang</p>
      </div>

      {/* LIST PART */}
      <div className="w-full list flex flex-col gap-1">
        {navigationItems.map((item) => {
          return (
            <Link
              href={item.link}
              className={`w-full cursor-pointer ps-6 pe-8 rounded-xl hover:bg-theme_color hover:drop-shadow-2xl font-semibold py-3 text-secondary_text_color hover:text-white relative overflow-hidden} ${pathname == item.link && "bg-theme_color text-white"}`}
              key={item.name}
              onClick={() => {
                setSidebarOpen(false);
                setActiveItem(item.name);
                // setDropDownOpen1(prev => !prev);

                if (dropDownOpen1 == true) {
                  setDropDownOpen1(false);
                  // if User has clicked the same opened dropdown with the intention to close it , then simply close it without
                  if (activeItem != item.name) setDropDownOpen2(true);
                } else {
                  setDropDownOpen2(false);
                  setDropDownOpen1(true);
                }
              }}
            >
              <div className="flex gap-4 items-center">
                {item.icon}
                {item.name}
              </div>

              {/* Condition for showing or not showing drop-down icon logic */}
              {item?.dropDown?.length > 0 && (
                <div className="absolute top-4 right-2">
                  <DownArrow />
                </div>
              )}

              {/* Condition for showing or not showing drop-down items logic */}
              {item?.dropDown?.length > 0 && item.name == activeItem && (
                <ul
                  className={`w-full flex flex-col gap-1 h-0 ${
                    dropDownOpen1 || dropDownOpen2 ? "h-32 mt-5" : "h-0"
                  }  transition-all duration-1000 linear`}
                >
                  {item.dropDown.map((item) => (
                    <li
                      className={`w-full flex gap-4 items-center ms-6 me-4 px-4 py-1  ${
                        dropDownOpen1 || dropDownOpen2 ? "visible" : "invisible"
                      } bg-[#8a8cf3] rounded-md text-white`}
                    >
                      {item.icon}
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const SidebarPremium = ({ className }) => {
  return (
    <div
      className={`${className} w-[85%]  text-white flex justify-center items-center flex-col bg-theme_color rounded-md gap-1 py-4`}
    >
      ICON
      <h3 className="font-semibold mt-1">DaBang Pro</h3>
      <p className="text-center w-[80%] mb-3 text-[10px]">
        Get access to all features at tetumbas
      </p>
      <button className="px-5 bg-white text-theme_color font-semibold  py-1 rounded-md">
        Get Pro
      </button>
    </div>
  );
};

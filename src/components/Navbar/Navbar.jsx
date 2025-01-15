"use client";
import { useGlobalContext } from "@/context/context";
import { DownArrow, Magnifier, MenuIcon, United } from "@/svg/Navbar";
import React from "react";

const Navbar = ({ className }) => {
  const { setSidebarOpen } = useGlobalContext();

  return (
    <div
      className={`${className} bg-component_bg flex w-full gap-5 md:gap-10 lg:gap-28 xl:gap-44 items-center h-20 px-2 md:px-5 text-primary_text_color font-semibold shadow-md`}
    >
      <div className="left">
        <h2 className="font-semibold text-2xl md:text-3xl ">Dashboard</h2>
      </div>
      <div className="right flex items-center gap-5 flex-1">
        <Searchbar className="" />
        <Language className="hidden lg:flex" />
        <Menu className="hidden md:flex" />

        <MenuIcon
          className="lg:hidden"
          onClick={() => {
            setSidebarOpen((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;

// Local Navbar Components

const Searchbar = ({ className }) => {
  return (
    <div
      className={`${className} search_bar flex items-center flex-1 relative `}
    >
      <div className="absolute top-2 left-3">
        <Magnifier />
      </div>
      <input
        type="text"
        className="bg-[#F9FAFB] outline-none w-full py-2 ps-12 pe-4 rounded-xl inline-block"
        placeholder="Search Here...."
      />
    </div>
  );
};

const Language = ({ className }) => {
  return (
    <div className={`${className} language flex items-center gap-4 `}>
      <div className="language_left flex items-center gap-2">
        <div className="british_logo_icon">
          <United />
        </div>
        <p> Eng (US)</p>
      </div>
      <div className="language_right">
        <DownArrow />
      </div>
    </div>
  );
};

const Menu = ({ className }) => {
  return (
    <div className={`${className} menu flex items-center gap-6 border-black`}>
      <div className="icon">
        <Magnifier />
      </div>
      <div className="user_logo flex items-center gap-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHjj0QVmfJLo5BrdEKQZ5td36QsOqjgTQFg&s"
          alt=""
          className="h-[50px] w-[50px] rounded-2xl"
        />
        <div className="logo_text flex  flex-col ">
          <span>User</span>
          <span>Admin</span>
        </div>
        <div className="down_arrow">
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

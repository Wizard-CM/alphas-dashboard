import Container from "@/components/Container";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Tabmenu from "@/components/Tabmenu/Tabmenu";
import ContextWrapper from "@/context/context";
import {
  CartIcon,
  ChartIcon,
  LockIcon,
  MessengerIcon,
  SettingsIcon,
  SignoutIcon,
  LineIcon,
} from "@/svg/Sidebar";

import React from "react";

const navigationItems = [
  { name: "Dashboard", icon: <LineIcon />, link: "/", dropDown: [] },
  { name: "Leaderboard", icon: <LineIcon />, link: "/leaderboard", dropDown: [] },
  { name: "Order", icon: <CartIcon />, link: "/order", dropDown: [] },
  { name: "Products", icon: <LockIcon />, link: "/products", dropDown: [] },
  { name: "Sales Report", icon: <ChartIcon />, link: "/salesReport", dropDown: [] },
  {
    name: "Messages",
    icon: <MessengerIcon />,
    link: "/messages",
    dropDown: [
      { name: "Item 1", icon: <LineIcon />, link: "/messages1" },
      { name: "Item 2", icon: <LineIcon />, link: "/messages2" },
      { name: "Item 3", icon: <LineIcon />, link: "/messages3" },
    ],
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    link: "/setting",
    dropDown: [
      { name: "Item 1", icon: <LineIcon />, link: "/settings1" },
      { name: "Item 2", icon: <LineIcon />, link: "/settings2" },
      { name: "Item 3", icon: <LineIcon />, link: "/settings3" },
    ],
  },
  { name: "Signout", icon: <SignoutIcon />, link: "/signout" },
];

const layout = ({ children }) => {
  return (
    <ContextWrapper>
      <div className="grid w-full min-h-screen  text-primary_text_color">
        {/* Left */}
        <Sidebar className="" navigationItems={navigationItems} />
        {/* Right */}
        <Container>
          <div className="flex flex-col lg:ms-[250px] ">
            <Navbar className="  " />
            {/* 80px */}
            <Tabmenu className=" mt-4" />
            {/* 12 + 52 */}
            <div className="w-full my-4 h-full">{children}</div>
          </div>
        </Container>
      </div>
    </ContextWrapper>
  );
};

export default layout;

import { Icon0, Icon1, Icon2, Icon3 } from "@/svg/TodaySales";

export const salesData = [
  {
    value: "$1k",
    title: "Total Sales",
    change: "+8% from yesterday",
    bgColor: "#ffe4e1", // Light pink background
    icon: <Icon0 />, // Replace with actual icon class or component
  },
  {
    value: "300",
    title: "Total Order",
    change: "+5% from yesterday",
    bgColor: "#fff6d8", // Light yellow background
    icon: <Icon3 />, // Replace with actual icon class or component
  },
  {
    value: "5",
    title: "Product Sold",
    change: "+1.2% from yesterday",
    bgColor: "#dfffd6", // Light green background
    icon: <Icon2 />, // Replace with actual icon class or component
  },
  {
    value: "8",
    title: "New Customers",
    change: "0.5% from yesterday",
    bgColor: "#f3e5ff", // Light purple background
    icon: <Icon1 />, // Replace with actual icon class or component
  },
];

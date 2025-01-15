"use client"
const { createContext, useState, useContext } = require("react");

export const context = createContext(null);

// CONTEXT Wrapper
const ContextWrapper = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isSidebarOpen,setSidebarOpen] = useState(false);

  return (
    <context.Provider value={{ activeTab, setActiveTab,isSidebarOpen,setSidebarOpen }}>
      {children}
    </context.Provider>
  );
};

// Using Global Context Varibales
export const useGlobalContext = () => {
  return useContext(context);
};

export default ContextWrapper;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#696aa1] min-h-screen max-w-screen p-3 ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`bg-[#e8e9f6] min-h-screen rounded-3xl p-3 transition-all duration-500 ${
          isOpen ? "ml-40" : "ml-14"
        }`}
      >
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;

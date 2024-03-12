import React, { useState } from "react";
import {
  TbHome,
  TbLayoutDashboard,
  TbCalendarUser,
  TbFileText,
  TbBooks,
  TbSettings,
  TbLogout,
} from "react-icons/tb";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="fixed top-2 left-2 h-screen bg-[#696aa1]  ">
      <div className="h-full flex flex-col justify-between text-2xl text-white">
        <div className="h-full flex flex-col gap-4">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer mb-8 ml-4 mt-4"
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
          <div className="flex items-center gap-3 pl-3 rounded-md border-l-2 border-[#ffc62f] ">
            <TbHome />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Home
            </span>
            {/* {isOpen ? <span className="text-base">Home</span> : ""} */}
          </div>
          <div className="flex items-center gap-3 pl-3 opacity-70 rounded-md border-l-2 border-[#fff2] ">
            <TbLayoutDashboard />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-3 pl-3 opacity-70 rounded-md border-l-2 border-[#fff2] ">
            <TbCalendarUser />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Timetable
            </span>
          </div>
          <div className="flex items-center gap-3 pl-3 opacity-70 rounded-md border-l-2 border-[#fff2] ">
            <TbFileText />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              File
            </span>
          </div>
          <div className="flex items-center gap-3 pl-3 opacity-70 rounded-md border-l-2 border-[#fff2] ">
            <TbBooks />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Lessons
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-3  pl-3 opacity-70 rounded-md border-l-2 border-[#fff2]">
            <TbSettings />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Settings
            </span>
          </div>
          <div className="flex items-center gap-3  pl-3 opacity-70 rounded-md border-l-2 border-[#fff2]">
            <TbLogout />
            <span
              className={`text-base ${
                isOpen ? "block" : "hidden"
              } transition-all duration-500 ease-in`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

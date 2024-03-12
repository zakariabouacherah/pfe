import React from "react";
import { TbBell, TbUserCircle } from "react-icons/tb";

const Header = () => {
  const today = new Date();

  const weekdays = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const weekday = weekdays[today.getDay()];
  const day = String(today.getDate()).padStart(2, "0");
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${weekday}, ${day}/${month}/${year}`;
  return (
    <div className="p-2 md:p-4">
      <div className=" w-full  flex items-center justify-between ">
        <div className="flex flex-col gap-2">
          <div className="text-2xl md:text-4xl">
            <TbUserCircle />
          </div>
          <div className="text-sm md:text-xl flex flex-col gap-0">
            <span>Bonjour, Formateur ✋</span>
            <span className="text-xs font-extralight text-neutral-500">
              Bienvenue dans la page d'absence
            </span>
          </div>
        </div>
        <div className="text-2xl text-[#050505] relative ">
          <TbBell />
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        </div>
      </div>
      <div className="text-xs md:text-sm font-semibold">{formattedDate}</div>
    </div>
  );
};

export default Header;

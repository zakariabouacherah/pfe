import React from "react";
import Buttons from "../components/Buttons";
import HomeBody from "../components/HomeBody";

const AbsenceHome = () => {
  return (
    <div className="md:px-4">
      <div className="flex flex-col-reverse items-center gap-3 lg:justify-between lg:flex-row">
        <Buttons />
        <div className="relative">
          <div className="relative m-4  lg:w-[80%] bg-slate-300 p-3 rounded-md ">
            Vous pouvez modifier les absences jusqu'à 1 semaine aprés la date de
            l'absence
          </div>
          <div className="absolute top-1 left-1 bg-slate-300 rounded-full w-6 h-6 flex items-center justify-center">
            i
          </div>
        </div>
      </div>
      <HomeBody />
    </div>
  );
};

export default AbsenceHome;

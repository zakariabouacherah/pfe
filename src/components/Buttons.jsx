import React from "react";
import { TbPencilMinus, TbListSearch, TbUserSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 ">
      <Link
        to="/appel"
        className="w-full flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-100 ease-in"
      >
        <div className="text-2xl md:text-3xl p-2 bg-[#e8f4e7] text-[#85BD81] self-start rounded-full">
          <TbPencilMinus />
        </div>
        <div>Marquer l'absence d'aujourd'hui</div>
      </Link>
      <div className="w-full flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-100 ease-in">
        <div className="text-2xl md:text-3xl p-2 bg-[#e8e9f6] text-[#696AA1] self-start rounded-full">
          <TbUserSearch />
        </div>
        <div>Chercher par stagiaire</div>
      </div>
      <div className="md:col-span-2 w-full flex flex-col gap-2 bg-white p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-100 ease-in">
        <div className="text-2xl md:text-3xl p-2 bg-[#fbf7ec] text-[#FFC62F] self-start rounded-full">
          <TbListSearch />
        </div>
        <div>Chercher par groupe</div>
      </div>
    </div>
  );
};

export default Buttons;

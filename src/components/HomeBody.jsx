import React from "react";
import States from "./States";
import Tableau from "./Tableau";
import { Link } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";

const HomeBody = () => {
  return (
    <div className="mt-6 flex flex-col ">
      {/* <div className="w-full flex justify-center">
        <Link to="/graphes">
          <VscGraph />
          <div>Voir les graphes</div>
        </Link>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-grow lg:w-[40%]">
          <States />
        </div>
        <div className="flex-grow lg:w-[60%]">
          <Tableau />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;

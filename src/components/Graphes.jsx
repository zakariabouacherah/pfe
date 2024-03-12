import React from "react";
import BarGraphe from "./graphes/BarGraphe";
import DoughnutChart from "./graphes/DoughnutChart";

const Graphes = () => {
  return (
    <div className="w-full mt-6 flex flex-col ">
      <h1 className="font-semibold text-2xl mb-4 uppercase">
        Les graphes démonstratifs :
      </h1>
      <div className="grid grid-cols-1 gap-4  ">
        <div className="p-3 rounded-md bg-white shadow-lg">
          <BarGraphe />
        </div>
        <div className="p-3 rounded-md bg-white shadow-lg">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default Graphes;

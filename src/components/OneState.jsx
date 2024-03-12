import React from "react";
import CountUp from "react-countup";

const OneState = ({ number, label, color }) => {
  return (
    <div
      className={`p-3 rounded-md flex flex-col gap-4 bg-white text-[${color}] shadow-lg`}
    >
      <div className="text-2xl font-bold">
        <CountUp start={0} end={number} duration={3} delay={1} />H
      </div>
      <div className="text-lg"> {label} </div>
    </div>
  );
};

export default OneState;

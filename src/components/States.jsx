import React from "react";
import OneState from "./OneState";
import Graphes from "./Graphes";

const States = () => {
  const states = [
    {
      title: "Absence Total",
      number: 25,
      colorCode: "#85BD81",
    },
    {
      title: "Absence Justifié",
      number: 5,
      colorCode: "#696AA1",
    },
    {
      title: "Absence Non-justifié",
      number: 20,
      colorCode: "#FFC62F",
    },
  ];
  return (
    <div className="">
      <div className="font-semibold text-2xl mb-4 uppercase">
        L'absence de la dernière semaine dans toutes les groupes :
      </div>
      <div className="flex flex-col gap-3">
        {states.map((item) => (
          <OneState
            color={item.colorCode}
            label={item.title}
            number={item.number}
            key={item.title}
          />
        ))}
      </div>
      <div>
        <Graphes />
      </div>
    </div>
  );
};

export default States;

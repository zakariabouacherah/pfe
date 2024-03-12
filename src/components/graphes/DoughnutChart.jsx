import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  intainAspectRatio: false,
  // responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
    title: {
      display: true,
      text: "Autre type des données",
      font: {
        size: 14,
        weight: "bold",
      },
    },
  },
};

export const data = {
  labels: ["Justifié", "Non-justifié"],
  datasets: [
    {
      label: "Pourcentage d'absences",
      data: [12, 88],
      backgroundColor: ["#FFC62F75", "#696AA175"],
      borderColor: ["#FFC62F", "#696AA1"],
      borderWidth: 1,
      circumference: 180,
      rotation: 270,
      borderRadius: 2,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="h-[200px] lg:h-[300px] w-[100%] lg:w-[100%] object-contain flex items-center justify-center ">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

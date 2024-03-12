import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  // responsive: false,
  plugins: {
    legend: {
      position: "bottom",
      display: true,
    },
    title: {
      display: true,
      text: "Total d'heures d'absence par mois",
      font: {
        size: 14,
        weight: "bold",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Nombre d'heures",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#85BD8172",
      borderColor: "#85BD81",
      borderWidth: 2,
      borderRadius: 5,
    },
  ],
};

const BarGraphe = () => {
  return (
    <div className="h-[240px] lg:h-[300px] w-[100%] lg:w-[100%] object-contain flex items-center justify-center ">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarGraphe;

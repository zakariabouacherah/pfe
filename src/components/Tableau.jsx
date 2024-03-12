import React, { useState } from "react";

const Tableau = () => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [sortedData, setSortedData] = useState([]);

  const data = [
    {
      fullName: "Rachid Mohcine",
      cef: 1853247,
      Group: "Dev201",
      totalAbsent: 45,
    },
    {
      fullName: "John Doe",
      cef: 1853248,
      Group: "Dev202",
      totalAbsent: 30,
    },
    {
      fullName: "Jane Smith",
      cef: 1853249,
      Group: "Dev203",
      totalAbsent: 20,
    },
    {
      fullName: "Michael Johnson",
      cef: 1853250,
      Group: "Dev204",
      totalAbsent: 15,
    },
    {
      fullName: "Sarah Williams",
      cef: 1853251,
      Group: "Dev205",
      totalAbsent: 25,
    },
    {
      fullName: "Ahmed Ali",
      cef: 1853252,
      Group: "Dev206",
      totalAbsent: 10,
    },
    {
      fullName: "Maria Garcia",
      cef: 1853253,
      Group: "Dev207",
      totalAbsent: 35,
    },
    {
      fullName: "Alexandre Martin",
      cef: 1853254,
      Group: "Dev208",
      totalAbsent: 5,
    },
    {
      fullName: "Emily Anderson",
      cef: 1853255,
      Group: "Dev209",
      totalAbsent: 18,
    },
    {
      fullName: "Mohammed Ahmed",
      cef: 1853256,
      Group: "Dev210",
      totalAbsent: 22,
    },
    {
      fullName: "Alicia Martinez",
      cef: 1853257,
      Group: "Dev211",
      totalAbsent: 12,
    },
    {
      fullName: "Emily Anderson",
      cef: 1853258,
      Group: "Dev209",
      totalAbsent: 10,
    },
    {
      fullName: "Mohammed Ahmed",
      cef: 1853259,
      Group: "Dev210",
      totalAbsent: 25,
    },
    {
      fullName: "Alicia Martinez",
      cef: 1853260,
      Group: "Dev211",
      totalAbsent: 0,
    },
  ];

  const sortData = () => {
    const sorted = [...data].sort((a, b) => b.totalAbsent - a.totalAbsent);
    setSortedData(sorted);
  };
  const handleShowMore = () => {
    setDisplayCount(displayCount + 5);
  };

  useState(() => {
    sortData();
  }, []);

  return (
    <div>
      <div className="font-semibold text-2xl mb-4 uppercase">
        Vos Stagiaires les plus absents :
      </div>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                Stagiare
              </th>
              <th scope="col" className="px-6 py-3 rounded-s-lg">
                CEF
              </th>
              <th scope="col" className="px-6 py-3">
                Groupe
              </th>
              <th scope="col" className="px-6 py-3 rounded-e-lg">
                Total Absence (h)
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.slice(0, displayCount).map((item) => (
              <tr className="bg-white  even:bg-gray-50" key={item.cef}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.fullName}
                </th>
                <td className="px-6 py-4">{item.cef}</td>
                <td className="px-6 py-4">{item.Group}</td>
                <td className="px-6 py-4">{item.totalAbsent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayCount < sortedData.length && (
        <div className="mt-4 text-center">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Tableau;

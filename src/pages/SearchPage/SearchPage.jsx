import { React } from "react";
import { UilMessage } from "@iconscout/react-unicons";
import { Table } from "./Table";
import { DashBoard } from "./DashBoard";
import { useState } from "react";

export function SearchPage() {
  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState({});

  let list = [
    {
      name: "Paola",
      speciality: "Lloradera",
      location: "Ni ella sabe",
      cost: "120",
      rating: "no tiene comparcion",
      setOpen: { setOpen },
    },
    {
      name: "Samer",
      speciality: "Psicologo",
      location: "Caracas",
      cost: "12",
      rating: "1/10",
      setOpen: { setOpen },
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2 lg:pl-10 pr-5 ">
          <div className="pl-2 font-bold pt-2 text-x-3  lg:pl-3">
            <p>Directory Search</p>
          </div>
          <div className="flex flex-row-reverse items-center gap-4 pr-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 w-50  lg: h-15 w-17">
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray- rounded-md sm:py-2">
                    <div>
                      <UilMessage className="h-3 w-4" />
                    </div>
                    <div className="hidden sm:block lg: w-16">Search</div>
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </div>
                    <div className="hidden sm:block">Filters</div>
                  </span>
                </button>
              </div>
            </div>

            {/* Esto es el buscador */}
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              {/* div de la lupa */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Table
            list={list}
            setOpen={setOpen}
            setSelectedDoctor={setSelectedDoctor}
          ></Table>
        </div>
      </div>
      <DashBoard
        open={open}
        setOpen={setOpen}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
      />
    </div>

    // <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    //     <div className="flex items-center justify-between pb-4 bg-white">
    //         <label for="table-search" className="sr-only">Search</label>
    //         <div className="relative">
    //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                 <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    //             </div>
    //             <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
    //         </div>
    //     </div>
    //     <Table name="Samer" speciality='Psicologo' location='Caracas' cost="12" rating="10/10" />
    // </div>
  );
}
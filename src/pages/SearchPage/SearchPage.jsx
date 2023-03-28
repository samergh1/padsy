import React, { useContext } from "react";
import { useState } from "react";
import { Table } from "./Table";
import { DashBoardInfo } from "./DashBoardInfo";
import { Loading } from "../../components/Loading";
import { DashBoardFilter } from "./DashBoardFilter";
import { FilterContext } from "../../context/FilterContext";

export function SearchPage() {
  const {
    filterDoctors,
    setSearch,
    loading,
    resetSearch,
    selectedDoctor,
    setSelectedDoctor,
  } = useContext(FilterContext);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="flex justify-between py-3 pl-2 lg:pl-10 pr-5 ">
          <div className="pl-2 font-bold pt-2 text-x-3  lg:pl-3">
            <p>Directory Search</p>
          </div>
          <div className="flex flex-row-reverse items-center gap-4 pr-2 lg:pr-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => {
                    resetSearch();
                  }}
                  className="relative  z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
                >
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black -600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-3 h-3 lg:h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                    </div>
                    <div className="hidden sm:block">Reset</div>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => {
                    setOpenFilter(true);
                  }}
                  className="relative  z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1"
                >
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-black -600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 lg:h-5"
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
                className="block border w-full p-3 pl-10 text-sm border-gray-600 rounded-md dark:bg-white dark:border-gray-00 dark:text-gray-700"
                placeholder="Search...."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {/* div de la lupa */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-700 "
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
            list={filterDoctors}
            setOpen={setOpen}
            setSelectedDoctor={setSelectedDoctor}
          ></Table>
        </div>
      </div>
      <DashBoardInfo
        open={open}
        setOpen={setOpen}
        selectedDoctor={selectedDoctor}
        setSelectedDoctor={setSelectedDoctor}
      />
      <DashBoardFilter open={openFilter} setOpen={setOpenFilter} />
    </div>
  );
}

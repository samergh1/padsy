import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Stars } from "../../components/Stars";
import { FilterContext } from "../../context/FilterContext";

const options = [
  {
    label: "Clinical Psychology",
    value: "Clinical Psychology",
  },
  {
    label: "Educational Psychology",
    value: "Educational Psychology",
  },
  {
    label: "Neuropsychology",
    value: "Neuropsychology",
  },
  {
    label: "Child Psychology",
    value: "Child Psychology",
  },
  {
    label: "Forensic Psychology",
    value: "Forensic Psychology",
  },
  {
    label: "Health Psychology",
    value: "Health Psychology",
  },
  {
    label: "Cognitive and Perceptual Psychology",
    value: "Cognitive and Perceptual Psychology",
  },
];

const costs = [
  { end: 25 },
  { start: 25, end: 50 },
  { start: 50, end: 100 },
  { start: 100, end: 150 },
  { start: 150 },
];

const ratings = [1, 2, 3, 4, 5];

export function DashBoardFilter({ open, setOpen }) {
  const {
    handleListCost,
    handleListSpecialty,
    listSpecialty,
    listCost,
    rate,
    handleRate,
  } = useContext(FilterContext);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-400 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 text-start">
                        Filters
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-2 sm:px-6">
                      {/* Your content */}
                      {/* primera parte es la foto */}
                      <div>
                        <div className="pt-2 pb-4 border-y-2">
                          <h4 className="text-medium text-gray-800 pr-3 pt-1 pb-4">
                            Specialty
                          </h4>
                          {options.map((specialty, idSpecialty) => {
                            const isFound = listSpecialty.includes(
                              specialty.value
                            );

                            return (
                              <button
                                key={idSpecialty}
                                onClick={() => {
                                  handleListSpecialty(specialty.value);
                                }}
                                type="button"
                                className={` border ${
                                  isFound ? "bg-[#00786A]" : "bg-gray-300"
                                } ${
                                  isFound
                                    ? "border-[#00786A]"
                                    : "border-gray-700"
                                } 
                                ${isFound ? "text-white" : "text-black"} 
                                
                                focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                              >
                                {specialty.value}
                              </button>
                            );
                          })}
                        </div>

                        <div className="py-2">
                          <h4 className="text-medium text-gray-800 pr-3 pt-1 pb-4">
                            Cost
                          </h4>
                          {costs.map((cost, idCost) => {
                            const isFoundCost = listCost.includes(cost);

                            return (
                              <button
                                key={idCost}
                                onClick={() => {
                                  handleListCost(cost);
                                }}
                                type="button"
                                className={` border ${
                                  isFoundCost ? "bg-[#00786A]" : "bg-gray-300"
                                } ${
                                  isFoundCost
                                    ? "border-[#00786A]"
                                    : "border-gray-700"
                                } 
                                ${isFoundCost ? "text-white" : "text-black"} 
                                
                                focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                              >
                                {`${
                                  !cost.start ? "Menos de " : `$${cost.start}`
                                }${
                                  cost.start != null && cost.end != null
                                    ? " - "
                                    : " "
                                }${!cost.end ? "y Más" : `$${cost.end}`}`}
                              </button>
                            );
                          })}
                        </div>
                        <div className="py-2">
                          <h4 className="text-medium text-gray-800 pr-3 pt-1 pb-4">
                            Rating
                          </h4>

                          {<Stars rate={rate} setRate={handleRate}></Stars>}
                        </div>
                      </div>
                      {/* <DoctorInfo selectedDoctor={selectedDoctor}></DoctorInfo> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

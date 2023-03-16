import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function DashBoard({
  open,
  setOpen,
  selectedDoctor,
  setSelectedDoctor,
}) {
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
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => {
                          setOpen(false);
                          setSelectedDoctor({});
                        }}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 text-center">
                        Doctor Details
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      {/* primera parte es la foto */}
                      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-400">
                        <div className="flex justify-end px-4 pt-4"></div>
                        <div className="flex flex-col items-center pb-10">
                          <img
                            className="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
                            alt="Bonnie image"
                          />
                          <h5 className="mb-1 text-xl font-medium text-black">
                            {selectedDoctor.name}
                          </h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Visual Designer
                            {/* {selectedDOctor.speciality} */}
                          </span>
                          <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            500$
                            {/* {selectedDoctor.cost} */}
                          </h4>
                          <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></div>
                          <div className="flex mt-4 space-x-3 md:mt-6">
                            <a
                              href="#"
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#00786A] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                            >
                              Make an appointment
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* segunda parte reviews */}
                      <div className="bg-black w-full ">
                        <p>Hola</p>
                      </div>
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

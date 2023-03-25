import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useUserContext } from "../../context/userContext";

export function DoctorProfile() {
  const { user, isLoadingUser } = useUserContext();

  return (
    <div className="flex bg-white h-full w-full">
      {/* Sidebar */}
      <div className="bg-gray-300">
        <Navbar></Navbar>
      </div>

      {/* Profile */}
      <div className="w-full flex flex-col">
        {/* Information */}
        {!isLoadingUser && !!user && user.isDoctor ? (
          <div className="md:flex md:justify-center md:gap-10 bg-white w-full h-full border-b p-10">
            <div className="flex justify-center">
              <img
                src={user.profileImage}
                className="w-56 h-56 md:w-72 md:h-72 bg-gray-100"
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {user.name}
                  </h2>
                  <span className="text-xs md:text-lg">{user.specialty}</span>
                </div>
                <button className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md">
                  Edit profile
                </button>
              </div>
              <div className="flex flex-col gap-6 justify-center lg:grid lg:grid-cols-2">
                <div className="flex flex-col gap-4 lg:col-span-1">
                  <span className="font-bold">Description</span>
                  <span>{user.description}</span>
                </div>
                <div className="flex flex-col lg:col-span-1 gap-8">
                  <div className="flex gap-8">
                    <span className="font-bold">Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Address:</span>
                    <span>{user.address}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Phone Number:</span>
                    <span>{user.phoneNumber}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Degree:</span>
                    <span>Universidad Metropolitana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Appointments */}
        <div className="flex gap-10 bg-white w-full h-full border-b p-10">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-1xl lg:text-3xl font-bold">
                My appointments
              </h2>
              <button className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md">
                View all
              </button>
            </div>

            <div className="flex flex-col lg:flex-row h-full gap-10">
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Patient 1</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>15 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Patient 2</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>16 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Patient 3</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>17 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex gap-10 bg-white w-full h-full border-b p-10">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-1xl lg:text-3xl font-bold">My calendar</h2>
              <button className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md">
                Edit calendar
              </button>
            </div>

            <div className="flex flex-col lg:flex-row h-full gap-10">
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Patient 1</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>15 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

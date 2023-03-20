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
          <div className="flex gap-10 bg-white w-full h-full border-b p-10">
            <img className="w-1/3 bg-gray-100" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">{user.name}</h2>
                  <span>{user.specialty}</span>
                </div>
                <button className="bg-[#00786A] text-center text-white px-6 py-2 hover:scale-105 transition-all rounded-md">
                  Edit profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col col-span-1">
                  <span>Description</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi placeat possimus, ex vitae eius ea quidem numquam quo
                    sequi tempora? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Tenetur, enim!
                  </span>
                </div>
                <div className="flex flex-col col-span-1 justify-evenly">
                  <div className="flex gap-8">
                    <span>Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Address:</span>
                    <span>{user.address}</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Phone Number:</span>
                    <span>{user.phoneNumber}</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Degree:</span>
                    <span>Universidad Metropolitana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-10 bg-white w-full h-full border-b p-10">
            <img className="w-1/3 bg-gray-100" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl font-bold">Username</h2>
                  <span>Specialty</span>
                </div>
                <button className="bg-[#00786A] text-center text-white px-6 py-2 hover:scale-105 transition-all rounded-md">
                  Edit profile
                </button>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col col-span-1">
                  <span>Description</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi placeat possimus, ex vitae eius ea quidem numquam quo
                    sequi tempora? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Tenetur, enim!
                  </span>
                </div>
                <div className="flex flex-col col-span-1 justify-evenly">
                  <div className="flex gap-8">
                    <span>Email:</span>
                    <span>example@gmail.com</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Address:</span>
                    <span>St. avenue</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Phone Number:</span>
                    <span>0424-1164645</span>
                  </div>
                  <div className="flex gap-8">
                    <span>Degree:</span>
                    <span>Universidad Metropolitana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointments */}
        <div className="flex gap-10 bg-white w-full h-full border-b p-10">
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">My appointments</h2>
              <button className="bg-[#00786A] text-center text-white px-6 py-2 hover:scale-105 transition-all rounded-md">
                View all
              </button>
            </div>

            <div className="flex h-full gap-10">
              <div className="flex flex-col w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-1/5 h-full bg-gray-100" />
                  <span>Patient 1</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>15 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-1/5 h-full bg-gray-100" />
                  <span>Patient 2</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>16 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-1/5 h-full bg-gray-100" />
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
              <h2 className="text-3xl font-bold">My calendar</h2>
              <button className="bg-[#00786A] text-center text-white px-6 py-2 hover:scale-105 transition-all rounded-md">
                Edit calendar
              </button>
            </div>

            <div className="flex h-full gap-10">
              <div className="flex flex-col w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-1/5 h-full bg-gray-100" />
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

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EditPatientProfile from "../../components/Navbar/EditProfile/EditPatientProfile";
import { Navbar } from "../../components/Navbar/Navbar";
import { useUserContext } from "../../context/userContext";

export function PatientProfile() {
  const { user, isLoadingUser } = useUserContext();
  const [editProfile, setEditProfile] = useState(false);

  // useEffect(() => {
  //   if (editProfile) {
  //     <PatientProfile />;
  //   } else {
  //     <EditPatientProfile />;
  //   }
  // }, []);

  return (
    <div className="flex bg-white h-full w-full">
      {/* Sidebar */}
      <div className="bg-gray-300">
        <Navbar></Navbar>
      </div>

      {/* Profile */}
      <div className="w-full flex flex-col">
        {/* Information */}
        {!isLoadingUser && !!user && !user.isDoctor && !editProfile ? (
          <div className="md:flex justify-center gap-10 bg-white w-full h-full border-b p-10">
            <div className="flex justify-center mb-6 md:mb-0">
              <img
                src={user.profileImage}
                className="rounded-md w-56 h-56 md:w-72 md:h-72 bg-gray-100"
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center gap-2 mb-16">
                <h2 className="text-2xl lg:text-4xl font-bold">{user.name}</h2>
                <button
                  onClick={() => {
                    setEditProfile(true);
                  }}
                  className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
                >
                  Edit profile
                </button>
              </div>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Email:</span>
                  <span className="text-[#646464]">{user.email}</span>
                </div>
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Phone Number:</span>
                  <span className="text-[#646464]">{user.phoneNumber}</span>
                </div>
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Gender:</span>
                  <span className="text-[#646464]">{user.gender}</span>
                </div>
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Birth Date:</span>
                  <span className="text-[#646464]">{user.birthdate}</span>
                </div>
              </div>
            </div>
          </div>
        ) : !isLoadingUser && !!user && !user.isDoctor && editProfile ? (
          <EditPatientProfile user={user} setEditProfile={setEditProfile} />
        ) : (
          <span>LOADING USER...</span>
        )}

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
                  <span>Dr. Daniel Rojas</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>15 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Dr. Daniel Rojas</span>
                </div>
                <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
                  <span>15 may</span>
                  <span>11:00-12:00m</span>
                </div>
              </div>
              <div className="flex flex-col lg:w-1/3 rounded-md border hover:scale-105 transition-all cursor-pointer">
                <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
                  <img className="w-12 h-12 bg-gray-100" />
                  <span>Dr. Daniel Rojas</span>
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

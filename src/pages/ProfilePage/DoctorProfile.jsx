import React from "react";
import { useState, useEffect } from "react";
import { EditDoctorProfile } from "../../components/EditProfile/EditDoctorProfile";
// import { Navbar } from "../../components/Navbar/Navbar";
import { Navbar } from "../../components/Navbar";
import { useUserContext } from "../../context/userContext";
import { doc, onSnapshot, query } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { Loading } from "../../components/Loading";
import AppointmentCard from "../../components/Appointment/AppointmentCard";
import { AppointmentsUrl } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../firebase/users";

export function DoctorProfile() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [editProfile, setEditProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingCurrentUser, setLoadingCurrentUser] = useState(true);
  const [schedule, setSchedule] = useState({});

  async function handleSchedule(start, end) {
    await updateUser(user.id, { startSchedule: start, endSchedule: end });
  }

  useEffect(() => {
    if (user != null) {
      const unsubscribe = getUser(setCurrentUser);
      setLoadingCurrentUser(false);
      return () => unsubscribe;
    }
  }, [user]);

  async function getUser(setCurrentUser) {
    const q = query(doc(db, "users", user.uid));
    return onSnapshot(q, (querySnapshot) => {
      const snapshotUser = querySnapshot.data();
      setCurrentUser(snapshotUser);
    });
  }

  const handleViewAppointments = () => {
    navigate(AppointmentsUrl);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setSchedule((oldData) => ({ ...oldData, [name]: value }));
    console.log(schedule);
  };

  async function handleSetSchedule() {
    await updateUser(user.id, schedule);
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-300">
        <Navbar></Navbar>
      </div>

      {/* Profile */}
      <div className="w-full flex flex-col">
        {/* Information */}
        {!loadingCurrentUser &&
        !!currentUser &&
        currentUser.isDoctor &&
        !editProfile ? (
          <div className="md:flex md:justify-center md:gap-10 bg-white w-full h-full border-b p-10">
            <div className="flex justify-center">
              <img
                src={currentUser.profileImage}
                className="rounded-md w-28 h-28 md:w-20 md:h-20 bg-gray-100"
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {user.name}
                  </h2>
                  <span className="text-xs md:text-lg">
                    {currentUser.specialty}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setEditProfile(true);
                  }}
                  className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
                >
                  Edit profile
                </button>
              </div>
              <div className="flex flex-col gap-12 mb-4 justify-center lg:grid lg:grid-cols-2">
                <div className="flex flex-col gap-4 lg:col-span-1">
                  <div className="flex flex-col gap-2">
                    <span className="font-bold">Description</span>
                    <span className="text-[#646464]">
                      {currentUser.description}
                    </span>
                  </div>
                  <div className="flex gap-6">
                    <span className="font-bold">Cost:</span>
                    <span className="text-[#646464]">${currentUser.cost}</span>
                  </div>
                </div>
                <div className="flex flex-col lg:col-span-1 gap-8">
                  <div className="flex gap-8">
                    <span className="font-bold">Email:</span>
                    <span className="text-[#646464]">{currentUser.email}</span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Address:</span>
                    <span className="text-[#646464]">
                      {currentUser.address}
                    </span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Phone Number:</span>
                    <span className="text-[#646464]">
                      {currentUser.phoneNumber}
                    </span>
                  </div>
                  <div className="flex gap-8">
                    <span className="font-bold">Degree:</span>
                    <a
                      href={currentUser.collegeDegree}
                      className="text-[#646464] underline"
                      target="_blank"
                    >
                      degree.pdf
                    </a>
                  </div>
                </div>
              </div>
              {/* Schedule Gestion */}
              <h2 className="text-1xl lg:text-3xl mb-6 font-bold">
                Schedule Management
              </h2>
              <div className="-space-y-px rounded-md shadow-sm grid grid-cols-2 gap-x-6 mb-5">
                <div>
                  <label htmlFor="startSchedule">Start Schedule</label>
                  <input
                    id="startSchedule"
                    name="startSchedule"
                    type="startSchedule"
                    autoComplete="startSchedule"
                    onChange={onChange}
                    required
                    className="relative px-2 block w-full rounded py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={currentUser.startSchedule ?? "5"}
                  />
                </div>
                <div>
                  <label htmlFor="endSchedule">End Schedule</label>
                  <input
                    id="endSchedule"
                    name="endSchedule"
                    type="endSchedule"
                    autoComplete="current-endSchedule"
                    onChange={onChange}
                    required
                    className="relative px-2 block w-full rounded py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={currentUser.endSchedule ?? "13"}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  handleSetSchedule();
                }}
                className="bg-[#00786A] text-center w-1/5 text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
              >
                Set Schedule
              </button>
            </div>
          </div>
        ) : !loadingCurrentUser &&
          !!currentUser &&
          currentUser.isDoctor &&
          editProfile ? (
          <EditDoctorProfile
            user={currentUser}
            setEditProfile={setEditProfile}
          />
        ) : (
          <span className="flex justify-center items-center">
            <Loading />
          </span>
        )}

        {/* Appointments */}
        <div className="flex gap-10 bg-white w-full h-full border-b p-10">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-1xl lg:text-3xl font-bold">
                My appointments
              </h2>
              <button
                onClick={handleViewAppointments}
                className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
              >
                View all
              </button>
            </div>

            <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-6">
              {loadingCurrentUser ? (
                <Loading />
              ) : (user.appointments ?? []).length > 0 ? (
                user.appointments
                  .slice(0, 3)
                  .map((appointment, id) => (
                    <AppointmentCard appointmentId={appointment} />
                  ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        {/* Calendar */}
        {/* <div className="flex gap-10 bg-white w-full h-full border-b p-10">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-1xl lg:text-3xl font-bold">My feedbacks</h2>
              <button className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md">
                View feedbacks
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
        </div> */}
      </div>
    </div>
  );
}

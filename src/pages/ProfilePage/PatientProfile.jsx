import React from "react";
import { useState, useEffect } from "react";
import { EditPatientProfile } from "../../components/EditProfile/EditPatientProfile";
// import { Navbar } from "../../components/Navbar/Navbar";
import { Navbar } from "../../components/Navbar";
import { useUserContext } from "../../context/userContext";
import { doc, onSnapshot, query } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { AppointmentsUrl } from "../../constants/urls";
import { updateUser } from "../../firebase/users";
import AppointmentCard from "../../components/Appointment/AppointmentCard";

export function PatientProfile() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [editProfile, setEditProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingCurrentUser, setLoadingCurrentUser] = useState(true);

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
        !currentUser.isDoctor &&
        !editProfile ? (
          <div className="md:flex justify-center gap-10 bg-white w-full h-full border-b p-10">
            <div className="flex justify-center mb-6 md:mb-0">
              <img
                src={currentUser.profileImage}
                className="rounded-md w-28 h-28 md:w-20 md:h-20 bg-gray-100"
                alt="Profile image"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center gap-2 mb-16">
                <h2 className="text-2xl lg:text-4xl font-bold">
                  {currentUser.name}
                </h2>
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
                  <span className="text-[#646464]">{currentUser.email}</span>
                </div>
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Phone Number:</span>
                  <span className="text-[#646464]">
                    {currentUser.phoneNumber}
                  </span>
                </div>
                <div className="flex gap-8 justify-center mb-12 lg:justify-start">
                  <span className="font-bold">Gender:</span>
                  <span className="text-[#646464]">{currentUser.gender}</span>
                </div>
                <div className="flex gap-8 justify-center lg:justify-start">
                  <span className="font-bold">Birth Date:</span>
                  <span className="text-[#646464]">
                    {currentUser.birthdate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : !loadingCurrentUser &&
          !!currentUser &&
          !currentUser.isDoctor &&
          editProfile ? (
          <EditPatientProfile
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
      </div>
    </div>
  );
}

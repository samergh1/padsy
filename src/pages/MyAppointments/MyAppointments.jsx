import React from "react";
import AppointmentCard from "../../components/Appointment/AppointmentCard";
import { Loading } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { useUserContext } from "../../context/userContext";

export default function MyAppointments() {
  const { user, isLoadingUser } = useUserContext();

  return (
    <div className="flex">
      <div>
        <Navbar />
      </div>
      <div className="w-full p-8">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-6">
          {isLoadingUser ? (
            <Loading />
          ) : user.appointments.length > 0 ? (
            user.appointments.map((appointment, id) => (
              <AppointmentCard
                appointmentId={appointment}
              // key={appointmentId}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

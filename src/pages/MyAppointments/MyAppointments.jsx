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
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {isLoadingUser ? (
            <Loading />
          ) : (
            user.appointments.map((appointment) => (
              <AppointmentCard
                appointmentId={appointment}
                // key={appointmentId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import AppointmentCard from "../../components/Appointment/AppointmentCard";
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
            <h1>Loading...</h1>
          ) : (
            user.appointments.map((appointment, appointmentId) => (
              <AppointmentCard
                appointmentId={appointment}
                key={appointmentId}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

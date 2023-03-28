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
      <div className="grid grid-cols-3 w-full gap-6 p-8">
        <div>
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

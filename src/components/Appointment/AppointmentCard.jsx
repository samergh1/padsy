import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useUserContext } from "../../context/userContext";
import {
  getAppointmentId,
  getUserById,
  getUserProfile,
} from "../../firebase/users";

export default function AppointmentCard({ appointmentId }) {
  const { user, isLoadingUser } = useUserContext();
  const [doctorUser, setDoctorUser] = useState({});

  const getAppointment = async () => {
    const appointment = await getAppointmentId(appointmentId);
    console.log(appointment.date.toDate());
    const doctor = await getUserById(appointment.doctorId);
    setDoctorUser({ name: doctor.name, image: doctor.profileImage });
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col rounded-md border">
          <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
            <img src={doctorUser.image} className="w-12 h-12 bg-gray-100" />
            <span>{doctorUser.name}</span>
          </div>
          <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
            <span>15 may</span>
            <span>11:00-12:00m</span>
          </div>
          <div className="p-6">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "Ad77kXrkfQsLA-tbUbKADbeqEtiQPj8k_ePhGrc4IOPerODbS9TCtWQQJt-nA-lpI7zdrLqHtZr5Yr1O",
              }}
            >
              <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "13.99",
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const details = await actions.order.capture();
                  const name = details.payer.name.given_name;
                  alert("Transaction completed by " + name);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

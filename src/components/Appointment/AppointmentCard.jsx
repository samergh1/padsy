import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useUserContext } from "../../context/userContext";
import {
  getAppointmentId,
  getUserById,
  getUserProfile,
} from "../../firebase/users";
import { format } from "date-fns";

export default function AppointmentCard({ appointmentId }) {
  const { user, isLoadingUser } = useUserContext();
  const [paid, setPaid] = useState(false);
  const [doctorUser, setDoctorUser] = useState({});
  let [currentMonth, setCurrentMonth] = useState("");
  let [currentHour, setCurrentHour] = useState("");

  const getAppointment = async () => {
    const result = await getAppointmentId(appointmentId);
    const doctor = await getUserById(result.doctorId);
    setDoctorUser({
      name: doctor.name,
      image: doctor.profileImage,
      cost: doctor.cost,
    });
    setCurrentMonth(format(result.date.toDate(), "dd MMM yyyy"));
    setCurrentHour(format(result.date.toDate(), "hh:mm"));
    let finalHour = convertHour(currentHour);
    finalHour = finalHour.toString();
    setCurrentHour(format(result.date.toDate(), `hh:mm-${finalHour}:mm`));
  };

  const convertHour = (currentHour) => {
    const hour = parseInt(currentHour.toString());
    const newHour = hour + 1;
    return newHour;
  };

  useEffect(() => {
    if (!isLoadingUser) {
      getAppointment();
    }
  }, [currentHour, currentMonth]);

  return (
    <div>
      <div className="w-full">
        <div className="flex flex-col rounded-md border">
          <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
            <img src={doctorUser.image} className="w-12 h-12 bg-gray-100" />
            <span>{doctorUser.name}</span>
          </div>
          <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
            <span>{currentMonth}</span>
            <span>{currentHour}</span>
          </div>
          <div className="p-6">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "Ad77kXrkfQsLA-tbUbKADbeqEtiQPj8k_ePhGrc4IOPerODbS9TCtWQQJt-nA-lpI7zdrLqHtZr5Yr1O",
              }}
            >
              <PayPalButtons
                style={{ layout: "horizontal", tagline: false }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: "USD",
                          value: "10",
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

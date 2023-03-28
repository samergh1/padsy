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
  const [patientUser, setPatientUser] = useState({});
  let [currentMonth, setCurrentMonth] = useState("");
  let [currentHour, setCurrentHour] = useState("");

  const getAppointment = async () => {
    const result = await getAppointmentId(appointmentId);
    const doctor = await getUserById(result.doctorId);
    const patient = await getUserById(result.patientId);
    setDoctorUser({
      name: doctor.name,
      image: doctor.profileImage,
      cost: doctor.cost,
    });
    setPatientUser({
      name: patient.name,
      image: patient.profileImage,
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

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Payment",
            amount: {
              currency_code: "USD",
              value: parseFloat(doctorUser.cost),
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      setPaid(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  // useEffect(() => {
  //   if (success) {
  //     alert("Payment successful!");
  //   }
  // }, [success]);

  useEffect(() => {
    if (!isLoadingUser) {
      getAppointment();
    }
  }, [currentHour, currentMonth]);

  return (
    <div>
      {!isLoadingUser && !!user && !user.isDoctor ? (
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
            {!paid ? (
              <div className="p-6">
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AaxjOY2T8QZDrlPh2Dv-NxeKoZrOZhF0rqRLrd7KzOoACmZv4Zi7-_5P9nDPr1mshdYfHlrszTHk4_4z",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "horizontal", tagline: false }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  />
                </PayPalScriptProvider>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex flex-col rounded-md border">
            <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
              <img src={patientUser.image} className="w-12 h-12 bg-gray-100" />
              <span>{patientUser.name}</span>
            </div>
            <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
              <span>{currentMonth}</span>
              <span>{currentHour}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

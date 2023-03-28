import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useUserContext } from "../../context/userContext";
import {
  getAppointmentId,
  getUserById,
  getUserProfile,
  updateAppointment,
} from "../../firebase/users";
import { format } from "date-fns";
import { FeedbackPage } from "../../pages/FeedbackPage";
import { useNavigate } from "react-router-dom";
import { FeedbackUrl } from "../../constants/urls";

export default function AppointmentCard({ appointmentId }) {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUserContext();
  const [paid, setPaid] = useState(false);
  const [appointment, setAppointment] = useState({});
  const [doctorUser, setDoctorUser] = useState({});
  const [patientUser, setPatientUser] = useState({});
  let [currentMonth, setCurrentMonth] = useState("");
  let [currentHour, setCurrentHour] = useState("");

  const getAppointment = async () => {
    const result = await getAppointmentId(appointmentId);
    let doctor = await getUserById(result.doctorId);
    let patient = await getUserById(result.patientId);
    doctor = doctor.data();
    patient = patient.data();

    setAppointment({
      payed: result.payed,
    });
    setDoctorUser({
      id: doctor.uid,
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
              value: 20,
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
      updateAppointment(appointmentId, {
        payed: true,
      });
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
    console.log(ErrorMessage);
  };

  // const handleFeedbackClick = () => {
  //   <FeedbackPage selectedDoctor={doctorUser} />;
  // };

  useEffect(() => {
    if (success) {
      alert("Payment successful!");
    }
  }, [success]);

  useEffect(() => {
    if (!isLoadingUser) {
      getAppointment();
    }
  }, [currentHour, currentMonth]);

  return (
    <div id={appointmentId}>
      {!isLoadingUser && !!user && !user.isDoctor ? (
        <div className="w-full">
          <div className="flex flex-col rounded-md border shadow-md">
            <div className="flex h-1/2 p-3 gap-4 items-center justify-start">
              <img src={doctorUser.image} className="w-12 h-12 bg-gray-100" />
              <span>{doctorUser.name}</span>
            </div>
            <div className="flex h-1/2 bg-gray-100 p-4 items-center justify-between">
              <span>{currentMonth}</span>
              <span>{currentHour}</span>
            </div>
            {!appointment.payed ? (
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
            ) : (
              <div className="flex justify-center items-center p-6">
                <button
                  onClick={() => {
                    navigate(FeedbackUrl);
                    <FeedbackPage selectedDoctor={doctorUser} />;
                  }}
                  className="p-2 rounded-md border bg-[#00786A] text-white transition-all hover:scale-105"
                >
                  Give feedback
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex flex-col rounded-md border shadow-md">
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

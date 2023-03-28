import { Stars } from "../../components/Stars";
import React, { useEffect, useState, useContext } from "react";
import { FeedbackContext } from "../../context/FeedBackContext";
import { Loading } from "../../components/Loading";
import { getUserById } from "../../firebase/users";

// import { getFeedBack,getUserById } from "../firebase/users";

export function Review() {
  const { feedbacks, loading, getCurrentPatient } = useContext(FeedbackContext);

  return (
    <div className="bg-white px-3 border-gray-200 rounded-lg shadow">
      <div className=" pl-2 border-b-2">
        <h3 className="text-gray-900 font-semibold pt-4 pb-2">Reviews</h3>
      </div>

      <div className="items-start py-3">
        {/* Deberia hacer un map */}
        {feedbacks.map((feedback, idFeedBack) => {
          const [patient, setPatient] = useState(null);
          const [patientLoading, setPatientLoading] = useState(true);
          const getCurrentPatient = async () => {
            const patient = await getUserById(feedback.patientId);

            setPatient(patient.data());
            setPatientLoading(false);
          };

          useEffect(() => {
            getCurrentPatient();
          }, []);

          if (patientLoading) {
            return <Loading></Loading>;
          }
          return (
            <div className="ml-6 boreder border-b-2 pb-3 pt-2" key={idFeedBack}>
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">{patient.name}</span>
                <span className="ml-2 text-green-600 text-xs">Verified</span>
              </p>
              <div className="flex items-center mt-1">
                <div>
                  <h4 className="text-xs text-gray-600 pr-3 ">
                    Sesion Quality
                  </h4>
                </div>
                <Stars rate={feedback.rating}></Stars>
              </div>

              <div className="mt-2">
                <span className="text-gray-800 font-semibold text-sm">
                  {feedback.title}
                </span>
                <p className="mt-1 text-gray-500 font-light text-sm	">
                  {feedback.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

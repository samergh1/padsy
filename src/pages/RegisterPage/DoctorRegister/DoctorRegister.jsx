import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountDetailsDoctor } from "./AccountDetailsDoctor";
import { PersonalDetailsDoctor } from "./PersonalDetailsDoctor";
import { ProfessionalDetailsDoctor } from "./ProfessionalDetailsDoctor";
import {
  registerWithEmailAndPasswordDoctor,
  signUpWithGoogle,
} from "../../../firebase/authentication/authentication";
import { signInWithGoogle } from "../../../firebase/authentication/authentication";
import googleLogo from "../../../assets/google.png";
import facebookLogo from "../../../assets/facebook.png";
import { LoginPageUrl, ChatPageUrl } from "../../../constants/urls";

export function DoctorRegister() {
  const navigate = useNavigate();

  const formList = ["AccountDetails", "PersonalDetails", "ProfessionalDetails"];
  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage(page === 0 ? formLength - 1 : page - 1);
  };
  const handleNext = () => {
    setPage(page === formLength - 1 ? 0 : page + 1);
  };

  const initialValues = {
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    address: "",
    specialty: "",
    isDoctor: true,
    busySchedule: [],
  };

  const [values, setValues] = useState(initialValues);

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <AccountDetailsDoctor
              formValues={values}
              onChange={onChange}
            ></AccountDetailsDoctor>
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <PersonalDetailsDoctor
              formValues={values}
              onChange={onChange}
            ></PersonalDetailsDoctor>
          </div>
        );
      }
      case 2: {
        return (
          <div>
            <ProfessionalDetailsDoctor
              formValues={values}
              onChange={onChange}
            ></ProfessionalDetailsDoctor>
          </div>
        );
      }
      default:
        return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerWithEmailAndPasswordDoctor({
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      address: values.address,
      specialty: values.specialty,
      isDoctor: values.isDoctor,
      onSuccess: onSuccess,
    });
    console.log(values);
  };

  const handleGoogleClick = () => {
    const user = signUpWithGoogle({ isDoctor: false, onSuccess: onSuccess });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((oldData) => ({ ...oldData, [name]: value }));
  };

  const onSuccess = () => {
    setPage(1);
  };

  return (
    <div className="flex gap-4 place-content-center items-center h-screen place-items-center w-screen">
      <div className="bg-[#efefef] p-6 rounded-lg shadow-md w-3/4 sm:w-1/2">
        <div className="flex mb-4">
          <div
            className={`w-3/4 border-r border-gray-400 ${
              page === 0 ? "bg-[#00786A] text-white" : "bg-white"
            } p-2 text-center cursor-pointer`}
            onClick={() => setPage(0)}
          >
            Account details
          </div>
          <div
            className={`w-3/4 ${
              page === 1 ? "bg-[#00786A] text-white" : "bg-white"
            } p-2 text-center cursor-pointer`}
            onClick={() => setPage(1)}
          >
            Personal details
          </div>
          <div
            className={`w-3/4 ${
              page === 2 ? "bg-[#00786A] text-white" : "bg-white"
            } p-2 text-center cursor-pointer`}
            onClick={() => setPage(2)}
          >
            Professional details
          </div>
        </div>

        <div className="flex-1">{handleForms()}</div>

        {page == 0 ? (
          <div className="flex flex-col gap-4 sm:items-center">
            <button
              onClick={handleGoogleClick}
              className="flex justify-center items-center bg-white rounded-md p-3 hover:scale-105 transition-all"
            >
              <img src={googleLogo} alt="Google" className="w-7 h-7 mr-3" />
              Sign up with Google
            </button>
            <button className="flex justify-center items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
              <img src={facebookLogo} alt="Facebook" className="w-7 h-7 mr-3" />
              Sign up with Facebook
            </button>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <span>Already have an account? </span>
                <Link
                  to={LoginPageUrl}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex gap-4 justify-center items-center mt-10">
          <button
            onClick={handlePrev}
            className="bg-[#00786A]  hover:scale-105 transition-all rounded-md text-white py-2 px-4 disabled:bg-gray-400 "
            disabled={page === 0}
          >
            Prev
          </button>
          {page === 2 ? (
            <button
              onClick={handleSubmit}
              className="bg-[#00786A] hover:scale-105 transition-all rounded-md text-white py-2 px-4 "
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#00786A] hover:scale-105 transition-all rounded-md text-white py-2 px-4 "
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

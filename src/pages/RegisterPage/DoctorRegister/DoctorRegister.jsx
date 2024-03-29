import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountDetailsDoctor } from "./AccountDetailsDoctor";
import { PersonalDetailsDoctor } from "./PersonalDetailsDoctor";
import { ProfessionalDetailsDoctor } from "./ProfessionalDetailsDoctor";
import {
  createDoctorGoogleUser,
  registerWithEmailAndPasswordDoctor,
  signUpWithGoogle,
} from "../../../firebase/authentication/authentication";
import googleLogo from "../../../assets/google.png";
import facebookLogo from "../../../assets/facebook.png";
import { LandingPageUrl, LoginPageUrl } from "../../../constants/urls";
import {
  getCollegeDegreeUrl,
  getProfileImgUrl,
  uploadDegree,
  uploadProfileImage,
} from "../../../firebase/storage/storage";

export function DoctorRegister() {
  const [page, setPage] = useState(0);
  const [error, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [degree, setDegree] = useState(null);
  const [googleSignUp, setGoogleSignUp] = useState(false);

  const navigate = useNavigate();

  const formList = ["AccountDetails", "PersonalDetails", "ProfessionalDetails"];
  const formLength = formList.length;

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
    specialty: "Clinical Psychology",
    description: "",
    profileImage: "",
    collegeDegree: "",
    cost: 0,
    isDoctor: true,
  };

  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    console.log(values);

    if (Object.keys(error).length === 0) {
      const res = await uploadDegree(degree, values.email);
      const degreeUrl = await getCollegeDegreeUrl(values.email);

      if (!googleSignUp) {
        const image = await uploadProfileImage(file, values.email);
        const url = await getProfileImgUrl(values.email);

        await registerWithEmailAndPasswordDoctor({
          name: values.name,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          address: values.address,
          specialty: values.specialty,
          description: values.description,
          profileImage: url,
          collegeDegree: degreeUrl,
          cost: values.cost,
          isDoctor: values.isDoctor,
          onSuccess: onSuccess,
        });
        console.log(values);
      } else {
        await createDoctorGoogleUser({
          name: values.name,
          email: values.email,
          uid: values.uid,
          phoneNumber: values.phoneNumber,
          address: values.address,
          specialty: values.specialty,
          description: values.description,
          profileImage: values.profileImage,
          collegeDegree: degreeUrl,
          cost: values.cost,
          isDoctor: values.isDoctor,
          onSuccess: onSuccess,
        });
      }
    }
  };

  const handleBlur = (e) => {
    onChange(e);
    setErrors(validateForm(values));
  };

  const validateForm = (value) => {
    let errors = {};
    let regexPassword = /^.{1,6}$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!googleSignUp) {
      if (!value.email.trim()) {
        errors.email = "Email is required";
      } else if (!regexEmail.test(value.email.trim())) {
        errors.email = "Email is invalid";
      }

      if (!value.password) {
        errors.password = "Password is required";
      }

      if (!file) {
        errors.profileImage =
          "Profile image is required (formats: .png, .jpeg)";
      }
    }

    if (!value.name.trim()) {
      errors.name = "Name is required";
    }

    if (!value.address.trim()) {
      errors.address = "Address is required";
    }

    if (!value.description.trim()) {
      errors.description = "Description is required";
    } else if (value.description.trim().length > 250) {
      errors.description =
        "The description reached the max limit of characters";
    }

    if (!value.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (value.phoneNumber.length < 7) {
      errors.phoneNumber = "Phone number should be at least 7 characters";
    }

    if (!value.cost) {
      errors.cost = "Cost of appointment is required";
    } else if (value.cost < 0) {
      errors.cost = "Cost must be positive";
    }

    if (!degree) {
      errors.collegeDegree = "College degree is required (format: .pdf)";
    }

    return errors;
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleDegree = (e) => {
    console.log(e.target.files[0]);
    setDegree(e.target.files[0]);
  };

  const handleGoogleClick = async () => {
    const user = await signUpWithGoogle({
      isDoctor: true,
      onSuccess: onSuccess,
    });
    setGoogleSignUp(true);
    const { email, photoURL, displayName, uid } = user;
    setValues((oldData) => ({
      ...oldData,
      email: email,
      profileImage: photoURL,
      name: displayName,
      uid: uid,
    }));
    setFile(values.profileImage);
    delete values.password;
    console.log(values);
    setPage(1);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((oldData) => ({ ...oldData, [name]: value }));
  };

  const onSuccess = () => {
    navigate(LandingPageUrl);
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return (
          <div>
            <AccountDetailsDoctor
              formValues={values}
              onChange={onChange}
              handleBlur={handleBlur}
              handleImage={handleImage}
              errors={error}
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
              handleBlur={handleBlur}
              errors={error}
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
              handleBlur={handleBlur}
              handleDegree={handleDegree}
              errors={error}
            ></ProfessionalDetailsDoctor>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center h-full w-full">
      <div className="bg-[#efefef] p-6 rounded-lg shadow-md w-3/4 sm:w-1/2">
        <div className="flex mb-4">
          {googleSignUp ? null : (
            <div
              className={`w-1/3 border-r border-gray-400 ${
                page === 0 ? "bg-[#00786A] text-white" : "bg-white"
              } p-2 text-center cursor-pointer`}
              onClick={() => setPage(0)}
            >
              Account details
            </div>
          )}
          <div
            className={`${
              googleSignUp ? "w-1/2" : "w-1/3"
            } border-r border-gray-400 ${
              page === 1 ? "bg-[#00786A] text-white" : "bg-white"
            } p-2 text-center cursor-pointer`}
            onClick={() => setPage(1)}
          >
            Personal details
          </div>
          <div
            className={`${googleSignUp ? "w-1/2" : "w-1/3"} ${
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
          {googleSignUp && page === 1 ? null : (
            <button
              onClick={handlePrev}
              className="bg-[#00786A]  hover:scale-105 transition-all rounded-md text-white py-2 px-4 disabled:bg-gray-400 "
              disabled={page === 0}
            >
              Prev
            </button>
          )}
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

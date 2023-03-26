import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AccountDetailsPatient } from "./AccountDetailsPatient";
import { PersonalDetailsPatient } from "./PersonalDetailsPatient";
import {
  createPatientGoogleUser,
  registerWithEmailAndPasswordPatient,
  signUpWithGoogle,
} from "../../../firebase/authentication/authentication";
import googleLogo from "../../../assets/google.png";
import facebookLogo from "../../../assets/facebook.png";
import { LoginPageUrl, LandingPageUrl } from "../../../constants/urls";
import {
  getProfileImgUrl,
  uploadProfileImage,
} from "../../../firebase/storage/storage";

export function PatientRegister() {
  const [page, setPage] = useState(0);
  const [error, setErrors] = useState({});
  const [googleSignUp, setGoogleSignUp] = useState(false);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const formList = ["AccountDetails", "PersonalDetails"];
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
    gender: "male",
    birthdate: "",
    profileImage: "",
    isDoctor: false,
  };

  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    console.log(values);

    if (Object.keys(error).length === 0) {
      if (!googleSignUp) {
        const result = await uploadProfileImage(file, values.email);
        const url = await getProfileImgUrl(values.email);

        await registerWithEmailAndPasswordPatient({
          name: values.name,
          email: values.email,
          password: values.password,
          phoneNumber: values.phoneNumber,
          gender: values.gender,
          birthdate: values.birthdate,
          profileImage: url,
          isDoctor: values.isDoctor,
          onSuccess: onSuccess,
        });
        console.log(values);
      } else {
        await createPatientGoogleUser({
          name: values.name,
          email: values.email,
          uid: values.uid,
          phoneNumber: values.phoneNumber,
          gender: values.gender,
          birthdate: values.birthdate,
          profileImage: values.profileImage,
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

      if (!value.password.trim()) {
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

    if (!value.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (value.phoneNumber.length < 7) {
      errors.phoneNumber = "Phone number should be at least 7 characters";
    }

    if (!value.birthdate.trim()) {
      errors.birthdate = "Birth date is required";
    }

    return errors;
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleGoogleClick = async () => {
    const user = await signUpWithGoogle({
      isDoctor: false,
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
            <AccountDetailsPatient
              formValues={values}
              onChange={onChange}
              handleBlur={handleBlur}
              handleImage={handleImage}
              errors={error}
            ></AccountDetailsPatient>
          </div>
        );
      }
      case 1: {
        return (
          <div>
            <PersonalDetailsPatient
              formValues={values}
              onChange={onChange}
              handleBlur={handleBlur}
              errors={error}
            ></PersonalDetailsPatient>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-4 place-content-center items-center h-screen place-items-center w-screen">
      <div className="bg-[#efefef] p-6 rounded-lg shadow-md w-3/4 sm:w-1/2">
        <div className="flex mb-4">
          {googleSignUp ? null : (
            <div
              className={`w-1/2 border-r border-gray-400 ${
                page === 0 ? "bg-[#00786A] text-white" : "bg-white"
              } p-2 text-center cursor-pointer`}
              onClick={() => setPage(0)}
            >
              Account details
            </div>
          )}
          <div
            className={`${!googleSignUp ? "w-1/2" : "w-full"} ${
              page === 1 ? "bg-[#00786A] text-white" : "bg-white"
            } p-2 text-center cursor-pointer`}
            onClick={() => setPage(1)}
          >
            Personal details
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
            {/* <button className="flex justify-center items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
              <img src={facebookLogo} alt="Facebook" className="w-7 h-7 mr-3" />
              Sign up with Facebook
            </button> */}
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
          {googleSignUp ? null : (
            <button
              onClick={handlePrev}
              className="bg-[#00786A]  hover:scale-105 transition-all rounded-md text-white py-2 px-4 disabled:bg-gray-400 "
              disabled={page === 0}
            >
              Prev
            </button>
          )}
          {page === 1 ? (
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

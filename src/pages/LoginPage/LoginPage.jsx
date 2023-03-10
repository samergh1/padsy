import React, { useState } from 'react'
import googleLogo from "../../assets/google.png"
import facebookLogo from "../../assets/facebook.png"
import { ChatPageUrl, RegisterPageUrl } from "../../constants/urls"
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle, logInWithEmailAndPassword } from "./../../firebase/authentication/authentication";

export function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const onSuccess = () => {
    navigate(ChatPageUrl);
  };

  const onLogInWithEmailAndPassword = async (event) => {
    event.preventDefault();

    const { email, password } = formData;
    await logInWithEmailAndPassword({ email: email, password: password, onSuccess: onSuccess });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4 place-content-center items-center h-screen place-items-center w-screen">
      <div className="bg-[#efefef] flex flex-col p-6 rounded-lg shadow-md w-3/4 sm:w-1/2">
        <h1 className="text-3xl font-bold text-center mb-6">Log in to Padsy</h1>
        <div>
          <form className="mb-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="flex flex-col gap-7">
                  <div>
                      <label htmlFor="email-address">
                      Email
                      </label>
                      <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={onChange}
                      className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                      />
                  </div>
                  <div>
                      <label htmlFor="password">
                      Password
                      </label>
                      <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={onChange}
                      className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                      />
                  </div>
              </div>
          </form>
        </div>

        <div className="flex flex-col gap-4 sm:items-center">
          <button onClick={() => signInWithGoogle({isDoctor:true, onSuccess:onSuccess})} className="flex justify-center items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
            <img src={googleLogo} alt="Google" className="w-7 h-7 mr-3"/>
            Sign in with Google
          </button>
          <button className="flex justify-center items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
            <img src={facebookLogo} alt="Facebook" className="w-7 h-7 mr-3"/>
            Sign in with Facebook
          </button>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <span>Don't have an account? </span>
              <Link to={RegisterPageUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
              Register here
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <button
              onClick={onLogInWithEmailAndPassword}
              className="bg-[#00786A] w-1/3 hover:scale-105 transition-all rounded-md text-white py-2 px-4"
          >
              Submit
          </button>
        </div>
      </div>
    </div>
  )
}

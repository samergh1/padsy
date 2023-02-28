import { Link } from 'react-router-dom'
import { LoginPageUrl, LandingPageUrl } from '../../../constants/urls'
import googleLogo from "../../../assets/google.png"
import facebookLogo from "../../../assets/facebook.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerWithEmailAndPasswordPatient, signInWithGoogle } from '../../../firebase/authentication/authentication'

export function PatientRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const onSuccess = () => {
    navigate(LandingPageUrl);
  };

  const onRegisterWithEmailAndPassword = async (event) => {
    event.preventDefault();
    const isDoctor = false;
    const { name, email, password, phoneNumber } = formData;
    await registerWithEmailAndPasswordPatient({ name: name, email: email, password: password, phoneNumber:phoneNumber, isDoctor:isDoctor, onSuccess: onSuccess });
  };

  const onChange = (event) => {
    const {name, value} = event.target;
    setFormData((oldData) => ({...oldData, [name]:value}));
  };

  return (
    <>
      <div className="sm:grid sm:grid-cols-5 w-screen h-screen">
        <div className="flex flex-col justify-center items-center bg-[#00786A] col-span-1">
          <div className="flex justify-center items-center gap-3">
            <span className="sm:text-lg text-white">Account details</span>
            <div className="bg-white w-4 h-4 rounded-lg"></div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="sm:text-lg text-white">Personal details</span>
            <div className="bg-white w-4 h-4 rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col bg-white col-span-4 p-10 h-screen">
          <div className="bg-[#F8F8F8] justify-center items-center w-full h-full p-8">
            <div>
              <h2 className="text-center text-3xl font-semibold text-gray-900 -mt-2">
                Account details
              </h2>
            </div>

            <form className="mt-2 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px grid grid-cols-2 gap-7">
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
                    required
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
                    required
                    className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={onChange}
                    required
                    className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone-number">
                    Phone number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    onChange={onChange}
                    required
                    className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:items-center">
                <button onClick={() => signInWithGoogle({isDoctor:false, onSuccess:onSuccess})} className="flex justify-center sm:w-3/4 lg:w-1/2 items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
                  <img src={googleLogo} alt="Google" className="w-7 h-7 mr-3"/>
                  Sign up with Google
                </button>
                <button className="flex justify-center sm:w-3/4 lg:w-1/2 items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
                  <img src={facebookLogo} alt="Facebook" className="w-7 h-7 mr-3"/>
                  Sign up with Facebook
                </button>
              </div>

              <div className="flex justify-center items-center">
                <button
                  onClick={onRegisterWithEmailAndPassword}
                  type="submit"
                  className="w-3/4 sm:w-1/4 rounded-md border border-transparent bg-[#00786A] py-2 text-sm font-medium text-white focus:outline-none hover:scale-105 transition-all"
                >
                  Continue
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-sm -mt-3">
                  <span>Already have an account? </span>
                  <Link to={LoginPageUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

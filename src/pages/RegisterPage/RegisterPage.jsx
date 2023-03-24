import { Link } from 'react-router-dom'
import { RegisterDoctorUrl, RegisterPatientUrl, LoginPageUrl } from '../../constants/urls'

export function RegisterPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen p-10">
          <div className="bg-[#efefef] w-1/2 p-8 rounded-md shadow-md">
            <div>
              <h2 className="mb-10 text-center text-3xl font-semibold text-gray-900">
                Sign up to padsy
              </h2>
            </div>
            
            <div className="flex flex-col gap-5 sm:items-center">
              <Link to={RegisterDoctorUrl} className="flex justify-center sm:w-3/4 lg:w-1/2 items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
                I'm a doctor
              </Link>
              <Link to={RegisterPatientUrl} className="flex justify-center sm:w-3/4 lg:w-1/2 items-center bg-white rounded-md p-3 hover:scale-105 transition-all">
                I'm a patient
              </Link>
            </div>

            <div className="flex items-center justify-center mt-4">
              <div className="text-sm">
                <span>Already have an account? </span>
                <Link to={LoginPageUrl} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
      </div>
    </>

  )
}

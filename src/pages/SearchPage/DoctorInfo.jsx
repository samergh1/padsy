// import { Link } from "react-router-dom";
import { Stars } from "../../components/Stars";
export function DoctorInfo({ selectedDoctor }) {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-5">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={selectedDoctor.profileImage}
            alt={selectedDoctor.name}
          />
          <h5 className="mb-1 text-xl  text-gray-800 font-semibold">
            {selectedDoctor.name}
          </h5>
          <span className="text-sm text-gray-700">
            {selectedDoctor.speciality}
          </span>
          <h4 className="mb-1 text-xl  text-gray-700 font-medium  pt-2 pb-1">
            {`${selectedDoctor.cost}$`}
          </h4>
          {/* Poner Estrella */}
          <Stars rate={selectedDoctor.rating} />
          <div className="mb-1 text-xl font-medium text-gray-900 dark:text-white"></div>
          {/* <Link to={`${MakeAppoimentUrl}`}> */}
          <div className="flex mt-4 space-x-3 md:mt-6">
            <span
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#00786A] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Make an appointment
            </span>
          </div>
          {/* </Link> */}
        </div>
        <div className="bg-white flex pt-3 pb-5 px-8 rounded-lg">
          <div className="bg-gray-500 h-32 w-32 rounded-md "></div>
          <div className="pl-6 w-max">
            <div className="pt-1">
              <h3 className="text-gray-800 font-semibold">Location</h3>
            </div>
            <h4 className="text-xs text-gray-600 pr-3 pt-1">
              {selectedDoctor.address}
            </h4>
            <div className="pt-3">
              <h3 className="text-gray-800 font-semibold">Phone</h3>
            </div>
            <h4 className="text-xs text-gray-600 pr-3 pt-1">
              {selectedDoctor.phoneNumber}
            </h4>
          </div>
        </div>
      </div>

      <div className="pt-10 ">
        <div className="bg-white  py-3 px-1 border-gray-200 rounded-lg shadow">
          <div className="pl-6 w-max flex-col flex">
            <div className="pt-1">
              <h3 className="text-gray-800 font-semibold">Degree</h3>
            </div>
            <h4 className="text-xs text-gray-600 pr-3 pt-1">
              {selectedDoctor.collegeDegree}
            </h4>
            <div className="pt-3">
              <h3 className="text-gray-800 font-semibold">Certificates</h3>
            </div>
            <h4 className="text-xs text-gray-600 pr-3 pt-1">
              <ul>
                <li>Certificado de la Univerdiad Simon Bolivar</li>
                <li>Curso en Panama Psicologia infantil</li>
              </ul>
              {/* {selectedDoctor.certificates} */}
            </h4>
            <div className="pt-3">
              <h3 className="text-gray-800 font-semibold">Description</h3>
            </div>
            <div className="mt-2">
              <span className="text-gray-800 font-semibold text-sm">
                Exelente Atencion!
              </span>
              <p className="mt-1 text-gray-500 font-light text-sm	">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="bg-white px-3 border-gray-200 rounded-lg shadow">
          <div className=" pl-2 border-b-2">
            <h3 className="text-gray-900 font-semibold pt-4 pb-2">Reviews</h3>
          </div>
          {/* Reviews component */}
          <div className="items-start py-3">
            <div className="ml-6">
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">Abril Sar</span>
                <span className="ml-2 text-green-600 text-xs">Verified</span>
              </p>
              <div className="flex items-center mt-1">
                <div>
                  <h4 className="text-xs text-gray-600 pr-3 ">
                    Sesion Quality
                  </h4>
                </div>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>

              <div className="mt-2">
                <span className="text-gray-800 font-semibold text-sm">
                  Exelente Atencion!
                </span>
                <p className="mt-1 text-gray-500 font-light text-sm	">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { Link } from "react-router-dom";
import { Stars } from "../../components/Stars";
import { Review } from "./Review";
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
          <div className="bg-gray-500 h-32 w-32 rounded-md ">
            <img
              className="w-full h-full rounded-lg mb-3  shadow-lg"
              src="https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg"
              alt="Cargando..."
            ></img>
          </div>
          <div className="pl-6 w-max">
            <div className="pt-1">
              <h3 className="text-gray-800 font-semibold">Address</h3>
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
      <div className="pt-10">
        <div className="bg-white px-3 border-gray-200 rounded-lg shadow">
          {/* Reviews component */}
          <div className="items-start py-3">
            <div className="ml-6">
              <div className="pt-1">
                <h3 className="text-gray-800 text-base font-semibold">
                  Degree
                </h3>
              </div>
              <a
                href={selectedDoctor.collegeDegree}
                className="text-sm text-gray-600 pr-3 pt-1"
              >
                Degree.pdf
              </a>
              <div className="pt-1">
                <h3 className="text-gray-800  text-base font-semibold">
                  Description
                </h3>
              </div>

              <div className="mt-2">
                <p className="mt-1 text-gray-500 font-light text-sm	">
                  {selectedDoctor.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <Review doctor={selectedDoctor}></Review>
      </div>
    </>
  );
}

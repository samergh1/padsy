import { Stars } from "../../components/Stars";
// import { getFeedBack,getUserById } from "../firebase/users";

export function Review({ doctor }) {
  return (
    <div className="bg-white px-3 border-gray-200 rounded-lg shadow">
      <div className=" pl-2 border-b-2">
        <h3 className="text-gray-900 font-semibold pt-4 pb-2">Reviews</h3>
      </div>

      <div className="items-start py-3">
        {/* Deberia hacer un map */}
        {/* {doctor.feedbacks.map(async (feedback, idFeedBack) => {
          const feedbackData = await getFeedBack(feedback);
          const patientData = await getUserById(feedbackData.patientId);
          return (
            <div className="ml-6 boreder border-b-2" key={idFeedBack} >
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">
                  {patientData.name}
                </span>
                <span className="ml-2 text-green-600 text-xs">Verified</span>
              </p>
              <div className="flex items-center mt-1">
                <div>
                  <h4 className="text-xs text-gray-600 pr-3 ">
                    Sesion Quality
                  </h4>
                </div>
                <Stars rate={feedbackData.rating}></Stars>
              </div>

              <div className="mt-2">
                <span className="text-gray-800 font-semibold text-sm">
                  {feedbackData.title}
                </span>
                <p className="mt-1 text-gray-500 font-light text-sm	">
                  {feedbackData.message}
                </p>
              </div>
            </div>
          );
        })} */}

        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 font-bold">Abril Sar</span>
            <span className="ml-2 text-green-600 text-xs">Verified</span>
          </p>
          <div className="flex items-center mt-1">
            <div>
              <h4 className="text-xs text-gray-600 pr-3 ">Sesion Quality</h4>
            </div>
            <Stars></Stars>
          </div>

          <div className="mt-2">
            <span className="text-gray-800 font-semibold text-sm">
              Exelente Atencion!
            </span>
            <p className="mt-1 text-gray-500 font-light text-sm	">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

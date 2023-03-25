import {
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";

const values = [
  {
    name: "Professionalism",
    description:
      "All of our doctors have gone through a quality test that ensures their performance and quality of service. Connect with them through Padsy, easier than ever.",
    icon: AcademicCapIcon,
  },
  {
    name: "Efficiency",
    description:
      "We provide a fast and efficient service. You can schedule your appointment with the doctor you want in less than 5 minutes.",
    icon: ClockIcon,
  },
  {
    name: "Affordable",
    description:
      "By giving online sessions, we make sure that you pay less and get more. Therapy doesn't have to be expensive.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Comfort",
    description:
      "Get the service you need from the comfort of your home. Padsy is whenever and wherever you want.",
    icon: ComputerDesktopIcon,
  },
];

export function Values() {
  return (
    <section id="values" className="bg-gray-100">
      <div className="mx-auto max-w-2xl items-center py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold leading-7 text-[#00786a]">
            Why should you choose us?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about our app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer an online service that connects patients with doctors,
            giving them many options to personalize their experience. Some
            values that separate us from the rest are ...
          </p>
        </div>

        <div className="mx-auto">
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16 md:grid-cols-2">
            {values.map((value) => (
              <div className="flex items-start text-start">
                <div className="inline-flex items-center rounded-md border border-transparent bg-[#00786a] px-2 py-2 text-sm font-medium">
                  <value.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>

                <div className="pl-6 group relative">
                  <h4 className="text-base font-semibold leading-7 text-gray-900">
                    {value.name}
                  </h4>
                  <p className="inline">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

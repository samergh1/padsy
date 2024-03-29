import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { UilBars, UilTimes, UilSignout } from "@iconscout/react-unicons";
import { logout } from "../../../firebase/authentication/authentication";
import { useUserContext } from "../../../context/userContext";
import {
  DoctorProfileUrl,
  PatientProfileUrl,
  LoginPageUrl,
  RegisterPageUrl,
} from "../../../constants/urls";
import { Link } from "react-router-dom";

const menuOptions = [
  {
    name: "Values",
    href: "#values",
  },
  {
    name: "Doctors",
    href: "#doctors",
  },
  {
    name: "Mission",
    href: "#mission",
  },
  {
    name: "Pages",
    href: "#pages",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoadingUser } = useUserContext();
  const navigate = useNavigate();

  const handleProfile = () => {
    if (user.isDoctor) {
      navigate(DoctorProfileUrl(user.uid));
    } else if (!user.isDoctor) {
      navigate(PatientProfileUrl(user.uid));
    }
  };

  const handleLogout = async () => {
    logout();
    navigate(LoginPageUrl);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 px-6 pt-6 lg:px-8"
        aria-label="Global"
      >
        {/* Company's Logo */}

        <div className="flex lg:flex-1 company-logo text-[30px]">
          <a href="#" className="-m-1.5 p-1.5">
            padsy
          </a>
        </div>

        {/* Mobile Menu Button */}

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <UilBars className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>

        {/* Menu Options */}

        <div className="hidden lg:flex lg:gap-x-12">
          {menuOptions.map((option, id) => (
            <a
              id={id}
              href={option.href}
              className="text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              {option.name}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}

        {/* User Name */}
        {!isLoadingUser && !!user ? (
          <div className="flex items-center ml-8">
            <span
              className="mr-8 cursor-pointer text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              onClick={handleProfile}
            >
              Profile
            </span>
            <span className="text-[#00786a] mr-5 text-sm py-2 px-3 block rounded-lg font-bold leading-6">
              {user.name}
            </span>

            {/* Logout */}
            <div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full p-1 text-gray-400"
              >
                <span className="sr-only">Logout</span>
                <UilSignout />
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden ml-6 lg:flex">
            <a href="login" className="ml-3 sm:block">
              <button
                onClick="login"
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </a>
            <a href="register" className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </a>
          </div>
        )}
      </nav>

      {/* Hamburger Menu */}

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 top-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <UilTimes className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Menu Options */}

              <div className="space-y-2 py-6">
                {menuOptions.map((option, id) => (
                  <a
                    id={id}
                    href={option.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {option.name}
                  </a>
                ))}
              </div>

              {/* Authentication Buttons */}

              <div className="space-y-2 py-6">
                <Link to={RegisterPageUrl}>
                  <button
                    type="button"
                    className="w-full -mx-3 bg-[#00786a] hover:bg-[#00302a] block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white"
                  >
                    Sign up
                  </button>
                </Link>
                <Link to={LoginPageUrl}>
                  <button
                    type="button"
                    className="w-full -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

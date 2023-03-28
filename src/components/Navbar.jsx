import { useState } from "react";
import { useNavigate } from "react-router";
import {
  UilSearch,
  UilCommentAltDots,
  UilAngleDoubleLeft,
  UilSignout,
  UilCalendarAlt,
} from "@iconscout/react-unicons";
import logo from "../assets/logo.svg";
import { logout } from "../firebase/authentication/authentication";
import { useUserContext } from "../context/userContext";
import {
  LoginPageUrl,
  SearchPageurl,
  DoctorProfileUrl,
  PatientProfileUrl,
  ChatPageUrl,
  SchedulePageUrl,
  AppointmentsUrl,
} from "../constants/urls";

export function Navbar() {
  const { user, isLoadingUser } = useUserContext();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const Menus = [
    { title: "Search doctors", src: UilSearch, to: SearchPageurl },
    { title: "My appointments", src: UilCalendarAlt, to: AppointmentsUrl },
    { title: "My chats", src: UilCommentAltDots, to: ChatPageUrl },
  ];

  const handleLogout = async () => {
    logout();
    navigate(LoginPageUrl);
  };

  return (
    <>
      <div
        className={`${
          open ? "md:w-72 w-40" : "w-20 "
        } bg-gray-300 h-screen p-5 pt-8 duration-300 flex flex-col justify-between sticky top-0`}
      >
        <UilAngleDoubleLeft
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full bg-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center w-58">
          {/* Desde aquí */}
          {!isLoadingUser && !!user ? (
            <>
              <div className="w-8 h-8 bg-green-100 rounded-md visible"></div>
              {open ? (
                <button
                  className={`text-black origin-left font-medium text-base duration-200 ${
                    !open && "scale-0"
                  }`}
                  onClick={() =>
                    user.isDoctor
                      ? navigate(DoctorProfileUrl(user.uid))
                      : navigate(PatientProfileUrl(user.uid))
                  }
                >
                  {user.name}
                </button>
              ) : null}
            </>
          ) : (
            <>
              <div className="w-12 h-12 bg-green-100 rounded-md visible"></div>
              <h1
                className={`text-black origin-left font-medium text-base duration-200 ${
                  !open && "scale-0"
                }`}
              >
                @USERNAME
              </h1>
            </>
          )}
          {/* Hasta aquí */}
        </div>
        <div className="flex">
          <ul className="pt-6 flex-col items-center">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                onClick={() => navigate(Menu.to)}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-sm items-center gap-x-4 
                        ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <Menu.src className="fill-[#00786A]" />
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 not-italic font-normal text-base leading-6 flex items-center text-center text-black`}
                >
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-40 justify-self-end flex justify-between">
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full p-1 text-black"
          >
            <UilSignout className="fill-[#00786A]" />
          </button>
          <img src={logo} className={open ? "visible" : "collapse"} />
        </div>
      </div>
    </>
  );
}

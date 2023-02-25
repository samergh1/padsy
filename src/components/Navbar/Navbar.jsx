import { useState } from "react";
import { UilSearch, UilCommentAltDots, UilAngleDoubleLeft, UilSignout} from '@iconscout/react-unicons'
import logo from "../../assets/logo.svg"

export function Navbar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Search doctors", src: UilSearch },
    { title: "My chats", src: UilCommentAltDots}
  ];

  return (
    <div className="flex h-screen">
        <div
            className={`${
            open ? "w-72" : "w-20 "
            } bg-gray h-full p-5 pt-8 relative duration-300 flex-col justify-between`}
        >
            <UilAngleDoubleLeft 
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
                <div className="w-16 h-16 bg-green rounded-md"></div>
                    <h1
                        className={`text-black origin-left font-medium text-xl duration-200 ${
                        !open && "scale-0"
                        }`}
                    >
                    @USUARIO
                    </h1>
            </div>
            <div className="flex">
                <ul className="pt-6 flex-col items-center" >
                    {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-sm items-center gap-x-4 
                        ${Menu.gap ? "mt-9" : "mt-2"} ${
                            index === 0 && "bg-light-white"
                        } `}
                        >
                        <Menu.src/>
                        <span className={`${!open && "hidden"} origin-left duration-200 not-italic font-normal text-base leading-6 flex items-center text-center text-black`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="mt-96 flex-col-reverse">
                <img src = {logo}/>
            </div>
        </div>
        <div className="h-screen flex-1 p-7">
            <h1 className="text-2xl font-semibold ">Home Page</h1>
        </div>
    </div>
  );
};
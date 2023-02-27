import React from "react";

export function SchedulePage() {
    const Hours = [
        {title: "9:00am- 10:00am"},
        {title: "10:00am- 11:00am"},
        {title: "11:00am- 12:00m"},
        {title: "2:00m- 3:00am"},
        {title: "3:00am- 4:00am"},
      ];
    return (

        <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>{Hours.map(Hour => <li>{Hour.title}</li>)}</option>
            </select>
        </div>

        // <div className="relative w-full lg:max-w-sm">
        //     <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        //         <option>ReactJS Dropdown</option>
        //         <option>Laravel 9 with React</option>
        //         <option>React with Tailwind CSS</option>
        //         <option>React With Headless UI</option>
        //     </select>
        // </div>
    );
}
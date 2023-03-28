import React from "react";

export function PersonalDetailsPatient({ formValues, onChange }) {
  return (
    <div>
      <form action="#" className="flex flex-col gap-7">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={onChange}
            value={formValues.name}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="phone-number">Phone number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            onChange={onChange}
            value={formValues.phoneNumber}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Phone number"
          />
        </div>
      </form>
    </div>
  );
}

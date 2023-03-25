import React from "react";

export function PersonalDetailsDoctor({
  formValues,
  onChange,
  handleBlur,
  errors,
}) {
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
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name"
          />
          {errors.name && <span className="text-red-700">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={onChange}
            value={formValues.phoneNumber}
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Phone number"
          />
          {errors.phoneNumber && (
            <span className="text-red-700">{errors.phoneNumber}</span>
          )}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={onChange}
            value={formValues.address}
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Your address"
          />
          {errors.address && (
            <span className="text-red-700">{errors.address}</span>
          )}
        </div>
      </form>
    </div>
  );
}

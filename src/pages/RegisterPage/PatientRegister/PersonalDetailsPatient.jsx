import React from "react";

export function PersonalDetailsPatient({
  formValues,
  onChange,
  handleBlur,
  errors,
}) {
  const options = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  return (
    <div>
      <form className="flex flex-col gap-7">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={onChange}
            onBlur={handleBlur}
            value={formValues.name}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name"
          />
          {errors.name && <span className="text-red-700">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="phone-number">Phone number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onChange={onChange}
            onBlur={handleBlur}
            value={formValues.phoneNumber}
            className="relative block w-full mt-1 appearance-none outline-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Phone number"
          />
          {errors.phoneNumber && (
            <span className="text-red-700">{errors.phoneNumber}</span>
          )}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={onChange}
            value={formValues.gender}
            className="relative block w-full mt-1 rounded-md border border-gray-300 px-2 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {options.map((option) => (
              <option>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="birthdate">Birth date</label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            onChange={onChange}
            onBlur={handleBlur}
            value={formValues.birthdate}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          {errors.birthdate && (
            <span className="text-red-700">{errors.birthdate}</span>
          )}
        </div>
      </form>
    </div>
  );
}

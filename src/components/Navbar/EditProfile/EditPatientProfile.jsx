import React from "react";
import { useState } from "react";
import { updateUser } from "../../../firebase/users";

export default function EditPatientProfile({ user, setEditProfile }) {
  const [newUser, setNewUser] = useState({ ...user });
  const [error, setErrors] = useState({});

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

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewUser((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleBlur = (e) => {
    onChange(e);
    setErrors(validateForm(newUser));
  };

  const validateForm = (value) => {
    let errors = {};
    let regexPassword = /^.{1,6}$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!value.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(value.email.trim())) {
      errors.email = "Email is invalid";
    }

    if (!value.name) {
      errors.name = "Name is required";
    }

    if (!value.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (value.phoneNumber.length < 7) {
      errors.phoneNumber = "Phone number should be at least 7 characters";
    }

    if (!value.birthdate) {
      errors.birthdate = "Birth date is required";
    }

    return errors;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setErrors(validateForm(newUser));
    console.log(newUser);

    if (Object.keys(error).length === 0) {
      await updateUser(newUser.uid, newUser);
      setEditProfile(false);
    }
  };

  return (
    <div className="border-b p-10">
      <div className="flex justify-end items-center gap-2 mb-6">
        <button
          onClick={() => {
            setEditProfile(false);
          }}
          className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
        >
          Cancel Edit
        </button>
      </div>

      <form action="#" className="grid grid-cols-2 gap-7">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onBlur={handleBlur}
            onChange={onChange}
            value={newUser.name}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name"
          />
          {error.name && <span className="text-red-700">{error.name}</span>}
        </div>

        {newUser.authProvider === "google" ? null : (
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={handleBlur}
              onChange={onChange}
              value={newUser.email}
              className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Your address"
            />
            {error.email && <span className="text-red-700">{error.email}</span>}
          </div>
        )}

        <div>
          <label htmlFor="phone-number">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            onBlur={handleBlur}
            onChange={onChange}
            value={newUser.phoneNumber}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Phone number"
          />
          {error.phoneNumber && (
            <span className="text-red-700">{error.phoneNumber}</span>
          )}
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={newUser.gender}
            onChange={onChange}
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
            onBlur={handleBlur}
            onChange={onChange}
            value={newUser.birthdate}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          {error.birthdate && (
            <span className="text-red-700">{error.birthdate}</span>
          )}
        </div>
      </form>

      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={handleSave}
          className="bg-[#00786A] text-center text-white px-2 lg:px-6 py-2 hover:scale-105 transition-all rounded-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

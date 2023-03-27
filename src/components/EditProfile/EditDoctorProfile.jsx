import React from "react";
import { useState } from "react";
import { updateUser } from "../../../firebase/users";

export function EditDoctorProfile({ user, setEditProfile }) {
  const [newUser, setNewUser] = useState({ ...user });
  const [error, setErrors] = useState({});

  const options = [
    {
      label: "Clinical Psychology",
      value: "Clinical Psychology",
    },
    {
      label: "Educational Psychology",
      value: "Educational Psychology",
    },
    {
      label: "Neuropsychology",
      value: "Neuropsychology",
    },
    {
      label: "Child Psychology",
      value: "Child Psychology",
    },
    {
      label: "Forensic Psychology",
      value: "Forensic Psychology",
    },
    {
      label: "Health Psychology",
      value: "Health Psychology",
    },
    {
      label: "Cognitive and Perceptual Psychology",
      value: "Cognitive and Perceptual Psychology",
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

    if (newUser.authProvider != "google") {
      if (!value.email) {
        errors.email = "Email is required";
      } else if (!regexEmail.test(value.email.trim())) {
        errors.email = "Email is invalid";
      }
    }

    if (!value.name) {
      errors.name = "Name is required";
    }

    if (!value.address) {
      errors.address = "Address is required";
    }

    if (!value.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (value.phoneNumber.length < 7) {
      errors.phoneNumber = "Phone number should be at least 7 characters";
    }

    if (!value.description.trim()) {
      errors.description = "Description is required";
    } else if (value.description.trim().length > 250) {
      errors.description =
        "The description reached the max limit of characters";
    }

    if (!value.cost) {
      errors.cost = "Cost of appointment is required";
    } else if (value.cost < 0) {
      errors.cost = "Cost must be positive";
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

      <form action="#" className="flex flex-col md:grid md:grid-cols-2 gap-7">
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
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={onChange}
            onBlur={handleBlur}
            value={newUser.address}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Your address"
          />
          {error.address && (
            <span className="text-red-700">{error.address}</span>
          )}
        </div>

        <div>
          <label htmlFor="specialty">Specialty</label>
          <select
            id="specialty"
            name="specialty"
            onChange={onChange}
            value={newUser.specialty}
            className="relative block w-full mt-1 rounded-md border border-gray-300 px-2 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {options.map((option) => (
              <option>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={onChange}
            value={newUser.description}
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Write a description about yourself (max 250 characters)"
          ></textarea>
          {error.description && (
            <span className="text-red-700">{error.description}</span>
          )}
        </div>

        <div>
          <label htmlFor="cost">Cost ($)</label>
          <input
            id="cost"
            name="cost"
            type="number"
            onChange={onChange}
            onBlur={handleBlur}
            value={newUser.cost}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Cost of the appointment"
          />
          {error.cost && <span className="text-red-700">{error.cost}</span>}
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

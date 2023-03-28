import React from "react";

export function ProfessionalDetailsDoctor({
  formValues,
  onChange,
  handleBlur,
  handleDegree,
  errors,
}) {
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

  return (
    <div>
      <form action="#" className="flex flex-col gap-7">
        <div>
          <label htmlFor="specialty">Specialty</label>
          <select
            id="specialty"
            name="specialty"
            onChange={onChange}
            value={formValues.specialty}
            className="relative block w-full mt-1 rounded-md border border-gray-300 px-2 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {options.map((option, id) => (
              <option id={id}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="College degree">College Degree</label>
          <input
            id="collegeDegree"
            name="collegeDegree"
            type="file"
            onChange={handleDegree}
            onBlur={handleBlur}
            accept="application/pdf"
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
          {errors.collegeDegree && (
            <span className="text-red-700">{errors.collegeDegree}</span>
          )}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={onChange}
            value={formValues.description}
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Write a description about yourself (max 250 characters)"
          ></textarea>
          {errors.description && (
            <span className="text-red-700">{errors.description}</span>
          )}
        </div>

        <div>
          <label htmlFor="cost">Cost ($)</label>
          <input
            id="cost"
            name="cost"
            type="number"
            onChange={onChange}
            value={formValues.cost}
            onBlur={handleBlur}
            className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Cost of the appointment"
          />
          {errors.cost && <span className="text-red-700">{errors.cost}</span>}
        </div>
      </form>
    </div>
  );
}

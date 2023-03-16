import React from 'react'

export function ProfessionalDetailsDoctor({ formValues, onChange }) {
  return (
    <div>
      <form action="#" className="flex flex-col gap-7">
          <div>
              <label htmlFor="specialty">
              Speciality
              </label>
              <input
              id="specialty"
              name="specialty"
              type="text"
              onChange={onChange}
              value={formValues.specialty}
              className="bg-white relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Speciality"
              />
          </div>
          <div>
              <label htmlFor="College degree">
              College Degree
              </label>
              <input
              id="collegeDegree"
              name="collegeDegree"
              type="file"
              onChange={onChange}
              className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone number"
              />
          </div>
      </form>
    </div>
  )
}

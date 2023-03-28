import React from "react";

export function Feedback() {
  return (
    <form className="w-full max-w-sm w bg-gray-200 p-8 rounded-md mt-8">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Feedback's Title
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#00786A] rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="grid-first-name"
            type="text"
            placeholder="Write a title..."
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-[#00786A] rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Feedback
          </label>
          <textarea
            id="description"
            name="description"
            className="appearance-none block w-full bg-white text-gray-700 border border-[#00786A] rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
            placeholder="Write a review about the experience with your doctor..."
          ></textarea>

          {/* <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          /> */}
          <p className="text-gray-600 text-xs italic mt-2">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#00786A] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2fa093] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

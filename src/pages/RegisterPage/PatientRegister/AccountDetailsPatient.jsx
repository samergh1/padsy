import React from "react";

export function AccountDetailsPatient({
  formValues,
  onChange,
  handleBlur,
  handleImage,
  errors,
}) {
  return (
    <div>
      <form className="mb-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="flex flex-col gap-7">
          <div>
            <label htmlFor="email-address">Email</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              value={formValues.email}
              onBlur={handleBlur}
              onChange={onChange}
              className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
            {errors.email && (
              <span className="text-red-700">{errors.email}</span>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={onChange}
              className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-700">{errors.password}</span>
            )}
          </div>

          <div>
            <label htmlFor="profileImage">Profile image</label>
            <input
              id="profileImage"
              name="profileImage"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImage}
              onBlur={handleBlur}
              className="relative block w-full mt-1 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.profileImage && (
              <span className="text-red-700">{errors.profileImage}</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

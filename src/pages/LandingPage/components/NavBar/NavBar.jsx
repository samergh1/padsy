import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UilBars, UilTimes } from '@iconscout/react-unicons'

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Company's Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <UilBars className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        {/* Landing Page Parts */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            Features
          </a>
          <a href="#" className="text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            Doctors
          </a>
          <a href="#" className="text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            Pages
          </a>
          <a href="#" className="text-sm py-2 px-3 block rounded-lg font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            Contact
          </a>
        </div>
        {/* Authentication Buttons */}
        <div className="hidden ml-6 lg:flex">
          <span class="ml-3 sm:block">
            <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Sign in
            </button>
          </span>
          <span class="sm:ml-3">
            <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Sign up
            </button>
          </span>
        </div>
      </nav>
      
      {/* Hamburger Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <UilTimes className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* Landing Page Parts */}
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Doctors
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pages
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              {/* Authentication Buttons */}
              <div className="space-y-2 py-6">
                <a
                    href="#"
                    className="-mx-3 bg-indigo-600 hover:bg-indigo-700 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white"
                  >
                    Sign up
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
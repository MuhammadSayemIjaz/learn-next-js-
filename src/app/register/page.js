"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
  const route = useRouter();
  const navigate = (name) => (route.push(name))
  const register_user = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div className='main'>
        {/* <Link href={"/"}>Go  to Home Page</Link>
      <button onClick={() => navigate("/")}>Go to Home</button> */}
        <div className="register_form border p-7 rounded-md shadow-md">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-lg font-semibold leading-7 text-center text-gray-900">Register</h2>
                <p className="mt-1 text-sm text-center leading-6 text-gray-600">Please fill below information for account creation.</p>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div className="mt-2">
                      <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label for="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <div className="mt-2">
                      <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                      <input id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="mt-2">
                      <input type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <fieldset>
                    <div className="space-y-6">
                    <label for="teacher" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                      <div className='flex gap-x-4 items-between justify-between'>
                        <div className="flex items-center gap-x-3">
                          <input id="teacher" name="role" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          <label for="teacher" className="block text-sm font-medium leading-6 text-gray-900">Teacher</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input id="student" name="role" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                          <label for="student" className="block text-sm font-medium leading-6 text-gray-900">Student</label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={register_user}> Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
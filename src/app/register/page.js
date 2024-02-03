"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
  const route = useRouter();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  }
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on the input name
    setState((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const navigate = (name) => (route.push(name))
  const register_user = async (e) => {
    e.preventDefault();

    console.log(state);
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(state)
    });
    let data = await response.json();
    console.log(data);
    // navigate("/");
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
                <p className="mt-1 text-sm text-center leading-6 text-gray-600">Please fill below information htmlFor account creation.</p>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="firstName"
                        id="first-name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="lastName"
                        id="last-name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <fieldset>
                    <div className="space-y-6">
                      <label htmlFor="teacher" className="block text-sm font-medium leading-6 text-gray-900">Role</label>
                      <div className='flex gap-x-4 items-between justify-between'>
                        <div className="flex items-center gap-x-3">
                          <input
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            id="teacher"
                            value="teacher"
                            name="role"
                            type="radio"
                            onChange={handleChange}
                          />
                          <label htmlFor="teacher" className="block text-sm font-medium leading-6 text-gray-900">Teacher</label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            id="student"
                            name="role"
                            type="radio"
                            value="student"
                            onChange={handleChange}
                          />
                          <label htmlFor="student" className="block text-sm font-medium leading-6 text-gray-900">Student</label>
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
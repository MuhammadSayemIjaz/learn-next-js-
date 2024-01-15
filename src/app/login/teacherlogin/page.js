"use client"
import React from 'react'

const TeacherLogin = () => {
  const login_user = (e) => {
    e.preventDefault();
    alert("Teacher login Successfully");
  }
  return (
    <div className='main'>
      <div className="login_form border p-7 rounded-md shadow-md">
        <form>
          <div class="">
            <div class="border-b border-gray-900/10 pb-12">
              <h1 class=" text-base text-center font-semibold leading-7 text-gray-900">Teacher Login</h1>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 ">
                <div class="col-span-full">
                  <label for="user-name" class="block text-sm font-medium leading-6 text-gray-900">User name</label>
                  <div class="mt-2">
                    <input type="text" name="user-name" id="user-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="col-span-full">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div class="col-span-full">
                  <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div class="mt-2">
                    <input id="password" name="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-center gap-x-6">
            <button class=" rounded-md bg-indigo-600 px-7 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={login_user}> Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeacherLogin
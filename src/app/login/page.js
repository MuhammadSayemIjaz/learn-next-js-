"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const route = useRouter();
  const navigate = (name) => (route.push(name))
  // const login_user = (e) => {
  //   e.preventDefault();
  //   navigate("/")
  // }
  return (
    <>
      <div className='main'>
        <h1>Login page</h1>
        {/* <Link href={"/"}>Go  to Home Page</Link> */}
        <button className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={() => navigate("/login/studentlogin")}>Student Login</button>
        <button className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={() => navigate("/login/teacherlogin")}>Teacher Login</button>
       
      </div>
    </>
  )
}

export default Login
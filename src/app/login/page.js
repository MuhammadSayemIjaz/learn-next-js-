"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const route = useRouter();
  const navigate = (name) => (route.push(name))
  return (
    <>
      <div className='main'>
        <h1>Login page</h1>
        <Link href={"/"}>Go  to Home Page</Link>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </>
  )
}

export default Login
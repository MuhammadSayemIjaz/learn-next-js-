"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const route = useRouter();
  const navigate = (name) => (route.push(name))
  return (
    <>
      <div>Login page</div>
      <Link href={"/"}>Go  to Home Page</Link>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  )
}

export default Login
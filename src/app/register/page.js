"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Signup = () => {
  const route = useRouter();
  const navigate = (name) => (route.push(name))
  return (
    <>
      <div>Signup page</div>
      <Link href={"/"}>Go  to Home Page</Link>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </>
  )
}

export default Signup
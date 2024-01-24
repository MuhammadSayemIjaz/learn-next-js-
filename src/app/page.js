"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const route = useRouter();
  const [state, setState] = useState("red");
  
  const navigate = (name) => route.push(name);
  
  const handleToggle = () => {
    setState((prevColor) => (prevColor === 'red' ? '#222222' : 'red'));
  }
  
  return (
    <div className="flex" style={{ flexDirection: 'column', gap: 20 }}>
      <h1 className="text-center"
        style={{ color :  state }}>Home Page</h1>
      <button onClick={() => navigate("/login")}>Login User</button>
      <button onClick={() => navigate("/register")}>Register User</button>
      <button onClick={handleToggle}>Color Background Color</button>
    </div>
  )
}

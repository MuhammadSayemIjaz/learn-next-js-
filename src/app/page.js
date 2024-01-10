"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  const navigate = (name) => route.push(name);
  return (
   <div>
    <h1>Home Page</h1>
    <button onClick={() => navigate("/login")}>Login User</button>
    <button onClick={() => navigate("/register")}>Register User</button>
   </div>
  )
}

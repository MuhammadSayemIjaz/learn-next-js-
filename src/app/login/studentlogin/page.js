"use client"
import Link from 'next/link'
import React from 'react'

const StudentLogin = () => {
  const students = [{
    id: 1,
    name: "John",
    rollNo: "ABC1234",
    class: "9th"
  },
  {
    id: 2,
    name: "Doe",
    rollNo: "ABC2345",
    class: "10th"
  }, {
    id: 3,
    name: "Alex",
    rollNo: "ABC3456",
    class: "9th"
  }, {
    id: 4,
    name: "Wanda",
    rollNo: "ABC4567",
    class: "11th"
  }]
  return (
    <div className='main'>
      <h1>Student Login</h1>
      <h2>
        Students List
      </h2>
      <ul>
        {students.map((value, index) => (<li key={value.id}>
          <Link href={`/login/studentlogin/${value.name}`}> Name:  {value.name} </Link>
        </li>))}
      </ul>
    </div>
  )
}

export default StudentLogin
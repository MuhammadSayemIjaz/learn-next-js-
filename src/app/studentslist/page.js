"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  // fetch students data from dummy API 

  const fetchStudents = async () => {
    await fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        const { users } = data;
        setStudents(users);
        console.log(users)
      }).catch((error) => {
          console.log(error.code);
          console.log(error);
      });
  }

  useEffect(() => {
    fetchStudents();
  }, [])

  // const students = [{
  //   id: 1,
  //   name: "John",
  //   rollNo: "ABC1234",
  //   class: "9th"
  // },
  // {
  //   id: 2,
  //   name: "Doe",
  //   rollNo: "ABC2345",
  //   class: "10th"
  // }, {
  //   id: 3,
  //   name: "Alex",
  //   rollNo: "ABC3456",
  //   class: "9th"
  // }, {
  //   id: 4,
  //   name: "Wanda",
  //   rollNo: "ABC4567",
  //   class: "11th"
  // }]

  return (
    <div className='main'>
      <h1 className='text-center mt-3'>Students List</h1>
      <h1 className='text-center mt-3'>Total Records : {students.length}</h1>
      <div className='ml-3'>
        <ul>
          {students.map((value, index) => {
            const {id, lastName, firstName} = value;
            return (<li key={id}>
              <Link href={`/studentslist/${id}`} > Name:  {lastName + firstName} </Link>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default StudentsList
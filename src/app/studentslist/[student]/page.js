"use client"
import Link from 'next/link'
import React from 'react'

const StudentData = ({ params }) => {
     console.log(params)
     return (
          <>
               <div className='main'>
                    <h1>Student Data</h1>
                    <h3>Name : {params.student}</h3>
                    <Link href={"/studentslist"}>Back To Student Login</Link>
               </div>
          </>
     )
}

export default StudentData
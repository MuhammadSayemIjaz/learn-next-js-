"use client"
import React from 'react'

const StudentInfo = ({ params }) => {

     return (
          <div>
               <h1>{params.studentinfo[0]} </h1>
          </div>
     )
}

export default StudentInfo
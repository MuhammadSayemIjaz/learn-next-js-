"use client"
import React from 'react'

export const TeachersInfo = ({id}) => {
  return (
    <>
     <button className='showbtn' onClick={() => alert(`Teacher Name : ${id}`) }>Show Teacher Id</button>
    </>
  )
}

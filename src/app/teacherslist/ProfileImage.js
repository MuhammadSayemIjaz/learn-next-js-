"use client"
import Image from 'next/image'

export const ProfileImage = ({src}) => {
     return (
          <>
               <Image
                    src={src}
                    alt="profile-image"
                    className='card-img'
                    width={50}
                    height={50}
               />
          </>
     )
}

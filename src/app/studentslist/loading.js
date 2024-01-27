"use client"
import { Watch } from 'react-loader-spinner';
export default function Page() {
     return (
          <div className='flex justify-center align-center'>
               <Watch
                    visible={true}
                    height="80"
                    width="80"
                    radius="48"
                    color="#4fa94d"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
               />
          </div>
     )
}

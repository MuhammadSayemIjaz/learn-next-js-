import style from './card.module.css';
import Link from "next/link";
import Image from 'next/image';
import { TeachersInfo } from "./TeachersInfo";
import { ProfileImage } from './ProfileImage';
async function teachersList() {
     let data = await fetch('https://dummyjson.com/users')
     data = await data.json();
     return data;
}
const TeachersLogin = async () => {
     const dataList = await teachersList();

     return (
          <>
               <h1 className="text-center">Teachers List</h1>
               <div className={style.container}>
                    {dataList.users.map((items) => (<>
                         <div>
                              <Link href={`/teacherslist/${items.id}`} key={items.id} >
                                   <div className={style.card}>
                                        {/* <div className='card-img-container'>
                              </div> */}
                                        <div className='card-text-container'>
                                             <h1 className='card-heading'>{items.firstName + "  " + items.lastName}</h1>
                                             {/* <p className='card-details'></p> */}
                                        </div>
                                   </div>
                              </Link>
                              <TeachersInfo id={items.id} />
                         </div>
                    </>))}
               </div>
          </>
     )
}

export default TeachersLogin
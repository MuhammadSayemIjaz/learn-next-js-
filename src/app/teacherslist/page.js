import style from './card.module.css';
import Link from "next/link";
import Image from 'next/image';
import { TeachersInfo } from "./TeachersInfo";
import { ProfileImage } from './ProfileImage';
async function teachersList() {
     let data = await fetch(process.env.TEACHERS_LIST_API)
     data = await data.json();
     return data;
}
const TeachersLogin = async () => {
     const dataList = await teachersList();
     return (
          <>
               <h1 className={style.heading}>Teachers List</h1>
               <div className={style.container}>
                    {dataList.users.map((items) => (<>
                         <div key={items.id}>
                              <Link href={`/teacherslist/${items.id}`}  >
                                   <div className={style.card}>
                                        <div className={style.card_img_container}>
                                             <ProfileImage src={items.image}  />
                                        </div>
                                        <div className={style.card_text_container}>
                                             <h1 className={style.card_heading}>{items.firstName + "  " + items.lastName}</h1>
                                             {/* <p className='card-details'></p> */}
                                        </div>
                                   </div>
                              </Link>
                              {/* <TeachersInfo id={items.id} /> */}
                         </div>
                    </>))}
               </div>
          </>
     )
}

export default TeachersLogin

export function generateMetadata() {
     return {
       title: 'Teachers list',
       description: "Teachers list page description"
     }
   }
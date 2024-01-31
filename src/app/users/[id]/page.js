import Link from "next/link";

const getData = async (id) => {
     let data = await fetch(`${process.env.USERS_LIST_API}/${id}`)
     data = await data.json();
     return data.users;
}

export default async function Users({ params }) {
     const data = await getData(params.id);
     const {id , email , username, password} = data[0] ;
     console.log(id, email, username, password , data);
     // console.log(data);
     return (
          <div className="m-5">
               <h1 style={{ fontSize: 40 }}>User Details </h1>
               <div className="flex flex-col gap-2 mt-3">
                    <p> <b>Usere Id :</b>  {id}</p>
                    <p> <b>Users Email :</b>  {email}</p>
                    <p> <b>User Name :</b>  {username}</p>
                    <p> <b> Password:</b> {password}</p>
               </div>
          </div>
     )
}

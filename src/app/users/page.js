const getData = async () => {
     let data = await fetch(process.env.USERS_LIST_API)
     data = await data.json();
     return data;
}

export default async function Users() {
     const data = await getData();
     console.log(data);
     return (
          <div className="m-5">
               <h1 style={{ fontSize: 40 }}>Users List</h1>
               {
                    data.map((item) => (<>
                         <div className="flex flex-col gap-2 mt-3">
                              <p> <b>Usere Id :</b>  {item.id}</p>
                              <p> <b>Users Email :</b>  {item.email}</p>
                              <p> <b>User Name :</b>  {item.username}</p>
                              <p> <b> Password:</b> {item.password}</p>
                         </div>
                    </>))
               }
          </div>
     )
}

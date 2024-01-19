import Link from "next/link";

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
               {dataList.users.map((items) => (<>
                    <Link href={`/teacherslist/${items.id}`} key={items.id} >
                         <h1>Name : {items.firstName + "  " + items.lastName}</h1>
                    </Link>
               </>))}
          </>
     )
}

export default TeachersLogin
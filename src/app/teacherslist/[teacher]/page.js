async function fetchTeacherInfo (id) {
     let data = await fetch(`https://dummyjson.com/users/${id}`);
     data = await data.json();
     return data;
}

const TeacherInfo = async ({params}) => {
     const teacherData = await fetchTeacherInfo(params.teacher);
     // console.log(params.teacher);
     // console.log("teacherData", teacherData);
  return (
    <>    
     <h1>Teacher Id : {params.teacher}</h1>
    </>
  )
}

export default TeacherInfo
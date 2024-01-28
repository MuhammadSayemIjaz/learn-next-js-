/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          domains:["robohash.org"]
     }
     // redirects: async () => {
     //      return  [
     //           {
     //                source: '/teacherslist',
     //                destination: '/login',
     //                permanent: false
     //           },
     //           {
     //                source: '/teacherslist/:teacher',
     //                destination: '/login',
     //                permanent: false
     //           },
     //           {
     //                source: '/studentslist',
     //                destination: '/login',
     //                permanent: false
     //           },
     //           {
     //                source: '/studentslist/:student',
     //                destination: '/login',
     //                permanent: false
     //           }
     //      ]    
     // } 
}

module.exports = nextConfig

import Link from 'next/link'
import './login.css'

export const metadata = {
     title: 'Login',
     description: 'Generated by create next app',
}

export default function LoginLayout({ children }) {
     return (
          <div>
               <nav>
                    <ul>
                         <li><Link href={"/"}>Home</Link></li>
                         <li><Link href={"/login"}>Login</Link></li>
                         <li><Link href={"/Register"}>Register</Link></li>
                         <li><Link href={"/login/studentlogin"}>Student Login</Link></li>
                         <li><Link href={"/login/teacherlogin"}>Teachers Login</Link></li>
                    </ul>
               </nav>
               <div>{children}</div>
          </div>
     )
}
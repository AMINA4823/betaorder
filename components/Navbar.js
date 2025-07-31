"use client"
import Link from "next/link"
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
 

export default function Navbar(){
const [menuOpen,setMenuOpen] = useState(false)

        const toggleMenu = () =>{
            setMenuOpen(!menuOpen)
        }      
  
    return(
        <main className="bg-white shadow shadow-gray-300 w-full"> 
        <div className="flex justify-between h-[50px] pt-3 px-5">
            <p className="text- blue-500 font-bold text-2xl">BetaOrder</p>
            <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                 <li><Link href="/dashboard/add-order">Add-order</Link></li>
                 <li><Link href="/dashboard/orders">orders</Link></li>
                 <li><Link href="/dashboard/profile">profile</Link></li>
            </ul>
            <Link href="/auth/signin"><p className="hidden md:block h-[30px] w-[80px] bg-blue-400 text-white text-center rounded-lg">SignUp</p>
            </Link>
            <div className="block py-2 md:hidden">
                <FaGripLines className="text-2xl text-blue-500"
                onClick={toggleMenu} />
          </div> 
         </div>
 {menuOpen &&(
    <div className="px-5 pb-1 md:hidden">
        <ul>
            <li><link href="/dashboard/add-order">Add-order</link></li>
             <li><link href="/dashboard/orders">order-list</link></li>
            <li><link href="/dashboard/profile">profile</link></li>

        </ul>
        <Link href="/auth/signin"><p className="h-[30px] w-[80px] bg-blue-400 text-white text-center rounded-lg
         md:hidden">SignUp</p>
        </Link>

    </div>
 ) }
</main>
    )
}
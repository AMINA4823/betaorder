import Link from "next/link";
import link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    const year = new Date().getFullYear()
    return (
        <footer className=" grid grid-cols-1 md:px-8 md:grid-cols lg:grid-cols-3 lg:py-4 lg:px-5 lg:gap-0 lg:bg-black">
          <div>
            <p className="text-2x1 text  text-blue-500 font-blod">BetaOrder</p>
            <p className="text-xs text-gray-600 ">&copy;{year}order managment system</p>
          </div>
          <div>
          <p className="text-md text-gray-700 ">Headquarters</p>
          <p className="text-md text-gray-700">Microsoft street, Dallas, Texas</p>    
          </div>
          <div>
            <ul className="flex lg:justify-end itenms-center gap-8">
                <li><Link href="#"><FaLinkedin className="text-blue-500 text-2xl"/></Link></li>
                <li><Link href="#"><FaFacebookF className="text-blue-500 text-2xl"/></Link></li>
                <li><Link href="#"><FaInstagram className="text-blue-500 text-2xl"/></Link></li>
           </ul>
           <ul className="flex lg:justify-end items-center gap-4">
            <li><Link href="#"className=" text-sm text-gray-600 ">Glossary</Link></li>
            <li><Link href="#"className="text-sm text-gray-600 ">FAQS</Link></li>
            <li><Link href="#"className="text-sm text-gray-600 ">Privacy policy</Link></li>

           </ul>

          </div> 

           </footer>
    )


        
    
      
    
}
// import { Link } from "react-router-dom"




// function Nav() {
//     return (
//         <div className="flex justify-evenly  h-18 w-full text-2xl border border-white bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76ROUx8UDOGjyN2-aHJcMy546WmCiuJKRxw&s)] mx-auto">
//             <div className="h-18 w-300  flex justify-between items-center  ">  <a href="/" className=" text-white  font-serif  ">Portfolio.</a>
//             <div className="flex h-20 w-100 items-center gap-10 text-2xl font-serif text-white  ">
//                 <Link to="/" className="hover:text-blue-400" >Home</Link>
//                     <Link to="/About" className="hover:text-blue-400">About</Link>
//                     <Link to="/Skills" className="hover:text-blue-400">Skills</Link>
//                 <Link to="/Contact" className="hover:text-blue-400">Contact</Link>
               

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Nav

import React from "react";
import { Link } from "react-router-dom";

import Insta from "../assets/instagram.png";
import Lindin from "../assets/lindin2.png";
// import Logo from "../assets/princeimg.jpeg";

export default function Navbar() {
    return (
        <div className="w-full h-16 px-4 bg-blue-400 text-white flex items-center justify-between">

            {/* <img src={Logo} alt="" className="h-12 w-12 rounded-full"/> */}
            <p className="font-bold">PortFolio..</p>

            <div className="hidden sm:flex h-15 w-200 justify-evenly items-center text-sm sm:text-base font-bold gap-6">
                <Link to="/" className="hover:translate-y-1 hover:text-sky-800">Home</Link>
                <Link to="/about" className="hover:translate-y-1 hover:text-sky-800">About</Link>
                <Link to="/resume" className="hover:translate-y-1 hover:text-sky-800">Resume</Link>
                {/* <Link to="/service" className="hover:translate-y-1 hover:text-sky-800">Work</Link> */}
                <Link to="/contact" className="hover:translate-y-1 hover:text-sky-800">Contact</Link>
            </div>

            <div className="flex gap-3 sm:gap-4 items-center">
                <a href="https://www.instagram.com/sapinder._?igsh=d3B5amhsN2l4dGho&utm_source=qr">
                    <img src={Insta} alt="" className="h-8 sm:h-10 rounded-xl" />
                </a>

                <a href="www.linkedin.com/in/sapinder-singh-13b0033b6">
                    <img src={Lindin} alt="" className="h-8 sm:h-10 rounded-xl" />
                </a>
            </div>
        </div>
    );
}
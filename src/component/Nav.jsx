import { Link } from "react-router-dom"




function Nav() {
    return (
        <div className="flex justify-evenly  h-18 w-full text-2xl border border-white bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76ROUx8UDOGjyN2-aHJcMy546WmCiuJKRxw&s)] mx-auto">
            <div className="h-18 w-300  flex justify-between items-center  ">  <a href="/" className=" text-white  font-serif  ">Portfolio.</a>
            <div className="flex h-20 w-100 items-center gap-10 text-2xl font-serif text-white  ">
                <Link to="/" className="hover:text-blue-400" >Home</Link>
                    <Link to="/About" className="hover:text-blue-400">About</Link>
                    <Link to="/Skills" className="hover:text-blue-400">Skills</Link>
                <Link to="/Contact" className="hover:text-blue-400">Contact</Link>
               

                </div>
            </div>
        </div>
    )
}

export default Nav
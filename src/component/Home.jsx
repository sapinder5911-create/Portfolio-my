// import { useNavigate } from "react-router-dom";
import Photo from "../assets/s.png";
import { motion } from "framer-motion"



function Home() {
   

    function goContact() {
        return 
    }
    return (
        <div className=" flex h-180 w-full justify-center bg-black/40 ">
            <div className="h-180 w-300 flex justify-between items-center">
                <motion.div
                    className=" flex flex-col justify-center h-130 w-150  text-white"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                <p className="text-4xl font-bold ">Hello,It's Me</p><br />
                <p className="text-5xl font-bold ">Sapinder Singh</p><br />
                    <p className="text-4xl font-bold ">And I'm a web Developer....</p> <br />
                    <p className=" text-xl ">I'm a Passionate web developer focused on creating modren user-friendly website. Currently learning full-stack development and improving my
                        skills every day</p><br />
                    <motion.button onClick={goContact}
                    
                        whileHover={{ scale: 1.1, backgroundColor: "#60a5fa" }}
                        whileTap={{ scale: 0.95 }}


                    
                        className="h-10 w-30  font-bold bg-blue-400 rounded-lg hover:text-red-400 cursor-pointer">Contect me</motion.button>
            
            </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                
                    className=" flex justify-center items-center h-150 w-150  ">
                <img src={Photo} alt="" className="h-120 w-140 border border-transparent " />
                
                
         
            </motion.div>
            </div>
        </div>
    )
}

export default Home
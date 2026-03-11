import { useNavigate } from "react-router-dom";
import Photo from "../assets/photo.png.jpeg";
import { motion } from "framer-motion"



function About() {
    const navigate = useNavigate();

    function goContact() {
        return(navigate("/Contact"))
    }


    return (
        <div className="flex flex-col h-180 w-full border border-white  bg-black/40 ">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}

            
                className="h-30 w-full  text-white flex justify-center items-center font-bold text-5xl font-serif" >What I Do</motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
               

                
                className="h-30 w-full  text-white flex justify-center items-cemter font-bold text-xl font-serif">
                I Fronted Develpoer learning React & Building Clean, Responsive Website. I'm a Passionate web developer <br />
                focused on creating modren user-friendly website. Currently learning full-stack development and improving my <br />
                skills every day

            </motion.div>
            <div className="h-100 w-full flex justify-center items-center ">
                <div className="h-180 w-300 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}

                        
                        
                        className="flex flex-col h-100 w-200  text-white ">
                        <p className="text-xl font-serif">Hello there</p><br />
                        <p className="text-5xl font-serif "> Hi, I'm Sapinder Singh - a calm-minded creative developer cratting serene digital journeys.</p><br />
                        <p className="text-xl font-serif" > I'm a Passionate web developerfocused on creating modren user-friendly website. Currently learning full-stack development and improving my
                            skills every day</p><br />
                        <button onClick={goContact} className="h-10 w-30  font-bold bg-blue-400 rounded-lg hover:text-red-400 cursor-pointer">Veiw My Work</button>
                </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}

                        className="h-100 w-100 ">
                        <img src={Photo} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
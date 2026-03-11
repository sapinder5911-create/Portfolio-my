import { motion } from "framer-motion"



function Skills() {
    return (
        <div className="flex flex-col h-180 w-full border border-white bg-[url(https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30506.jpg?semt=ais_user_personalization&w=740&q=80)]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="h-30 w-full  text-white flex justify-center items-center font-bold text-5xl font-serif" >Skills</motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            
                className="h-30 w-full  text-white flex justify-center items-cemter font-bold text-xl font-serif">
                <p>I have hands-on experience in building responsive and interactive web applications using HTML, CSS, JavaScript <br /> React.js, and Tailwind CSS. I am familiar with Node.js for backend development. I focus on writing clean, reusable <br /> and maintainable code.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                
                className="h-100 w-full  flex justify-evenly items-center">
                <div className="h-60 w-80 border border-white shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/2306/2306098.png" alt="" className="h-15 w-15 mt-5" /><br />
                    <p className="text-xl font-serif text-white ml-2">Strong understanding of semantic HTML5 for creating well-structured, accessible, and
                        SEO-friendly web pages</p>
                </div>
                <div className="h-60 w-80 border border-white shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-2 ">
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="" className="h-15 w-15 mt-5" /> <br />
                    <p className="text-xl font-serif text-white ml-2">Experienced in styling responsive layouts using Csss, Flexbox, Gria, and moder frameworks like Tailwind CSS</p>
                </div>
                <div className="h-60 w-80 border border-white shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-2 ">
                    <img src="https://cdn-icons-png.flaticon.com/128/16845/16845814.png" alt="" className="h-15 w-15 mt-5 ml-2" /> <br />
                    <p className="text-xl font-serif text-white ml-2">Proficient in JavaScript (ES6+) for building interactive features, handling DOM manipulation, and working with Api</p>
                </div>
                <div className="h-60 w-80 border border-white shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-2">
                    <img src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png" alt="" className="h-15 w-15 mt-5 ml-2" /><br />
                    <p className="text-xl font-serif text-white ml-2">Skilled in developing dynamic single-page applications using Reactjs, including hooks, components, and state </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Skills
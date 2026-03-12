


import { motion } from "framer-motion";
import Img from "../assets/sapinder.jpeg";
import { useNavigate } from "react-router-dom";
import Back from "../assets/background.jpg"

function About() {
    const navigate = useNavigate();

    function handledownload() {
        navigate("/resume")
    }
    return (
        <div className="w-full flex flex-col items-center gap-6 md:gap-15 bg-cover bg-center p-4 md:p-0" style={{ backgroundImage: `URL(${Back})` }}>
            <motion.div
                className="w-full max-w-md md:max-w-3xl flex flex-col justify-center items-center text-white mt-10"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">About</h1>
                <p className="text-base sm:text-lg md:text-xl mt-8 text-center">
                    I am a MERN Stack Developer with hands-on experience in building responsive web
                    applications. I have worked with HTML, CSS, JavaScript, node.js express.js and REST APIs, and have
                    experience with DOM manipulation, async/await, and API integration.I enjoy learning new technologies
                    and am eager to contribute to a team while improving my MERN Stack development skills through real-world projects.
                </p>
            </motion.div>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-15 justify-center items-center text-white">
                <motion.div
                    className="w-full max-w-md md:max-w-lg px-2"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-lg sm:text-xl md:text-2xl">Hello there</p>
                    <p className="text-2xl sm:text-3xl md:text-5xl mt-8">
                        Hi, I'm Sapinder Singh - a calm-minded creative developer crafting
                        serene digital journeys.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl mt-8">
                        I'm a passionate web developer focused on creating modern,
                        user-friendly websites. Currently learning Full-Stack development
                        and improving my skills every day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-10 h-auto">

                        <button
                            className="p-4 rounded-2xl hover:bg-sky-500 hover:-translate-y-1 cursor-pointer border border-sky-700 font-bold"
                            onClick={handledownload}
                        >
                            Download Resume
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full max-w-md md:max-w-lg mt-6 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={Img} alt="" className="rounded-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover" />
                </motion.div>
            </div>
            <div className="flex justify-center items-center text-center mt-6 md:mt-10 px-2 md:px-0 text-white">
                <motion.div
                    className="w-full max-w-3xl h-auto"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Skills</h1>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl">
                        I have hands-on experience in building responsive and interactive
                        web applications using HTML, CSS, JavaScript, React.js, and Tailwind
                        CSS. I am familiar with Node.js for backend development. I focus on
                        writing clean, reusable, and maintainable code.
                    </p>
                </motion.div>
            </div>
            <motion.div
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 mt-6 md:mt-10 px-2 md:px-0 w-full text-white"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="h-55 w-64 sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 ease-in-out rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
                    <p className="font-bold">HTML</p>
                    <p>
                        Strong understanding of semantic HTML5 for creating well-structured,
                        accessible, and SEO-friendly web pages.
                    </p>
                </div>
                <div className="h-55 w-64 sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 ease-in-out rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
                    <p className="font-bold">CSS</p>
                    <p>
                        Experienced in styling responsive layouts using CSS3, Flexbox, Grid,
                        and modern frameworks like Tailwind CSS
                    </p>
                </div>
                <div className="h-55 w-64 sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 ease-in-out rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
                    <p className="font-bold">JAVASCRIPT</p>
                    <p>
                        Proficient in JavaScript (ES6+) for building interactive features,
                        handling DOM manipulation, and working with APIs.
                    </p>
                </div>
                <div className="h-55 w-64 sm:w-72 md:w-80 text-center hover:translate-y-2 shadow-md hover:shadow-indigo-500/40 transition-all duration-300 ease-in-out rounded-2xl flex flex-col gap-6 border border-sky-200 p-4">
                    <p className="font-bold">REACT.JS</p>
                    <p>
                        Skilled in developing dynamic single-page applications using
                        React.js, including hooks, components, and state management.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

export default About;
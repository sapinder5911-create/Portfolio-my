



// import Resumep from "../assets/resume.png";
import { motion } from "framer-motion";
import Back from "../assets/background.jpg";

function Resume() {
    return (
        <div
            className="w-full h-screen flex flex-col items-center justify-center p-4 md:p-6 bg-black bg-cover bg-center"
            style={{ backgroundImage: `URL(${Back})` }}
        >
            <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-white text-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                My Resume
            </motion.h1>

            <motion.iframe
                src="/resume.pdf"
                className="w-full sm:w-4/5 md:w-3/5 h-64 sm:h-96 md:h-[250px] border rounded-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                title="Resume"
            />

            <motion.div
                className="mt-4 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <a
                    href="/resume.pdf"
                    className="p-3 text-white border border-sky-500 rounded-2xl hover:bg-sky-400 hover:-translate-y-1 font-bold text-center"
                >
                    Open
                </a>

                <a
                    href="/resume.pdf"
                    download
                    className="p-3 text-white border border-sky-500 rounded-2xl hover:bg-sky-400 hover:-translate-y-1 font-bold text-center"
                >
                    Download
                </a>
            </motion.div>
        </div>
    );
}

export default Resume;
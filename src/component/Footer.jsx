import Back from "../assets/background.jpg";
import Insta from "../assets/instagram.png";
import Link from "../assets/lindin2.png";
import Gmail from "../assets/gmail.png";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div
        className="w-full border-t border-t-gray-400 bg-cover bg-center flex justify-center items-center py-6 px-4"
        style={{ backgroundImage: `URL(${Back})` }}
      >
        <motion.div
          className="w-full max-w-3xl flex flex-col gap-3 items-center text-white text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* COPYRIGHT */}
          <p className="text-sm sm:text-lg md:text-xl">
            © 2026 Sapinder Singh. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 sm:gap-4">
            <a href="https://www.instagram.com/sapinder._?igsh=d3B5amhsN2l4dGho&utm_source=qr">
              <img src={Insta} alt="" className="h-8 sm:h-10 rounded-xl" />
            </a>

            <a href="www.linkedin.com/in/sapinder-singh-13b0033b6">
              <img src={Link} alt="" className="h-8 sm:h-10 rounded-xl" />
            </a>

            {/* <a href="mailto:sapinder5911@gmail.com">
              <img src={Gmail} alt="" className="h-8 sm:h-10 rounded-xl" />
            </a> */}
          </div>

          {/* CREDIT */}
          <p className="text-xs sm:text-sm md:text-base text-white">
            Built with using React.js
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
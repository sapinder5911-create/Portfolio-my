// import { Outlet } from "react-router-dom"
// import { motion } from "framer-motion"

// function Contact(){
//     return (
//         <div className=" flex h-180 w-full justify-center items-center border border-white bg-cover bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76ROUx8UDOGjyN2-aHJcMy546WmCiuJKRxw&s)]" >
//             <motion.div
                
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}

//                 className="flex flex-col h-120 w-150 items-center border-3 border-white ">
//                 <div className=" flex justify-evenly items-center text-white h-30 w-full ">
//                     <div className="flex flex-col ">
//                         <label htmlFor="" className="" >First Name</label>
//                         <input type="text" className="border-3 border-white h-10 w-50" /></div>
//                     <div className="flex flex-col">
//                         <label htmlFor="" >Last Name</label>
//                         <input type="text" className="border-3 border-white h-10 w-50" />
//                     </div>
//                 </div>
//                 <div className="h-20 w-120  flex flex-col  justify-center ">
//                     <label htmlFor="" className="text-white">Email</label><input type="email" name="" id="" className="border-3 border-white h-10 " />

//                 </div>
//                 <div className="h-50 w-120  flex flex-col  justify-center  ">
//                     <label htmlFor="" className="text-white">Message</label><input type="text" className="border-3 border-white h-30" />

//                 </div>
//                 <button className="h-10 w-30  font-bold bg-blue-400 rounded-lg hover:text-red-400 cursor-pointer">Send</button>
//                 <Outlet/>
                
//             </motion.div>
            
           

            
//       </div>
//   )
// }

// export default


// import { Outlet } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";

// function Contact() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         reset,
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log("Form submitted:", data);
//         reset(); // clears the form after submission
//     };

//     return (
//         <div className="flex min-h-screen w-full justify-center items-center border border-white bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76ROUx8UDOGjyN2-aHJcMy546WmCiuJKRxw&s')]">
//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex flex-col max-w-md w-full p-6 items-center border-2 border-white rounded-lg bg-black/40"
//             >
//                 <form
//                     onSubmit={handleSubmit(onSubmit)}
//                     className="w-full space-y-4 text-white"
//                 >
//                     {/* First & Last Name */}
//                     <div className="flex gap-4 ">
//                         <div className="flex flex-col flex-1 text-white">
//                             <label htmlFor="firstName">First Name</label>
//                             <input
//                                 id="firstName"
//                                 type="text"
//                                 {...register("firstName", { required: "First name is required" })}
//                                 className="border-2 border-white h-10 px-2 text-white"
//                             />
//                             {errors.firstName && (
//                                 <span className="text-red-400 text-sm">{errors.firstName.message}</span>
//                             )}
//                         </div>
//                         <div className="flex flex-col flex-1">
//                             <label htmlFor="lastName">Last Name</label>
//                             <input
//                                 id="lastName"
//                                 type="text"
//                                 {...register("lastName", { required: "Last name is required" })}
//                                 className="border-2 border-white h-10 px-2 text-white"
//                             />
//                             {errors.lastName && (
//                                 <span className="text-red-400 text-sm">{errors.lastName.message}</span>
//                             )}
//                         </div>
//                     </div>

//                     {/* Email */}
//                     <div className="flex flex-col">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             id="email"
//                             type="email"
//                             {...register("email", {
//                                 required: "Email is required",
//                                 pattern: {
//                                     value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
//                                     message: "Invalid email format",
//                                 },
//                             })}
//                             className="border-2 border-white h-10 px-2 text-white"
//                         />
//                         {errors.email && (
//                             <span className="text-red-400 text-sm">{errors.email.message}</span>
//                         )}
//                     </div>

//                     {/* Message */}
//                     <div className="flex flex-col">
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                             id="message"
//                             {...register("message", { required: "Message is required" })}
//                             className="border-2 border-white h-24 px-2 text-white"
//                         />
//                         {errors.message && (
//                             <span className="text-red-400 text-sm">{errors.message.message}</span>
//                         )}
//                     </div>

//                     {/* Submit Button */}
//                     <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         type="submit"
//                         className="h-10 w-full font-bold bg-blue-400 rounded-lg hover:text-red-400 cursor-pointer"
//                     >
//                         Send
//                     </motion.button>
//                 </form>

//                 <Outlet />
//             </motion.div>
//         </div>
//     );
// }

// export default Contact;


import React from "react";
import Back from "../assets/background.jpg";
import Location from "../assets/Location.png";
import { MapPin, Phone, Mail, User, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// import { MapPin } from "lucide-react";

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isSubmitSuccessful },
    } = useForm();

    async function hello(data) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        reset();
    }
    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex justify-center items-center flex-col"
            style={{ backgroundImage: `URL(${Back})` }}
        >
            {/* HEADER */}
            <div className="mt-6 text-center px-4">
                <p className="text-white text-4xl md:text-6xl font-bold">CONTACT</p>
                <p className="text-white text-lg md:text-2xl mt-2">
                    Feel free to reach out for collaborations, projects, or any inquiries.
                </p>
            </div>

            {/* MAIN SECTION */}
            <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-10 mt-10 px-4">

                {/* LEFT CONTACT INFO */}
                <div className="w-full max-w-md lg:max-w-lg border text-white rounded-2xl border-gray-500 bg-gray-900 flex flex-col gap-10 items-center py-10 px-5">
                    <p className="text-3xl">Contact Info</p>

                    <motion.div
                        className="flex gap-5 w-full"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Globe className="hover:bg-sky-700 h-13 w-15 rounded-full text-white p-3" />
                        <div>
                            <p className="text-2xl md:text-4xl">Location</p>
                            <p className="text-lg md:text-xl">Mohali, Punjab</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-5 w-full"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Phone className="hover:bg-sky-700 h-13 w-15 rounded-full text-white p-3" />
                        <div>
                            <p className="text-2xl md:text-3xl">Phone Number</p>
                            <p className="text-lg">9478521596</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-5 w-full"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Mail className="hover:bg-sky-700 h-13 w-15 rounded-full text-white p-3" />
                        <div>
                            <p className="text-2xl md:text-3xl">Email Address</p>
                            <p className="text-lg">sapinder5911@gmail.com</p>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT FORM */}
                <div className="w-full max-w-xl border border-gray-500 rounded-2xl bg-gray-900 p-8 flex justify-center items-center">
                    <form onSubmit={handleSubmit(hello)} className="flex flex-col w-full">

                        <label className="font-bold text-white text-xl">Enter Your First Name</label>
                        <input
                            {...register("FirstName", {
                                required: "text is required",
                                pattern: { value: /^[A-Za-z]+$/, message: "only letter will allowed" },
                            })}
                            type="text"
                            placeholder="First Name"
                            className="p-3 outline-1 outline-sky-500 rounded-xl w-full text-white hover:translate-y-1"
                        />
                        {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>}
                        <br />

                        <label className="font-bold text-white text-xl">Enter Your Last Name</label>
                        <input
                            {...register("LastName", {
                                required: "first name is required",
                                pattern: { value: /^[A-Za-z]+$/, message: "only letter will allowed" },
                            })}
                            type="text"
                            placeholder="Last Name"
                            className="p-3 outline-1 outline-sky-500 rounded-xl w-full text-white hover:translate-y-1"
                        />
                        {errors.LastName && <p className="text-red-500">{errors.LastName.message}</p>}
                        <br />

                        <label className="font-bold text-white text-xl">Enter Your Email Address</label>
                        <input
                            {...register("email", { required: "email is required" })}
                            type="email"
                            placeholder="Email Address"
                            className="p-3 border border-sky-400 outline-none rounded-xl w-full text-white hover:translate-y-1"
                        />
                        <br />

                        <label className="text-white text-xl font-bold">Message</label>
                        <textarea
                            placeholder="Message"
                            className="border border-sky-400 outline-none w-full p-3 h-32 text-white rounded-xl"
                        ></textarea>

                        <br />
                        <button
                            type="submit"
                            className="p-3 w-40 border border-sky-400 rounded-2xl text-white hover:bg-sky-400 hover:translate-y-1"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "sending" : "send Message"}
                        </button>

                        {isSubmitSuccessful && (
                            <p className="text-white text-2xl mt-4 font-bold">Message sent successfully</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

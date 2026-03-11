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


import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        reset(); // clears the form after submission
    };

    return (
        <div className="flex min-h-screen w-full justify-center items-center border border-white bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76ROUx8UDOGjyN2-aHJcMy546WmCiuJKRxw&s')]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col max-w-md w-full p-6 items-center border-2 border-white rounded-lg bg-black/40"
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full space-y-4 text-white"
                >
                    {/* First & Last Name */}
                    <div className="flex gap-4 ">
                        <div className="flex flex-col flex-1 text-white">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                {...register("firstName", { required: "First name is required" })}
                                className="border-2 border-white h-10 px-2 text-white"
                            />
                            {errors.firstName && (
                                <span className="text-red-400 text-sm">{errors.firstName.message}</span>
                            )}
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                {...register("lastName", { required: "Last name is required" })}
                                className="border-2 border-white h-10 px-2 text-white"
                            />
                            {errors.lastName && (
                                <span className="text-red-400 text-sm">{errors.lastName.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                                    message: "Invalid email format",
                                },
                            })}
                            className="border-2 border-white h-10 px-2 text-white"
                        />
                        {errors.email && (
                            <span className="text-red-400 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            {...register("message", { required: "Message is required" })}
                            className="border-2 border-white h-24 px-2 text-white"
                        />
                        {errors.message && (
                            <span className="text-red-400 text-sm">{errors.message.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="h-10 w-full font-bold bg-blue-400 rounded-lg hover:text-red-400 cursor-pointer"
                    >
                        Send
                    </motion.button>
                </form>

                <Outlet />
            </motion.div>
        </div>
    );
}

export default Contact;
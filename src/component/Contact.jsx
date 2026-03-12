

import React from "react";
import Back from "../assets/background.jpg";
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

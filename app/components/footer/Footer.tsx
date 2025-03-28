"use client"
// import React, { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { BiLineChart, BiBarChart, BiPieChart } from "react-icons/bi";

// const Footer = () => {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);
//     const controls = useAnimation();

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (count1 < 85) setCount1(prev => prev + 1);
//             if (count2 < 92) setCount2(prev => prev + 1);
//             if (count3 < 78) setCount3(prev => prev + 1);
//         }, 30);

//         return () => clearInterval(interval);
//     }, [count1, count2, count3]);

//     useEffect(() => {
//         controls.start({
//             y: [0, -10, 0],
//             transition: {
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//             }
//         });
//     }, [controls]);

//     return (
//         <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white py-12 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Left Section - Growth Visualization */}
//                     <div className="space-y-6 transform hover:scale-105 transition-transform duration-300">
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="flex items-center space-x-4"
//                         >
//                             <BiLineChart className="text-4xl text-teal-400" />
//                             <div>
//                                 <h3 className="text-2xl font-bold">{count1}%</h3>
//                                 <p className="text-teal-300">Revenue Growth</p>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.2 }}
//                             className="flex items-center space-x-4"
//                         >
//                             <BiBarChart className="text-4xl text-orange-400" />
//                             <div>
//                                 <h3 className="text-2xl font-bold">{count2}%</h3>
//                                 <p className="text-orange-300">Client Satisfaction</p>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4 }}
//                             className="flex items-center space-x-4"
//                         >
//                             <BiPieChart className="text-4xl text-green-400" />
//                             <div>
//                                 <h3 className="text-2xl font-bold">{count3}%</h3>
//                                 <p className="text-green-300">Market Growth</p>
//                             </div>
//                         </motion.div>
//                     </div>

//                     {/* Center Section - CTA */}
//                     <motion.div
//                         animate={controls}
//                         className="text-center flex flex-col items-center justify-center space-y-6"
//                     >
//                         <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400">
//                             Transform Your Digital Presence
//                         </h2>
//                         <p className="text-gray-300 max-w-md">
//                             Ready to take your business to the next level? Let's create your success story together.
//                         </p>
//                         <button className="bg-gradient-to-r from-teal-500 to-blue-500 px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-teal-500/25">
//                             Get Started Now
//                         </button>
//                     </motion.div>

//                     {/* Right Section - Social Links */}
//                     <div className="space-y-6">
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 1 }}
//                             className="flex justify-center md:justify-end space-x-6"
//                         >
//                             <a href="#" className="transform hover:scale-110 transition-transform duration-300">
//                                 <FaFacebook className="text-3xl text-blue-400 hover:text-blue-300" />
//                             </a>
//                             <a href="#" className="transform hover:scale-110 transition-transform duration-300">
//                                 <FaTwitter className="text-3xl text-blue-400 hover:text-blue-300" />
//                             </a>
//                             <a href="#" className="transform hover:scale-110 transition-transform duration-300">
//                                 <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-300" />
//                             </a>
//                             <a href="#" className="transform hover:scale-110 transition-transform duration-300">
//                                 <FaInstagram className="text-3xl text-blue-400 hover:text-blue-300" />
//                             </a>
//                         </motion.div>

//                         <div className="text-center md:text-right">
//                             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//                             <p className="text-gray-300">contact@digitalmarketing.com</p>
//                             <p className="text-gray-300">+1 (555) 123-4567</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-12 pt-8 border-t border-blue-700 text-center text-sm text-gray-400">
//                     <p>© 2024 Digital Marketing Growth. All rights reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Rocket } from 'lucide-react'

export function Footer() {
    const social = [Facebook, Twitter, Instagram, Linkedin]
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <footer className="relative bg-[#020617] border-t border-[#1e293b]">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative container px-4 py-16 mx-auto">
                {/* Main Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20"
                >
                    {/* Brand Column */}
                    <motion.div variants={variants} className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <Rocket className="w-8 h-8 text-purple-500" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                DigiPillars
                            </span>
                        </Link>
                        <p className="text-gray-400 text-balance">
                            Transforming digital landscapes through innovative marketing solutions that drive real results.
                        </p>
                        <div className="flex gap-3">
                            {social.map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-gray-400 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services Column */}
                    <motion.div variants={variants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Solutions</h3>
                        <nav className="grid gap-3">
                            {['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Advertising', 'Email Marketing', 'Marketing Automation'].map((item, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                                >
                                    <div className="w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div variants={variants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Connect</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-400">
                                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-purple-400" />
                                <div>
                                    <p className="text-white">Email Us</p>
                                    <p>contact@digipillars.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400">
                                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                                <div>
                                    <p className="text-white">Call Us</p>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-green-400" />
                                <div>
                                    <p className="text-white">Visit Us</p>
                                    <p>123 Digital Ave, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Newsletter Column */}
                    <motion.div variants={variants} className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                        <form className="space-y-4">
                            <Input
                                placeholder="Your email"
                                className="bg-gray-900 border-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                            />
                            <Textarea
                                placeholder="What would you like to hear about?"
                                className="bg-gray-900 border-gray-800 placeholder-gray-500 h-32 focus:ring-2 focus:ring-purple-500"
                            />
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg shadow-purple-500/20"
                                >
                                    Subscribe Now
                                </Button>
                            </motion.div>
                        </form>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-12" />

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} DigiPillars. All rights reserved.
                    </p>
                    <nav className="flex flex-wrap justify-center gap-4">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item, i) => (
                            <Link
                                key={i}
                                href="#"
                                className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2"
                            >
                                <span className="hidden sm:inline">•</span> {item}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute bottom-20 left-10 opacity-10 mix-blend-screen">
                <svg viewBox="0 0 200 200" className="w-40 h-40 animate-spin-slow">
                    <path
                        fill="currentColor"
                        d="M45,100a55,55 0 1,0 110,0a55,55 0 1,0 -110,0"
                    />
                </svg>
            </div>
        </footer>
    )
}
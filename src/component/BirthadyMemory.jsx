import { useEffect } from "react";
import Image from "../../public/image/image1.png";
import Image2 from "../../public/image/image2.png";
import Image3 from "../../public/image/image3.png";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

function BirthdayMemory() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 },
            });
        }, 1800)
    }, []);
    return (
        <motion.div
            className="relative max-w-3xl mx-auto px-6 sm:px-10 py-12 mb-20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background Gradient Blur */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-br from-pink-200 via-blue-100 to-white rounded-3xl" />

            <motion.h2
                className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 text-transparent bg-clip-text"
                style={{ fontFamily: "'Dancing Script', cursive" }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Why your birthday is so important
            </motion.h2>

            <motion.p
                className="text-lg sm:text-xl leading-relaxed text-center text-gray-800 tracking-wide"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Your birthday is special because on that very day Kanha played his flute, spreading joy everywhere. On that day, the most beautiful girl was born, the winds were humming, the rivers were singing, the sun was smiling, and even the moon was blushing. </motion.p>
            <motion.p
                className="text-lg sm:text-xl leading-relaxed text-center text-gray-800 tracking-wide"
                style={{ fontFamily: "'Open Sans', sans-serif", paddingTop: "50px" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
            >ढलते हुए सूरज जैसा है तू, 
            उदयपुर में बिताई हुई शाम जैसा हसीन है तू।</motion.p>
            <motion.div
                className="space-y-12" // 👈 adds gap between children
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className="w-full h-screen overflow-hidden">
                    <img
                        src={Image}
                        alt="Love Memory"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                    />
                </div>

                <div className="w-full h-screen overflow-hidden">
                    <img
                        src={Image2}
                        alt="Love Memory"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                    />
                </div>

                <div className="w-full h-screen overflow-hidden">
                    <img
                        src={Image3}
                        alt="Love Memory"
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        loading="lazy"
                    />
                </div>
            </motion.div>
            <motion.a
                href="https://youtu.be/8SYPKQMW_2Q?si=uHkrgm5fvxJFaW83"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-16 text-1xl font-extrabold 
                    bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 
                    bg-clip-text text-transparent
                    hover:scale-110 transition-transform duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                MY HEART SAYING TO MY <span className="text-red-600">BIRTHDAY GIRL</span>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold shadow-lg hover:shadow-2xl transition"
                    style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.4rem" }}
                >
                    💝 Click for listen
                </motion.button>
            </motion.a>
        </motion.div>
    )
}

export default BirthdayMemory;
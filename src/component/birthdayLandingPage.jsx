import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
// import BirthdayMemory from "./BierthadyMemory";
import image from "../../public/image/a.png"
import { useNavigate } from "react-router-dom";
import Image from "../../public/image/image1.png";
import "@fontsource/dancing-script";
import "@fontsource/playfair-display";
import "@fontsource/alex-brush";
import HBD from "../../public/image/hbd.png"


const photos = [
    { image: Image, caption: "Happy birthday Apne Pariwar ki sabse Achi beti Divya ko 🥰" },
    { image: Image, caption: "Happy birthday Papa ki ladli beti ko Divu beta ko😍" },
    { image: Image, caption: "Happy birthday Ek achi Didi ko 😉" },
    { image: Image, caption: "Happy birthday Sabse achi dost ko 🫂" },
    { image: Image, caption: "Happy birthday Naresh ki friend ko 😏" },
    { image: Image, caption: "Happy birthday Ek dosti nibhane wali Divya ko ✌️" },
    { image: Image, caption: "Happy Birthday mummy ki pyari beti ko ❤️" },
    { image: Image, caption: "Happy birthday Duniya ki sabse Sundar ladki ko 🤩" },
    { image: Image, caption: "Happy birthday pyar ko pyar se nibanne wali Divya ko 🥺" }
];

export default function BirthdaySurprise() {
    const { width, height } = useWindowSize();
    const [showSurprise, setShowSurprise] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setShowSurprise(true);
    }, []);

    const handleClick = () => {
        setShowSurprise(true)
        navigate("/its_Your_birthday")
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-blue-50 text-center px-6 py-10 text-gray-900 select-none"

            // className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-blue-100 text-center px-6 py-10 text-gray-900 select-none"
            style={{ fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
            {showSurprise && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={400}
                    recycle={false}
                />
            )}
            {/* Celebration confetti */}
            {showSurprise && (
                <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />
            )}

            {/* Main heading */}
            <div className="relative w-full flex items-center justify-center py-10">
                {/* Background Image */}
                <img
                    src={image}
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
                />

                {/* Text with animation */}
                <motion.h1
                    className="text-5xl sm:text-7xl font-extrabold mb-8 text-pink-600 drop-shadow-lg leading-relaxed z-10 text-center px-4"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        fontFamily: "Caveat, cursive",
                        textDecoration: "none",
                    }}
                >
                    Happy Birthday Divu, My Beautiful Love 💖😘🥳
                </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
                className="max-w-xl mx-auto mb-14 text-xl sm:text-2xl text-green-1100 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                style={{ fontFamily: " Alex Brush , alex-brush, Georgia, serif", paddingTop: "80px" }}
            >Happy Birthday </motion.p>
            <img
                src={HBD}
                alt="hbd" loading="lazy"
                style={{ textDecoration: "none" }}
            />
            <motion.p
                className="max-w-xl mx-auto mb-14 text-xl sm:text-2xl text-green-1100 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                style={{ fontFamily: "Georgia, serif", paddingTop: "80px" }}
            >
                Even though today is your birthday,
                every single day feels like a celebration for this world
                whenever it witnesses your beautiful smile.

                Those who get to see you every day —
                they must be truly the luckiest people on Earth.

                I wish I could see you every day too...
                because then, I would celebrate each day
                as if it were your birthday.

                That's way my heart say
                💓🙈
                <motion.p
                    className="max-w-xl mx-auto mb-14 text-xl sm:text-2xl text-green-1000 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    style={{ fontFamily: "Georgia, serif", paddingTop: "80px" }}
                >
                    "चाँद सी महबूबा हो मेरी,
                    कब ऐसा मैंने सोचा था।
                    हाँ, तुम बिल्कुल वैसी हो,
                    जैसा मैंने सोचा था।
                    चाँद सी महबूबा हो मेरी,
                    कब ऐसा मैंने सोचा था..."
                </motion.p>
            </motion.p>

            {/* Photo gallery */}
            <motion.div
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14 max-w-6xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { staggerChildren: 0.15, delayChildren: 0.6 },
                    },
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {photos.map((src, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -100 : 100 // alternate left/right
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
                        >
                            <img
                                src={src.image}
                                alt={`Memory ${index + 1}`}
                                className="rounded-3xl shadow-xl object-cover w-full h-48 sm:h-60 cursor-pointer filter hover:brightness-110 transition"
                                loading="lazy"
                                style={{ textDecoration: "none" }}
                            />
                            {/* <h5 className="mt-2 text-center text-pink-700 font-semibold">{src.caption}</h5> */}
                            <motion.h5
                                className="mt-4 text-center text-pink-700 text-2xl sm:text-3xl font-medium drop-shadow-md"
                                style={{ fontFamily: "'Playfair Display's, sans-serif" }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                {src.caption}
                            </motion.h5>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Personal messages */}
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
                    Why I Love You ❤️
                </motion.h2>

                <motion.p
                    className="text-lg sm:text-xl leading-relaxed text-center text-gray-800 tracking-wide"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Every moment we share is a treasure. Your smile brightens my darkest days, your kindness is a gift to everyone around you, and your laugh is the sweetest melody. <br />You are my inspiration, my best friend, and my forever love.
                </motion.p>

                <motion.div
                    className="mt-10 overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-pink-100 hover:ring-pink-300 transition duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    whileHover={{ scale: 1.03 }}
                >
                    <img
                        src={image}
                        alt="Love Memory"
                        className="w-full h-64 sm:h-80 object-cover brightness-95 hover:brightness-105 transition duration-500 ease-in-out"
                        loading="lazy"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="max-w-3xl mx-auto px-4 py-8 bg-pink-50 rounded-3xl shadow-md mb-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ textDecoration: "none", fontStyle: "italic", color: "#d6336c" }}
            >
                <p>
                    "In your eyes, I find home. In your heart, I find peace. Here's to a lifetime of memories together."
                </p>
            </motion.div>

            {/* Surprise Button */}
            <h5>Lo ab pyar se divya special smile karo or ise touch karo 😍</h5>
            <motion.button
                onClick={handleClick}
                className={`relative inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-pink-300 mb-20`}
                whileTap={{ scale: 0.95 }}
                disabled={showSurprise}
                style={{ textDecoration: "none" }}
            >
                Touch with smile
            </motion.button>

            {/* Surprise Message */}
            {showSurprise && (
                <motion.div
                    className="max-w-xl mx-auto px-8 py-10 rounded-3xl bg-gradient-to-tr from-pink-100 to-blue-200 shadow-md text-pink-700 font-extrabold text-3xl sm:text-4xl tracking-wide mb-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ textDecoration: "none" }}
                >
                    Here’s your Surprise... 🎁✨ Stay tuned for more love and unforgettable moments!
                </motion.div>
            )}
        </div>
    );
}

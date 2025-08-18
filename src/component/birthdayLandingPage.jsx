import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import image from "../../public/image/a.png";
import { useNavigate } from "react-router-dom";
import Image from "../../public/image/image1.png";
import "@fontsource/dancing-script";
import "@fontsource/playfair-display";
import "@fontsource/alex-brush";
import HBD from "../../public/image/hbd.png";
import WishCard from "./Card";
import CoverPhoto from "../../public/image/CoverPhoto.jpeg";
import { FaHeart, FaLeaf, FaRegKissWinkHeart } from "react-icons/fa";
import { GiRose } from "react-icons/gi";

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

const emojis = ["❤️", "🌹", "🤍", "😍", "💖", "😘", "💓", "🎉", "🥳", "💖"];

const EmojiRain = () => {
    const { width, height } = useWindowSize();
    const [active, setActive] = useState(true);

    useEffect(() => {
        // Stop rain after 6s
        const timer = setTimeout(() => setActive(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
            {active &&
                Array.from({ length: 50 }).map((_, i) => {
                    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    const left = Math.random() * width;
                    const delay = Math.random() * 5;
                    const duration = 4 + Math.random() * 3;
                    const size = 24 + Math.random() * 24;

                    return (
                        <motion.div
                            key={i}
                            initial={{ y: -50, x: left, opacity: 0 }}
                            animate={{ y: height + 50, opacity: [0, 1, 1, 0] }} // fade in → fall → fade out
                            transition={{
                                duration: duration,
                                delay: delay,
                                ease: "linear",
                            }}
                            style={{
                                position: "absolute",
                                fontSize: `${size}px`,
                            }}
                        >
                            {randomEmoji}
                        </motion.div>
                    );
                })}
        </div>
    );
};


export default function BirthdaySurprise() {
    const { width, height } = useWindowSize();
    const [showSurprise, setShowSurprise] = useState(false);
    const [emojiRain, setEmojiRain] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // popup state
    const navigate = useNavigate();

    useEffect(() => {
        setShowSurprise(true);
    }, []);

    useEffect(() => {
        setEmojiRain(true);

        // End emoji rain after 6s -> then show popup
        const rainTimer = setTimeout(() => {
            setEmojiRain(false);
            setShowPopup(true);
        }, 6000);

        // Hide popup 3s after showing
        const popupTimer = setTimeout(() => {
            setShowPopup(false);
        }, 9000); // 6s + 3s

        return () => {
            clearTimeout(rainTimer);
            clearTimeout(popupTimer);
        };
    }, []);

    const handleClick = () => {
        setShowSurprise(true);
        navigate("/its_Your_birthday");
    };

    return (
        <div
            className="min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-50 via-rose-100 to-blue-50 text-center px-6 py-6 text-gray-900 select-none"
            style={{ fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >

            {showSurprise && (
                <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />
            )}
            {emojiRain && <EmojiRain />}

            {/* 🎯 Popup */}
            {/* {showPopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="fixed inset-0 flex items-center justify-center z-[999]"
                >
                    <div className="bg-white/80 backdrop-blur-lg px-10 py-6 rounded-3xl shadow-2xl border border-pink-200 flex flex-col items-center">
                        <motion.h1
                            className="text-3xl sm:text-5xl font-bold text-pink-600 drop-shadow-lg"
                            style={{ fontFamily: "'Alex Brush', cursive" }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            🎉 Happy Birthday Divya 💖
                        </motion.h1>
                        <p className="text-gray-700 mt-2 font-semibold">
                            Today is all about YOU! ✨
                        </p>
                    </div>
                </motion.div>
            )} */}

            {/* Background Section */}
            <div
                className="relative w-full flex items-center justify-center py-10"
                style={{
                    minHeight: "550px",
                    backgroundImage: `url(${CoverPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            <span className="block font-['Dancing Script',cursive] text-[10px] text-green-900 text-center bg-pink-200/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                🌹 27 August — The Day My Heart Found Its Home 🌹
            </span>

            <img src={HBD} alt="hbd" loading="lazy" style={{ textDecoration: "none" }} />

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
                <br />
                Those who get to see you every day —
                they must be truly the luckiest people on Earth.
                <br />
                I wish I could see you every day too...
                because then, I would celebrate each day
                as if it were your birthday.
                <br />That's way my heart say 💓🙈
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
                        transition: { staggerChildren: 0.15, delayChildren: 0.6 }
                    }
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {photos.map((src, index) => (
                        <WishCard key={index} image={src.image} caption={src.caption} />
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

            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl sm:text-3xl font-semibold text-center mb-6 
                 bg-gradient-to-r from-red-500 via-red-400 to-pink-500 
                 text-transparent bg-clip-text"
                style={{ fontFamily: "'Dancing Script', cursive" }}
            >
                <span>Lo ab pyar se Divya special smile karo or ise touch karo.</span>
            </motion.h3>


            <motion.button
                onClick={handleClick}
                // whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center overflow-hidden text-white font-bold py-3 px-12 rounded-full shadow-xl
             bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600
             hover:from-pink-500 hover:via-pink-600 hover:to-pink-700
             transition-all duration-500 ease-out focus:outline-none focus:ring-4 focus:ring-pink-300"
                style={{
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(255, 105, 180, 0.6)",
                }}
            >
                {/* Button Text */}
                <span className="relative z-10 text-lg">🌹 Touch with Love 🌹</span>

                {/* Glow effect */}
                <span className="absolute inset-0 rounded-full bg-pink-400 opacity-30 blur-xl animate-pulse"></span>

                {/* Floating Flowers / Hearts */}
                <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [-8, 0, -8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 text-2xl text-pink-500"
                >
                    <GiRose />
                </motion.span>

                <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [8, 0, 8] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 text-2xl text-red-500"
                >
                    <FaHeart />
                </motion.span>

                <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [-6, 0, -6] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-4 text-xl text-green-600"
                >
                    <FaLeaf />
                </motion.span>

                <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [6, 0, 6] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-4 text-2xl text-pink-400"
                >
                    <FaRegKissWinkHeart />
                </motion.span>
            </motion.button>
        </div>
    )
}

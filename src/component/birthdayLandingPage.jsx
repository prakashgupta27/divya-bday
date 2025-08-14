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
import WishCard from "./Card";


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

const emojis = ["❤️", "💖", "🤍", "🌹", "😍", "😘", "🎉", "🥳", "💓", "💘"];

const EmojiRain = () => {
    const { width, height } = useWindowSize();
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 50 }).map((_, i) => {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                const left = Math.random() * width;
                const delay = Math.random() * 5;
                const duration = 4 + Math.random() * 3;
                const size = 24 + Math.random() * 24;

                return (
                    <motion.div
                        key={i}
                        initial={{ y: -50, x: left, opacity: 0 }}
                        animate={{ y: height + 50, opacity: 1 }}
                        transition={{
                            duration: duration,
                            delay: delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            position: "absolute",
                            fontSize: `${size}px`
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
    const [emojiRain, setEmojiRain] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        setShowSurprise(true);
    }, []);

    useEffect(() => {
        setEmojiRain(true);
        const timer = setTimeout(() => {
            setEmojiRain(false);
        }, 6000);
        return (() => clearTimeout(timer))
    }, [])

    const handleClick = () => {
        console.log("here is the click ")
        setShowSurprise(true)
        navigate("/its_Your_birthday")
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-100 to-blue-50 text-center px-6 py-10 text-gray-900 select-none"
            style={{ fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
            {showSurprise && (
                <Confetti width={width} height={height} numberOfPieces={400} recycle={false} />
            )}
            {emojiRain && <EmojiRain />}

            {/* Main heading */}
            <div className="relative w-full flex items-center justify-center py-10">
                {/* Background Image */}
                <img
                    src={image}
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
                />
                <motion.h1
                    className="text-5xl sm:text-7xl font-extrabold mb-8 text-pink-600 drop-shadow-lg leading-relaxed z-10 text-center px-4"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{
                        fontFamily: "'Alex Brush', cursive",
                        textDecoration: "none",
                        animation: "floating 4s ease-in-out infinite"
                    }}
                >
                    Happy Birthday Divu, My Beautiful Love 💖😘🥳
                </motion.h1>
            </div>
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
            <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl sm:text-3xl font-semibold text-center mb-6 
                 bg-gradient-to-r from-red-500 via-red-400 to-pink-500 
                 text-transparent bg-clip-text"
                style={{ fontFamily: "'Dancing Script', cursive" }}
            >    <span>
                    Lo ab pyar se Divya special smile karo or ise touch karo.
                </span>
            </motion.h3>
            <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block text-white font-bold py-3 px-12 rounded-full shadow-lg
                 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600
                 hover:from-pink-500 hover:via-pink-600 hover:to-pink-700
                 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-pink-300"
                style={{
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(255, 105, 180, 0.4)",
                }}
            >
                <span className="relative z-10">😊 Touch with Smile</span>
                {/* Glow animation */}
                <span className="absolute inset-0 rounded-full bg-pink-400 opacity-30 blur-lg animate-pulse"></span>
            </motion.button>
        </div>
    );
}

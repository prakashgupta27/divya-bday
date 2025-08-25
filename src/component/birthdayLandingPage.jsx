import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import image from "../../public/image/SingleImage.jpeg";
import { useNavigate } from "react-router-dom";
import Image from "../../public/image/image1.png";
import "@fontsource/dancing-script";
import "@fontsource/playfair-display";
import "@fontsource/alex-brush";
import HBD from "../../public/image/hbd.png";
import CoverPhoto1 from "../../public/image/CoverPhoto1.jpeg";
import CoverPhoto2 from "../../public/image/CoverPhoto2.jpeg";
import CoverPhoto3 from "../../public/image/CoverPhoto3.jpeg";
import CoverPhoto4 from "../../public/image/CoverPhoto4.jpeg";
import CoverPhoto5 from "../../public/image/CoverPhoto5.jpeg";
import CoverPhoto6 from "../../public/image/CoverPhoto6.jpeg";
import Friends from "../../public/image/friends.jpeg"
import DadaDadi from "../../public/image/DadaDadi.jpeg"
import Bhai from "../../public/image/bhai.jpeg"
import Didi from "../../public/image/didi.jpeg"


import "@fontsource/dancing-script";

import { FaHeart, FaLeaf, FaRegKissWinkHeart } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import ImageComponet from "./ImageComponent";
import PhotoCard from "./PhotoCard";
import FlowerRain from "./FlowerRain";

const photos = [
    { image: DadaDadi, caption: "Happy birthday Apne Pariwar ki sabse Achi beti Divya ko 🥰" },
    { image: Bhai, caption: "Happy birthday Papa ki ladli beti ko Divu beta ko😍" },
    { image: Bhai, caption: "Happy birthday Ek achi Didi ko 😉" },
    { image: Didi, caption: "Happy birthday Ek achi Didi ko " },
    { image: Friends, caption: "Happy birthday Sabse achi dost ko 🫂" },
    // { image: Image, caption: "Happy birthday Naresh ki friend ko 😏" },
    { image: Friends, caption: "Happy birthday Ek dosti nibhane wali Divya ko ✌️" },
    { image: Image, caption: "Happy Birthday mummy ki pyari beti ko ❤️" },
    { image: Image, caption: "Happy birthday Duniya ki sabse Sundar ladki ko 🤩" },
    { image: Image, caption: "Happy birthday pyar ko pyar se nibanne wali Divya ko 🥺" }
];  


// const EmojiRain = () => {
//     const { width, height } = useWindowSize();
//     const [active, setActive] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => setActive(false), 6000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
//             {active &&
//                 Array.from({ length: 50 }).map((_, i) => {
//                     const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
//                     const left = Math.random() * width;
//                     const delay = Math.random() * 5;
//                     const duration = 4 + Math.random() * 3;
//                     const size = 24 + Math.random() * 24;

//                     return (
//                         <motion.div
//                             key={i}
//                             initial={{ y: -50, x: left, opacity: 0 }}
//                             animate={{ y: height + 50, opacity: [0, 1, 1, 0] }} // fade in → fall → fade out
//                             transition={{
//                                 duration: duration,
//                                 delay: delay,
//                                 ease: "linear",
//                             }}
//                             style={{
//                                 position: "absolute",
//                                 fontSize: `${size}px`,
//                             }}
//                         >
//                             {randomEmoji}
//                         </motion.div>
//                     );
//                 })}
//         </div>
//     );
// };


// const BalloonEvents = ({ count = 10 }) => {
//   const [balloons, setBalloons] = useState([]);

//   useEffect(() => {
//     const temp = Array.from({ length: count }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 90,
//       delay: Math.random() * 5,
//       color: colors[Math.floor(Math.random() * colors.length)],
//     }));
//     setBalloons(temp);
//   }, [count]);

//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden">
//       {balloons.map((b) => (
//         <Balloon key={b.id} x={b.x} delay={b.delay} color={b.color} />
//       ))}
//     </div>
//   );
// };


export default function BirthdaySurprise() {
    const { width, height } = useWindowSize();
    const [showSurprise, setShowSurprise] = useState(false);
    const [emojiRain, setEmojiRain] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [cp, setCp] = useState(null);
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const navigate = useNavigate();

    const images = [
        { src: CoverPhoto1, text: "तुम हो तो सुबह नई है ❤️" },
        { src: CoverPhoto2, text: "तुम हो तो शामें हसीन हैं 🧡" },
        { src: CoverPhoto3, text: "एक दुनिया सपनों सी है 💙" },
        { src: CoverPhoto4, text: "तुम हो तो इस पे यकीन है 💚" },
        { src: CoverPhoto5, text: "तुम हो तो सब अच्छा है 💛" },
        { src: CoverPhoto6, text: "तुम हो तो वक्त थमा है 🤎" },
    ];

    useEffect(() => {
        setShowSurprise(true);
    }, []);

    useEffect(() => {
        setEmojiRain(true);
        const rainTimer = setTimeout(() => {
            setEmojiRain(false);
            setShowPopup(true);
        }, 6000);
        const popupTimer = setTimeout(() => {
            setShowPopup(false);
        }, 9000);

        return () => {
            clearTimeout(rainTimer);
            clearTimeout(popupTimer);
        };
    }, []);

    const handleClick = () => {
        setShowSurprise(true);
        navigate("/its_Your_birthday");
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-50 via-rose-100 to-blue-50 text-center px-6 py-6 text-gray-900 select-none"
            style={{ fontFamily: "'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
        >
            {showSurprise && (
                <>
                    {/* <Confetti width={width} height={height} numberOfPieces={200} recycle={false} /> */}
                    <FlowerRain />
                </>
            )}

            <ImageComponet images={images} />
            <img src={HBD} alt="hbd" loading="lazy" style={{ textDecoration: "none", paddingTop: "20px" }} />

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
                </motion.p>
            </motion.p>
            <PhotoCard photos={photos} />

            {/* Personal messages */}
            <motion.div
                className="relative max-w-3xl mx-auto px-6 sm:px-10 py-1 mb-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-br from-pink-200 via-blue-100 to-white rounded-3xl" />
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-2xl sm:text-3xl font-semibold text-center mb-6 
                 bg-gradient-to-r from-red-500 via-red-400 to-pink-500 
                 text-transparent bg-clip-text"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    🖤 I love you Divya 🤍
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl leading-relaxed text-center text-gray-800 tracking-wide"
                    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 500 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    From the moment you came into my life, from the moment you became mine,
                    your love has made me feel so truly special. I know I may not be worthy of your love,
                    yet you trusted me, gave me your love, and stood by my side.<br />
                </motion.p>
            </motion.div>

            <motion.div
                className="max-w-3xl mx-auto px-4 py-1 bg-pink-50 rounded-3xl shadow-md mb-15"
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

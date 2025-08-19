import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ images }) => {
    const [index, setIndex] = useState(0);

    // Auto-change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <div className="relative w-full flex items-center justify-center py-10 min-h-[550px] rounded-2xl overflow-hidden border-4 border-pink-300/70">
                {/* Background Images */}
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out`}
                        style={{
                            backgroundImage: `url(${img.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            opacity: index === i ? 1 : 0,
                        }}
                    />
                ))}
                {images.map((img, i) => (
                    <span style={{ paddingTop: "200px" }}>
                        <motion.div
                            key={i + "-text"}
                            className="absolute inset-0 flex items-center justify-center text-center px-4"
                            style={{
                                paddingTop:"470px",
                                opacity: index === i ? 1 : 0,
                                transition: "opacity 1s ease-in-out",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={index === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="bg-pink-50/80 px-6 py-3 rounded-2xl shadow-lg">
                                <p className="font-['Dancing Script',cursive] text-xl md:text-2xl font-semibold text-[#d6336c] italic">
                                    {img.text}
                                </p>
                            </div>
                        </motion.div>
                    </span>
                ))}

            </div>

            <span className="block font-['Dancing Script',cursive] text-[10px] text-green-900 text-center bg-pink-200/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                🌹 27 August — The Day My Heart Found Its Home 🌹
            </span>
        </>
    );
};

export default ImageComponent;

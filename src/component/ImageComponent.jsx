import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ImageComponent = ({ images }) => {
    const [index, setIndex] = useState(0);

    // Auto-change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
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

                {/* Text Overlay */}
                {images.map((img, i) => (
                    <div
                        key={i + "-text"}
                        className="absolute bottom-6 left-3/4 transform -translate-x-1/2 pl-2.5"
                        style={{
                            opacity: index === i ? 1 : 0,
                            transform:
                                index === i
                                    ? "translate(-50%, 0)"
                                    : "translate(-50%, 20px)",
                            transition:
                                "opacity 1s ease-in-out, transform 1s ease-in-out",
                        }}
                    >
                        <motion.div
                            className="max-w-3xl mx-auto px-4 py-1 bg-pink-50 rounded-3xl shadow-md mb-15"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{ textDecoration: "none", fontStyle: "italic", color: "#d6336c" }}
                        >
                            <p>{img.text}</p>
                        </motion.div>
                    </div>
                ))}
            </div>

            <span className="block font-['Dancing Script',cursive] text-[10px] text-green-900 text-center bg-pink-200/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                🌹 27 August — The Day My Heart Found Its Home 🌹
            </span>
        </>
    );
};

export default ImageComponent;

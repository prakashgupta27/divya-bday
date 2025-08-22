import { Heart } from "lucide-react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const FlowerRain = () => {
    return (
        <div>
            {
                [...Array(22)].map((_, i) => (
                    <>
                    <motion.div
                        key={`heart-${i}`}
                        className="absolute text-pink-400/60"
                        initial={{ y: "30vh", x: Math.random() * window.innerWidth }}
                        animate={{ y: -100, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    >
                        <Heart size={26} fill="pink" className="drop-shadow-md" />
                    </motion.div>
                    </>
                ))
            }
        </div>
    )
};


export default FlowerRain;

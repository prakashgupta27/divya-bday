import { motion } from "framer-motion";
import WishCard from "./Card";
import { useCallback } from "react";

const PhotoCard = ({ photos }) => {
  const renderWishCard = useCallback(
    (src, index) => (
      <WishCard key={index} image={src.image} caption={src.caption} />
    ),
    []
  );

  return (
    <>
      <motion.p
        className="text-3xl sm:text-3xl leading-relaxed text-center text-gray-800 tracking-wide p-b: 90px"
        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        This birthday is not only yours, it is also for all those for whom you are special. They all want Divya to always stay happy.<br /><br />
      </motion.p>
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-14 max-w-6xl mx-auto"
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
          {photos.map((src, index) => renderWishCard(src, index))}
        </div>
      </motion.div>
    </>
  );
};

export default PhotoCard;

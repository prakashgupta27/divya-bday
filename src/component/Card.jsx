import { motion } from "framer-motion";

const WishCard = ({ index, image, caption }) => {
  return (
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
        <motion.div
          key={index}
          className="flex flex-col items-center justify-between p-4 rounded-3xl shadow-lg border border-pink-200 bg-gradient-to-br from-pink-50/70 to-blue-50/70 backdrop-blur-md transition-all hover:scale-105 hover:shadow-2xl"
          style={{ width: "380px", height: "360px" }}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Container */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ height: "220px", width: "100%" }}
          >
            <img
              src={image}
              alt={`Memory ${index + 1}`}
              className="object-cover w-full h-full cursor-pointer transition-all duration-500 hover:scale-110 hover:brightness-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-200/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Caption */}
          <motion.h5
            className="flex items-center justify-center text-center text-pink-700 text-lg sm:text-xl font-semibold drop-shadow-sm px-2 leading-snug"
            style={{
              fontFamily: "'Dancing Script', cursive",
              minHeight: "60px",
              maxHeight: "60px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {caption}
          </motion.h5>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WishCard;

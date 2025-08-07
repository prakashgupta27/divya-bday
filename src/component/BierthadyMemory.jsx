function BirthdayMemory(){
    return(
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
    )
}

export default BirthdayMemory;
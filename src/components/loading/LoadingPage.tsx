
import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-pink-100">
            {/* Brush Animation */}
            <div className="relative w-40 h-40 flex items-center justify-center">
                <motion.div
                    className="absolute w-10 h-10 bg-indigo-500 rounded-full mix-blend-multiply filter shadow-3xl drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    animate={{
                        x: [0, 60, -60, 0],
                        y: [0, -60, 60, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute w-10 h-10 bg-pink-500 rounded-full mix-blend-multiply filter shadow-3xl drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    animate={{
                        x: [0, -60, 60, 0],
                        y: [0, 60, -60, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
                <motion.div
                    className="absolute w-10 h-10 bg-purple-500 rounded-full mix-blend-multiply filter shadow-3xl drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                    animate={{
                        x: [0, 40, -40, 0],
                        y: [0, 40, -40, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
         
            </div>

            {/* Text Animation */}
            <motion.h1
                className="text-3xl font-semibold text-gray-700 mt-10"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                Loading...
            </motion.h1>
        </div>
    );
};

export default LoadingPage;
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center">
      <div
        className="
      px-10 py-3
      rounded-2xl
      bg-black/20 dark:bg-white/5
      backdrop-blur-sm
      shadow-md
    "
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100"
          >
            {t(title)}
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mt-4 mx-auto rounded-full bg-gray-800 dark:bg-gray-200"
          />
        </div>
      </div>
    </div>
    // <div className='text-center'>
    //     <motion.h2
    //         initial={{ opacity: 0, y: 40 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8, ease: "easeOut" }}
    //         viewport={{ once: true }}
    //         className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-700 dark:text-gray-200 drop-shadow-lg"
    //     >
    //         {/* Explore Our Menu */}
    //         {t(title)}
    //     </motion.h2>

    //     {/* Soft underline animation */}
    //     <motion.div
    //         initial={{ width: 0, opacity: 0 }}
    //         whileInView={{ width: "5rem", opacity: 1 }}
    //         transition={{ duration: 0.6, delay: 0.3 }}
    //         viewport={{ once: true }}
    //         className="h-1 mt-4 mx-auto rounded-full bg-gray-700 dark:bg-gray-200 shadow-md"
    //     />
    // </div>
  );
};

export default Title;

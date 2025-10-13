import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
interface MainCategoriesHeaderProps {
    // Add any props if needed in the future
    children: React.ReactNode;
}
const MainCategoriesHeader: React.FC<MainCategoriesHeaderProps> = ({ children }) => {
    const {t} = useTranslation();
    return (
   <div>
      <section className="py-16 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">

          {/* Elegant Animated Title */}
         {/* Elegant Single-Color Title with Shadow */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-600 drop-shadow-lg"
          >
            {/* Explore Our Menu */}
            {t("EXPLORE_OUR_MENU")}
          </motion.h2>

          {/* Soft underline animation */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mt-4 mx-auto rounded-full bg-amber-600 shadow-md"
          />

          {/* Subtle subtitle
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-lg max-w-xl mx-auto"
          >
            Taste the warmth of every dish made with passion 🍴
          </motion.p> */}

          <div className="mt-12">{children}</div>
        </div>
      </section>
    </div>
    )
}

export default MainCategoriesHeader

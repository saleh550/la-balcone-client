import React from 'react'
// import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';
import Title from '../customs/Title';
interface MainCategoriesHeaderProps {
  // Add any props if needed in the future
  children: React.ReactNode;
}
const MainCategoriesHeader: React.FC<MainCategoriesHeaderProps> = ({ children }) => {
  // const { t } = useTranslation();
  return (
    <div>
      <section className="py-16 bg-gradient-to-b  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">

          {/* Elegant Animated Title */}
          {/* Elegant Single-Color Title with Shadow */}
          {/* <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-600 drop-shadow-lg"
          >
            {t("EXPLORE_OUR_MENU")}
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mt-4 mx-auto rounded-full bg-amber-600 shadow-md"
          /> */}
          <Title title={"EXPLORE_OUR_MENU"} />


          <div className="mt-12">{children}</div>
        </div>
      </section>
    </div>
  )
}

export default MainCategoriesHeader

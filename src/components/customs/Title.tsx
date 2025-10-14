import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface TitleProps {
    title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
    const { t } = useTranslation();
    return (
        <div className='text-center'>
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-amber-600 drop-shadow-lg"
            >
                {/* Explore Our Menu */}
                {t(title)}
            </motion.h2>

            {/* Soft underline animation */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "5rem", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 mt-4 mx-auto rounded-full bg-amber-600 shadow-md"
            />
        </div>
    )
}

export default Title

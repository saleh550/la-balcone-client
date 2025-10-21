import { motion } from 'framer-motion'
import React from 'react'
import type { MainCategoryType } from '../../types/types';
import { useLanguage } from '../../store/useLanguage';
import { getName } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
interface MainCategoriesCardProps {
    cat: MainCategoryType;
    index: number;
}
const MainCategoriesCard: React.FC<MainCategoriesCardProps> = ({ cat, index }) => {
    const { currentLanguage } = useLanguage();
    const navigate = useNavigate();
    const onCardClick = () => {
        //navigate to menu items page with category id
        navigate(`/menu-items/${cat.id}`);
    }
    return (
        <div onClick={onCardClick} data-aos="fade-up" data-aos-delay={(index * 200).toString()} >

            <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
                <img
                    src={`${baseURL}${cat.image}`}
                    alt={getName(currentLanguage, cat)}
                    className="w-full h-36 sm:h-48 md:h-56 object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute bottom-3 text-start px-4 w-full">
                    <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                        {getName(currentLanguage, cat)}
                    </h3>
                </div>
            </motion.div>
        </div>
    )
}

export default MainCategoriesCard

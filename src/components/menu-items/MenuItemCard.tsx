import React from 'react'
import { motion } from "framer-motion";
import type { MenuItemType } from '../../types/types';
import { useLanguage } from '../../store/useLanguage';
import { getDescription, getName } from '../../utils/utils';
import { useSubCategories } from '../../store/useSubCategories';
import FadeOnMount from '../customs/animations/FadeOnMount';
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
interface MenuItemCardProps {
    item: MenuItemType
    index: number
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index,
    setIsOpen }) => {
    const { setSelectedMenuItem } = useSubCategories();
    const { currentLanguage } = useLanguage();
    const onItemClick = () => {
        setSelectedMenuItem(item);
        setIsOpen(true);
    };
    if (item == null) return null;

    return (
        <FadeOnMount index={index} animation={currentLanguage!='en'?"fade-left":"fade-right"}>
            <div onClick={onItemClick} >

                <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex h-[120px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    {/* Image Section */}
                    <div className="w-1/3 h-full overflow-hidden">
                        <img
                            src={`${baseURL}${item.image}`}
                            alt={item.englishName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Info Panel */}
                    <div className="w-2/3 h-full flex flex-col justify-center px-3 py-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 truncate">
                            {getName(currentLanguage, item)}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{getDescription(currentLanguage, item)}</p>
                        <p className="text-base font-bold text-white mt-1">
                            ₪{item.price.toFixed(2)}
                        </p>
                    </div>
                </motion.div>
            </div>
        </FadeOnMount>
    )
}

export default MenuItemCard

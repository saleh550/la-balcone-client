import React from 'react'
import { motion } from "framer-motion";
import type { MenuItemType } from '../../types/types';
import { useLanguage } from '../../store/useLanguage';
import { getDescription, getName } from '../../utils/utils';
import { useSubCategories } from '../../store/useSubCategories';
interface MenuItemCardProps {
    item: MenuItemType
    index: number
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index,
    setIsOpen }) => {
        const {setSelectedMenuItem} = useSubCategories();
    const { currentLanguage } = useLanguage();
    const onItemClick = () => {
        setSelectedMenuItem(item);
        setIsOpen(true);
    };
    return (
        <div onClick={onItemClick} data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"} data-aos-delay={(index + 1) * 200}>

            <motion.div
                key={item.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-[120px] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
                {/* Image Section */}
                <div className="w-1/3 h-full overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.englishName}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info Panel */}
                <div className="w-2/3 h-full flex flex-col justify-center px-3 py-2">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">
                        {getName(currentLanguage, item)}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{getDescription(currentLanguage, item)}</p>
                    <p className="text-base font-bold text-gray-900 mt-1">
                        ₪{item.price.toFixed(2)}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default MenuItemCard

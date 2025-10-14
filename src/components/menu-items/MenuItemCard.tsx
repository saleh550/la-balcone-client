import React from 'react'
import { motion } from "framer-motion";
import type { MenuItemType } from '../../types/types';
import { useLanguage } from '../../store/useLanguage';
interface MenuItemCardProps {
    item: MenuItemType
    index: number
}
const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, index }) => {
    const { currentLanguage } = useLanguage();
    return (
        <div data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"} data-aos-delay={(index+1) * 200}>

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
                    <h3 className="font-semibold text-lg text-gray-800 truncate">
                        {item.englishName}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                    <p className="text-base font-bold text-gray-900 mt-1">
                        ₪{item.price.toFixed(2)}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default MenuItemCard

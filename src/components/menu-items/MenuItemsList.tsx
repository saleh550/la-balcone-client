import { useEffect, useState, type FC } from 'react'
import { useParams } from 'react-router-dom';
import MenuItemCard from './MenuItemCard';
import { useLanguage } from '../../store/useLanguage';
import { useSubCategories } from '../../store/useSubCategories';
import { getActiveSubCategories } from '../../utils/apisUtils';

interface MenuItemsListProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuItemsList: FC<MenuItemsListProps> = ({ isOpen
    , setIsOpen }) => {
    const { id } = useParams<{ id: string }>();
    const [_isLoading, setIsLoading] = useState(false)
    // const { categories } = useMainCategories();
    const { subCategories, menuItems, setMenuItems, setSubCategories } = useSubCategories();
    const { currentLanguage } = useLanguage()
    useEffect(() => {
        const fun = async () => {
            if (id)
                await getActiveSubCategories(setSubCategories, setIsLoading, id)
        }
        fun()
    }, [id]);
    useEffect(() => {
        if (subCategories) {
            const allItems = subCategories.flatMap((sub) => sub.menuItems);
            setMenuItems(allItems);
        }
    }, [subCategories]);

    return (
        <div data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {menuItems?.map((item, index) => (
                <MenuItemCard isOpen={isOpen}
                    setIsOpen={setIsOpen} key={item.id} item={item} index={index} />
            ))}

        </div>
    )
}

export default MenuItemsList

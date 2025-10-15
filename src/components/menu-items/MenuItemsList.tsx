import { useEffect, type FC } from 'react'
import { useParams } from 'react-router-dom';
import { useMainCategories } from '../../store/useMainCategories';
import MenuItemCard from './MenuItemCard';
import { useLanguage } from '../../store/useLanguage';
import { useSubCategories } from '../../store/useSubCategories';

interface MenuItemsListProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const MenuItemsList: FC<MenuItemsListProps> = ({ isOpen
    , setIsOpen }) => {
    const { id } = useParams<{ id: string }>();
    const { categories } = useMainCategories();
    const { subCategories, menuItems, setMenuItems, setSubCategories } = useSubCategories();
    const { currentLanguage } = useLanguage()
    useEffect(() => {
        const category = categories.find(cat => cat.id === id);
        if (category) {
            const filteredSubCategories = subCategories.filter(
                (subCat) => subCat.categoryId === id
            );
            setSubCategories(filteredSubCategories);
            const allItems = filteredSubCategories.flatMap((sub) => sub.menuItems);
            setMenuItems(allItems);
        }
    }, [id]);
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

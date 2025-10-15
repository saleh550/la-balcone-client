import { useEffect, useState, type FC } from 'react'
import MenuItemsList from '../components/menu-items/MenuItemsList';
import Title from '../components/customs/Title';
import { useParams } from 'react-router-dom';
import { useMainCategories } from '../store/useMainCategories';
import { useLanguage } from '../store/useLanguage';
import { getName } from '../utils/utils';
import type { MainCategoryType } from '../types/types';
import GoBackButton from '../components/customs/GoBackButton';
import Modal from '../components/customs/modals/Modal';
import MenuItemDetails from '../components/menu-items/MenuItemDetails';
import { useSubCategories } from '../store/useSubCategories';
interface MenuItemsProps {

}

const MenuItems: FC<MenuItemsProps> = () => {
  const { id } = useParams();
  const { categories } = useMainCategories();
  const [category, setCategory] = useState<MainCategoryType>();
  const { selectedMenuItem } = useSubCategories();
  const { currentLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (id) {
      const currentCategory = categories.find(cat => cat.id === id);
      if (currentCategory) {
        setCategory(currentCategory);
      }
    }
  }, [id])
  return (<>
    <GoBackButton />
    {category && <Title title={getName(currentLanguage, category)} />}
    <MenuItemsList isOpen={isOpen} setIsOpen={
      setIsOpen} />
    <Modal title={selectedMenuItem && getName(currentLanguage, selectedMenuItem)} isOpen={isOpen} setIsOpen={setIsOpen}>
      <MenuItemDetails />
    </Modal>
  </>
  )
}

export default MenuItems

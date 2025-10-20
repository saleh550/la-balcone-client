
import { useTranslation } from 'react-i18next'
import GoBackButton from '../../../components/customs/buttons/GoBackButton'
import { useLanguage } from '../../../store/useLanguage'
import MIManagementHeader from '../components/menu-items/MIManagementHeader'
import { useState } from 'react'
import MIManagementList from '../components/menu-items/MIManagementList'
import Modal from '../../../components/customs/modals/Modal'
import AddNewMenuItemForm from '../components/menu-items/forms/AddNewMenuItemForm'
import AddSubCategoryForm from '../components/sub-categories/AddSubCategoryForm'

const MenuItemsManagement = () => {
    const { t } = useTranslation()
    const [isAddMenuItemModalOpen, setIsAddMenuItemModalOpen] = useState(false)
    const [isAddSubCategoryModalOpen, setIsAddSubCategoryModalOpen] = useState(false)

    const { currentLanguage } = useLanguage()
    return (
        <div data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"}>
            <GoBackButton />
            <MIManagementHeader />
            <div className="p-2 flex ">
                <button onClick={() => setIsAddMenuItemModalOpen(true)} className="mb-4 px-4 py-2 mx-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    {t("ADD_NEW_MENU_ITEM")}
                </button>
                <button onClick={() => setIsAddSubCategoryModalOpen(true)} className="mb-4 px-4  mx-1 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
                    {t("ADD_NEW_SUB_CATEGORY")}
                </button>
            </div>
            <MIManagementList />
            <Modal title={t("ADD_MENU_ITEM_FORM_TITLE")} isOpen={isAddMenuItemModalOpen} setIsOpen={setIsAddMenuItemModalOpen}>
                <AddNewMenuItemForm setIsAddMenuItemModalOpen={setIsAddMenuItemModalOpen} />
            </Modal>
            <Modal title={t("ADD_SUB_CATEGORY_FORM_TITLE")} isOpen={isAddSubCategoryModalOpen} setIsOpen={setIsAddSubCategoryModalOpen}>
                <AddSubCategoryForm setIsAddSubCategoryModalOpen={setIsAddSubCategoryModalOpen} />
            </Modal>

        </div>
    )
}

export default MenuItemsManagement

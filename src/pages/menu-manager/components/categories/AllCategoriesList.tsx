// import React from 'react'
import { useState } from 'react';
import { useMenuManager } from '../../../../store/useMenuManager'
// import { ca } from 'zod/v4/locales'
import AllCategoriesCard from './AllCategoriesCard'
import Modal from '../../../../components/customs/modals/Modal';
import EditCategoryForm from './forms/EditCategoryForm';
import { useTranslation } from 'react-i18next';
import { getName } from '../../../../utils/utils';
import { useLanguage } from '../../../../store/useLanguage';
import DeleteCategoryForm from './forms/DeleteCategoryForm';
import { removeCategory } from '../../../../utils/apisUtils';

const AllCategoriesList = () => {
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage()
    const { categories, editingCategory, deletingCategory, deleteCategory } = useMenuManager()
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
    const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
    const onConfirmDelete = async () => {
        if (deletingCategory) {
            await removeCategory(deleteCategory, setIsDeleteLoading, setIsDeleteCategoryModalOpen, deletingCategory.id)
        }
    }
    const onCancelDelete = async () => {
        setIsDeleteCategoryModalOpen(false)

    }
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-1">
                {categories.map((category, index) => (
                    <AllCategoriesCard key={category.englishName} category={category} index={index} setIsEditFormOpen={setIsEditCategoryModalOpen} setIsDeleteCategoryModalOpen={setIsDeleteCategoryModalOpen} />
                ))}
            </div>
            {editingCategory && <Modal title={`${t("EDIT_CATEGORY_FORM_TITLE")} : ${getName(currentLanguage, editingCategory)}`} isOpen={isEditCategoryModalOpen} setIsOpen={setIsEditCategoryModalOpen}>
                <EditCategoryForm setIsEditCategoryModalOpen={setIsEditCategoryModalOpen} />
            </Modal>}

            {deletingCategory && <Modal title={`${t("DELETE_CATEGORY_TITLE")} : ${getName(currentLanguage, deletingCategory)}`} isOpen={isDeleteCategoryModalOpen} setIsOpen={setIsDeleteCategoryModalOpen}>
                <DeleteCategoryForm isDeleteLoading={isDeleteLoading} onCancel={onCancelDelete} onConfirm={onConfirmDelete} />
            </Modal>}

        </div>
    )
}

export default AllCategoriesList

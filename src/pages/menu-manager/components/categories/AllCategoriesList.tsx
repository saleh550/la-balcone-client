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

const AllCategoriesList = () => {
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage()
    const { categories, editingCategory } = useMenuManager()
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-1">
                {categories.map((category, index) => (
                    <AllCategoriesCard key={category.englishName} category={category} index={index} setIsEditFormOpen={setIsEditFormOpen} />
                ))}
            </div>
            {editingCategory && <Modal title={`${t("EDIT_CATEGORY_FORM_TITLE")} : ${getName(currentLanguage, editingCategory)}`} isOpen={isEditFormOpen} setIsOpen={setIsEditFormOpen}>
                <EditCategoryForm />
            </Modal>}

        </div>
    )
}

export default AllCategoriesList

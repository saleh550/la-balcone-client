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
import { publishCategory, removeCategory, unPublishCategory } from '../../../../utils/apisUtils';
import PublishCategoryForm from './forms/PublishCategoryForm';
import UnPublishCategoryForm from './forms/UnPublishCategoryForm';

const AllCategoriesList = () => {
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage()
    const { categories, editingCategory, deletingCategory, deleteCategory, editCategory } = useMenuManager()
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [isPublishLoading, setIsPublishLoading] = useState(false)
    const [isUnPublishLoading, setIsUnPublishLoading] = useState(false)
    const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
    const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
    const [isUnPublishModalOpen, setIsUnPublishModalOpen] = useState(false);
    const onConfirmDelete = async () => {
        if (deletingCategory) {
            await removeCategory(deleteCategory, setIsDeleteLoading, setIsDeleteCategoryModalOpen, deletingCategory.id)
        }
    }
    const onConfirmPublish = async () => {
        if (editingCategory) {
            // await removeCategory(deleteCategory, setIsDeleteLoading, setIsDeleteCategoryModalOpen, deletingCategory.id)
            try {
                await publishCategory(editCategory, setIsPublishLoading, setIsPublishModalOpen, editingCategory.id)
            } catch (error) {
                console.log(error);
            }

        }
    }
    const onConfirmUnPublish = async () => {
        if (editingCategory) {
            // await removeCategory(deleteCategory, setIsDeleteLoading, setIsDeleteCategoryModalOpen, deletingCategory.id)
            try {
                await unPublishCategory(editCategory, setIsUnPublishLoading, setIsUnPublishModalOpen, editingCategory.id)
            } catch (error) {
                console.log(error);
            }

        }
    }
    const onCancelDelete = async () => {
        setIsDeleteCategoryModalOpen(false)
        setIsPublishModalOpen(false)
        setIsUnPublishModalOpen(false)

    }
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-1">
                {categories.map((category, index) => (
                    <AllCategoriesCard key={category.englishName} category={category} index={index} setIsEditFormOpen={setIsEditCategoryModalOpen} setIsDeleteCategoryModalOpen={setIsDeleteCategoryModalOpen}
                        setIsPublishModalOpen={setIsPublishModalOpen}
                        setIsUnPublishModalOpen={setIsUnPublishModalOpen} />
                ))}
            </div>
            {editingCategory && <Modal title={`${t("EDIT_CATEGORY_FORM_TITLE")} : ${getName(currentLanguage, editingCategory)}`} isOpen={isEditCategoryModalOpen} setIsOpen={setIsEditCategoryModalOpen}>
                <EditCategoryForm setIsEditCategoryModalOpen={setIsEditCategoryModalOpen} />
            </Modal>}

            {deletingCategory && <Modal title={`${t("DELETE_CATEGORY_TITLE")} : ${getName(currentLanguage, deletingCategory)}`} isOpen={isDeleteCategoryModalOpen} setIsOpen={setIsDeleteCategoryModalOpen}>
                <DeleteCategoryForm isDeleteLoading={isDeleteLoading} onCancel={onCancelDelete} onConfirm={onConfirmDelete} />
            </Modal>}
            {editingCategory && <Modal title={`${t("PUBLISH_CATEGORY_TITLE")} : ${getName(currentLanguage, editingCategory)}`} isOpen={isPublishModalOpen} setIsOpen={setIsPublishModalOpen}>
                <PublishCategoryForm isPublishLoading={isPublishLoading} onCancel={onCancelDelete} onConfirm={onConfirmPublish} />
            </Modal>}
            {editingCategory && <Modal title={`${t("UNPUBLISH_CATEGORY_TITLE")} : ${getName(currentLanguage, editingCategory)}`} isOpen={isUnPublishModalOpen} setIsOpen={setIsUnPublishModalOpen}>
                <UnPublishCategoryForm isUnPublishLoading={isUnPublishLoading} onCancel={onCancelDelete} onConfirm={onConfirmUnPublish} />
            </Modal>}
        </div>
    )
}

export default AllCategoriesList

// import React from 'react'
import { useEffect, useState } from 'react';
import { useMenuManager } from '../../../../store/useMenuManager'
// import { ca } from 'zod/v4/locales'
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../../store/useLanguage';
import { getAllSubCategories, publishMenuItem, removeMenuItem, unPublishMenuItem } from '../../../../utils/apisUtils';
import MIManagementCard from './MIManagementCard';
import { useParams } from 'react-router-dom';
import type { MenuItemType } from '../../../../types/types';
import Modal from '../../../../components/customs/modals/Modal';
import { getName } from '../../../../utils/utils';
import EditMenuItemForm from './forms/EditMenuItemForm';
import DeleteMenuItemForm from './forms/DeleteMenuItemForm';
import PublishMenuItemForm from './forms/PublishMenuItemForm';
import UnPublishMenuItemForm from './forms/UnPublishMenuItemForm';


const MIManagementList = () => {
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage()
    const [menuItemsState, setMenuItemsState] = useState<MenuItemType[]>([])
    const { setSubCategories, subCategories, editingMenuItem, deletingMenuItem, deleteMenuItemFromSubCategory, editMenuItemInSubCategory } = useMenuManager()
    const [isFetchingLoading, setIsFetchingLoading] = useState(false)
    const [isDeleteLoading, setIsDeleteLoading] = useState(false)
    const [isPublishLoading, setIsPublishLoading] = useState(false)
    const [isUnPublishLoading, setIsUnPublishLoading] = useState(false)
    const [isEditItemModalOpen, setIsEditFormOpen] = useState(false);
    const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
    const [isUnPublishModalOpen, setIsUnPublishModalOpen] = useState(false);
    const { categoryId } = useParams()
    useEffect(() => {
        if (categoryId) {
            const fun = async () => {
                await getAllSubCategories(setSubCategories, setIsFetchingLoading, categoryId)
            }
            fun()
        }
    }, [categoryId])
    useEffect(() => {
        if (subCategories && subCategories.length > 0) {
            // Flatten all menuItems arrays into one list
            const allMenuItems = subCategories.flatMap(sub => sub.menuItems || []);
            setMenuItemsState(allMenuItems);
        } else {
            setMenuItemsState([]);
        }
    }, [subCategories])
    const onConfirmDelete = async () => {
        if (deletingMenuItem) {
            await removeMenuItem(deleteMenuItemFromSubCategory, setIsDeleteLoading, setIsDeleteItemModalOpen, deletingMenuItem.id)
        }

    }
    const onConfirmPublish = async () => {
        if (editingMenuItem) {
            try {
                await publishMenuItem(editMenuItemInSubCategory, setIsPublishLoading, setIsPublishModalOpen, editingMenuItem.id)
            } catch (error) {
                console.log(error);
            }

        }
    }
    const onConfirmUnPublish = async () => {
        if (editingMenuItem) {
            // await removeCategory(deleteCategory, setIsDeleteLoading, setIsDeleteCategoryModalOpen, deletingCategory.id)
            try {
                await unPublishMenuItem(editMenuItemInSubCategory, setIsUnPublishLoading, setIsUnPublishModalOpen, editingMenuItem.id)
            } catch (error) {
                console.log(error);
            }

        }
    }
    const onCancel = async () => {
        setIsDeleteItemModalOpen(false)
        setIsPublishModalOpen(false)
        setIsUnPublishModalOpen(false)

    }
    if (isFetchingLoading) return <p>Loading....</p>
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-1">
                {menuItemsState.map((item, index) => (
                    <MIManagementCard
                        item={item}
                        index={index}
                        setIsEditFormOpen={setIsEditFormOpen}
                        setIsDeleteItemModalOpen={setIsDeleteItemModalOpen}
                        setIsPublishModalOpen={setIsPublishModalOpen}
                        setIsUnPublishModalOpen={setIsUnPublishModalOpen}
                    />
                ))}

            </div>
            {editingMenuItem && <Modal title={`${t("EDIT_MENU_ITEM_FORM_TITLE")} : ${getName(currentLanguage, editingMenuItem)}`} isOpen={isEditItemModalOpen} setIsOpen={setIsEditFormOpen}>
                <EditMenuItemForm setIsEditMenuItemModalOpen={setIsEditFormOpen} />
            </Modal>}

            {deletingMenuItem && <Modal title={`${t("DELETE_MENU_ITEM_TITLE")} : ${getName(currentLanguage, deletingMenuItem)}`} isOpen={isDeleteItemModalOpen} setIsOpen={setIsDeleteItemModalOpen}>
                <DeleteMenuItemForm isDeleteLoading={isDeleteLoading} onCancel={onCancel} onConfirm={onConfirmDelete} />
            </Modal>}

            {editingMenuItem && <Modal title={`${t("PUBLISH_MENU_ITEM_TITLE")} : ${getName(currentLanguage, editingMenuItem)}`} isOpen={isPublishModalOpen} setIsOpen={setIsPublishModalOpen}>
                <PublishMenuItemForm isPublishLoading={isPublishLoading} onCancel={onCancel} onConfirm={onConfirmPublish} />
            </Modal>}

            {editingMenuItem && <Modal title={`${t("UNPUBLISH_MENU_ITEM_TITLE")} : ${getName(currentLanguage, editingMenuItem)}`} isOpen={isUnPublishModalOpen} setIsOpen={setIsUnPublishModalOpen}>
                <UnPublishMenuItemForm isUnPublishLoading={isUnPublishLoading} onCancel={onCancel} onConfirm={onConfirmUnPublish} />
            </Modal>}
        </div>
    )
}

export default MIManagementList

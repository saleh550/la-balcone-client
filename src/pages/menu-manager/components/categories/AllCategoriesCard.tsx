import React, { type Dispatch, type SetStateAction } from 'react'
import type { MainCategoryType } from '../../../../types/types'
import { FaEdit, FaTrash } from "react-icons/fa";
import { getName } from '../../../../utils/utils';
import { useLanguage } from '../../../../store/useLanguage';
import { useTranslation } from 'react-i18next';
import { BiSolidDish } from "react-icons/bi";
import { useMenuManager } from '../../../../store/useMenuManager';
import { SwitchButton } from '../../../../components/customs/inputs/Switch';
import { Link } from 'react-router-dom';
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
interface AllCategoriesCardProps {
    category: MainCategoryType
    index: number
    setIsEditFormOpen: Dispatch<SetStateAction<boolean>>
    setIsDeleteCategoryModalOpen: Dispatch<SetStateAction<boolean>>
    setIsPublishModalOpen: Dispatch<SetStateAction<boolean>>
    setIsUnPublishModalOpen: Dispatch<SetStateAction<boolean>>
}
const AllCategoriesCard: React.FC<AllCategoriesCardProps> = ({ category, index, setIsEditFormOpen, setIsDeleteCategoryModalOpen, setIsPublishModalOpen,
    setIsUnPublishModalOpen }) => {
    const { currentLanguage } = useLanguage()
    const { setEditingCategory, setDeletingCategory } = useMenuManager()
    const { t } = useTranslation()
    const { englishName, arabicName, hebrewName, image, status, createdAt } =
        category;
    const isPublished = status === "active";
    const onEdit = () => {
        setIsEditFormOpen(true);
        setEditingCategory(category);
    }
    const onDelete = () => {
        setIsDeleteCategoryModalOpen(true);
        setDeletingCategory(category);
    }
    const onPublishToggle = () => {
        setEditingCategory(category);
        if (isPublished) {
            setIsUnPublishModalOpen(true)
        } else {
            setIsPublishModalOpen(true)
        }
    }
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 200}
            className="bg-white  shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={`${baseURL}${image}`}
                    alt={englishName}
                    className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="px-3 py-1 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center ">
                        {getName(currentLanguage, { englishName, arabicName, hebrewName })}
                    </h3>
                    <p className="text-sm text-gray-500 text-center">
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-3 ">
                    <Link
                        to={`/menu/maneger/items/${category.id}`}
                        // onClick={() =>
                        //   onTogglePublish?.(category.id, isPublished ? "pending" : "active")
                        // }
                        className={`flex justify-around items-center min-w-full  p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 border border-gray-500 `}
                        title={isPublished ? "Unpublish" : "Publish"}
                    >

                        <>
                            <span className='mx-1'>
                                {t("SHOW_ITEMS")}
                            </span>
                            <BiSolidDish />
                        </>

                    </Link>
                </div>

                <div className="flex justify-between mt-3 ">
                    <p className={`text-md  ${isPublished ? "text-green-700 font-semibold" : "text-gray-700 line-through"}`}>{t("PUBLISHED")}</p>
                    {/* {isPublished ? <>
                    </> : <>
                        <p>{t("UNPUBLISHED")}</p>
                    </>} */}

                    <SwitchButton isChecked={isPublished} onClick={onPublishToggle} />

                </div>
                <div className="flex justify-between mt-2 gap-2">
                    <button
                        onClick={onEdit}
                        className=" flex justify-around items-center w-full p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 border border-gray-500  transition"
                        title="Edit"
                    >
                        <span className='mx-1'>
                            {t("EDIT")}
                        </span>
                        <FaEdit className='' />
                    </button>

                    <button
                        // onClick={() => onDelete?.(category.id)}
                        onClick={onDelete}
                        className=" flex justify-around items-center w-full p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 border border-gray-500  transition"
                        title="Delete"
                    >
                        <span className='mx-1'>

                            {t("DELETE")}
                        </span>
                        <FaTrash />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default AllCategoriesCard

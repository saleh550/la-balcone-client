import React, { type Dispatch, type SetStateAction } from "react";
import type { MenuItemType } from "../../../../types/types";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getName } from "../../../../utils/utils";
import { useLanguage } from "../../../../store/useLanguage";
import { useTranslation } from "react-i18next";
import { useMenuManager } from "../../../../store/useMenuManager";
import { SwitchButton } from "../../../../components/customs/inputs/Switch";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

interface MenuItemsCardProps {
    item: MenuItemType;
    index: number;
    setIsEditFormOpen: Dispatch<SetStateAction<boolean>>;
    setIsDeleteItemModalOpen: Dispatch<SetStateAction<boolean>>;
    setIsPublishModalOpen: Dispatch<SetStateAction<boolean>>;
    setIsUnPublishModalOpen: Dispatch<SetStateAction<boolean>>;
}

const MIManagementCard: React.FC<MenuItemsCardProps> = ({
    item,
    index,
    setIsEditFormOpen,
    setIsDeleteItemModalOpen,
    setIsPublishModalOpen,
    setIsUnPublishModalOpen,
}) => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslation();
    const {setEditingMenuItem,setDeletingMenuItem } = useMenuManager(); // you may create similar setters for items

    const {
        englishName,
        arabicName,
        hebrewName,
        image,
        status,
        price,
        isVegan,
        isWithGluten,
        isWithMilk,
        createdAt,
        englishDescription,
        hebrewDescription,
        arabicDescription,
    } = item;

    const isPublished = status === "active";

    const onEdit = () => {
        setIsEditFormOpen(true);
        // You can create setEditingItem in your store later
        setEditingMenuItem(item);
    };

    const onDelete = () => {
        setIsDeleteItemModalOpen(true);
        setDeletingMenuItem(item);
    };

    const onPublishToggle = () => {
        setEditingMenuItem(item as any);
        if (isPublished) {
            setIsUnPublishModalOpen(true);
        } else {
            setIsPublishModalOpen(true);
        }
    };

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 200}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="overflow-hidden relative">
                <img
                    src={`${baseURL}${image}`}
                    alt={englishName}
                    className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="px-3 py-2 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 text-center">
                        {getName(currentLanguage, { englishName, arabicName, hebrewName })}
                    </h3>

                    <p className="text-sm text-gray-500 text-center mt-1">
                        {getName(currentLanguage, {
                            englishName: englishDescription,
                            arabicName: arabicDescription,
                            hebrewName: hebrewDescription,
                        })}
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                        {new Date(createdAt).toLocaleDateString()}
                    </p>
                </div>
                <div className="text-start">

                    <p className=" text-md text-gray-700 mt-2 font-semibold">
                        {t("PRICE")}: {price} ₪
                    </p>


                </div>
                <div className="flex flex-wrap gap-3">
                    {isVegan && <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100 rounded-full text-sm font-medium">
                        {t("IS_VAGAN")} 🥗
                    </span>}
                    {isWithGluten && <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100 rounded-full text-sm font-medium">
                        {t("IS_WITH_GLUTEN")} 🥖
                    </span>}
                    {isWithMilk && <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100 rounded-full text-sm font-medium">
                        {t("IS_WITH_MILK")} 🥛
                    </span>}
                </div>
                {/* Publish Status */}
                <div className="flex justify-between mt-3 items-center">
                    <p
                        className={`text-md ${isPublished ? "text-green-700 font-semibold" : "text-gray-700 line-through"
                            }`}
                    >
                        {t("PUBLISHED")}
                    </p>
                    <SwitchButton isChecked={isPublished} onClick={onPublishToggle} />
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-3 gap-2">
                    <button
                        onClick={onEdit}
                        className="flex justify-around items-center w-full p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 border border-gray-500 transition"
                        title="Edit"
                    >
                        <span className="mx-1">{t("EDIT")}</span>
                        <FaEdit />
                    </button>

                    <button
                        onClick={onDelete}
                        className="flex justify-around items-center w-full p-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 border border-gray-500 transition"
                        title="Delete"
                    >
                        <span className="mx-1">{t("DELETE")}</span>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MIManagementCard;

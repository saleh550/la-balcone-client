import React from "react";
import { useTranslation } from "react-i18next";
import { useMenuManager } from "../../../../../store/useMenuManager";
import { getName } from "../../../../../utils/utils";
import { useLanguage } from "../../../../../store/useLanguage";


interface DeleteMenuItemFormProps {
    onConfirm: () => void;
    onCancel: () => void;
    isDeleteLoading: boolean
}

const DeleteMenuItemForm: React.FC<DeleteMenuItemFormProps> = ({
    onConfirm,
    onCancel,
    isDeleteLoading
}) => {
    const { t } = useTranslation();
    const { deletingMenuItem } = useMenuManager();
    const { currentLanguage } = useLanguage()

    return (
        <div className="flex flex-col items-center text-center space-y-4 p-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                {t("DELETE_MENU_ITEM_TITLE") || "Delete MenuItem"}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm">
                {t("DELETE_MENU_ITEM_QUESTION") ||
                    `Are you sure you want to delete "${getName(currentLanguage, deletingMenuItem)}"? This action cannot be undone.`}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4 w-full">
                <button
                    onClick={onCancel}
                    className="w-full sm:w-1/2 py-2 font-semibold bg-gray-200 text-gray-700 rounded-full border border-gray-400 hover:bg-gray-300 transition"
                >
                    {t("CANCEL") || "Cancel"}
                </button>
                <button
                    disabled={isDeleteLoading}
                    onClick={onConfirm}
                    className="w-full sm:w-1/2 py-2 font-semibold bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                    {!isDeleteLoading ? t("CONFIRM_DELETE") : t("DELETING")}
                </button>
            </div>
        </div>
    );
};

export default DeleteMenuItemForm;

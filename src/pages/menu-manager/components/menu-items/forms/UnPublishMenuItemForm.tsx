import React from "react";
import { useTranslation } from "react-i18next";
import { useMenuManager } from "../../../../../store/useMenuManager";
import { getName } from "../../../../../utils/utils";
import { useLanguage } from "../../../../../store/useLanguage";


interface UnPublishMenuItemFormProps {
    onConfirm: () => void;
    onCancel: () => void;
    isUnPublishLoading: boolean
}

const UnPublishMenuItemForm: React.FC<UnPublishMenuItemFormProps> = ({
    onConfirm,
    onCancel,
    isUnPublishLoading
}) => {
    const { t } = useTranslation();
    const { editingMenuItem } = useMenuManager();
    const { currentLanguage } = useLanguage()

    return (
        <div className="flex flex-col items-center text-center space-y-4 p-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                {t("UNPUBLISH_MENU_ITEM_TITLE") || "UnPublish MenuItem"}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm">
                {t("UNPUBLISH_MENU_ITEM_QUESTION") ||
                    `Are you sure you want to UnPublish "${getName(currentLanguage, editingMenuItem)}"? This action cannot be undone.`}
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
                    disabled={isUnPublishLoading}
                    onClick={onConfirm}
                    className="w-full sm:w-1/2 py-2 font-semibold bg-sunny-500 text-white rounded-full hover:bg-sunny-600 transition"
                >
                    {!isUnPublishLoading ? t("UNPUBLISH") : t("UNPUBLISHING")}
                </button>
            </div>
        </div>
    );
};

export default UnPublishMenuItemForm;

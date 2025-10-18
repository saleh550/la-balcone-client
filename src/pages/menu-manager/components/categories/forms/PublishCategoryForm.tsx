import React from "react";
import { useTranslation } from "react-i18next";
import { useMenuManager } from "../../../../../store/useMenuManager";
import { getName } from "../../../../../utils/utils";
import { useLanguage } from "../../../../../store/useLanguage";


interface PublishCategoryFormProps {
    onConfirm: () => void;
    onCancel: () => void;
    isPublishLoading: boolean
}

const PublishCategoryForm: React.FC<PublishCategoryFormProps> = ({
    onConfirm,
    onCancel,
    isPublishLoading
}) => {
    const { t } = useTranslation();
    const { deletingCategory } = useMenuManager();
    const { currentLanguage } = useLanguage()

    return (
        <div className="flex flex-col items-center text-center space-y-4 p-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
                {t("PUBLISH_CATEGORY_TITLE") || "Publish Category"}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm">
                {t("PUBLISH_CATEGORY_QUESTION") ||
                    `Are you sure you want to Publish "${getName(currentLanguage, deletingCategory)}"? This action cannot be undone.`}
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
                    disabled={isPublishLoading}
                    onClick={onConfirm}
                    className="w-full sm:w-1/2 py-2 font-semibold bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                    {!isPublishLoading ? t("CONFIRM_PUBLISH") : t("PUBLISHING")}
                </button>
            </div>
        </div>
    );
};

export default PublishCategoryForm;


import React, { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { useMenuManager } from "../../../../store/useMenuManager";
import { addNewSubCategory } from "../../../../utils/apisUtils";
import { useParams } from "react-router-dom";                                                                                                                                                                                                                                                                                                                                             
// 🧠 Validation schema
const categorySchema = z.object({
    englishName: z
        .string()
        .min(2, { message: "ENGLISH_NAME_MIN_LENGTH" }),
    arabicName: z
        .string()
        .min(2, { message: "ARABIC_NAME_MIN_LENGTH" }),
    hebrewName: z
        .string()
        .min(2, { message: "HEBREW_NAME_MIN_LENGTH" }),


});

type CategoryFormData = z.infer<typeof categorySchema>;

interface AddCategoryFormProps {
    setIsAddSubCategoryModalOpen: Dispatch<SetStateAction<boolean>>
}
const AddSubCategoryForm: React.FC<AddCategoryFormProps> = ({ setIsAddSubCategoryModalOpen }) => {
    const { t } = useTranslation();
    const { categoryId } = useParams()
    const { addSubCategory } = useMenuManager();
    const [isLoading, setIsLoading] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CategoryFormData>({
        resolver: zodResolver(categorySchema),
    });

    const onSubmit = async (data: CategoryFormData) => {

        console.log("Category Data:", data);                                                                                                                                   
        // console.log("File:", file);
        const formData = new FormData();
        formData.append("englishName", data.englishName);
        formData.append("arabicName", data.arabicName);
        formData.append("hebrewName", data.hebrewName);
        formData.append("categoryId", categoryId ?? "");
        const bodyData ={...data,categoryId}
        // formData.append("image", file);
        // await addSubCategory(formData, addCategory, setIsLoading, setIsAddCategoryModalOpen)
        await addNewSubCategory(bodyData, addSubCategory, setIsLoading, setIsAddSubCategoryModalOpen)
    };

    return (
        <div className="max-w-lg mx-auto bg-transparent p-6 rounded-2xl ">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                {t("ADD_SUB_CATEGORY_FORM_TITLE")}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* English Name */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        {t("ENGLISH_NAME_LABEL")}
                    </label>
                    <input
                        type="text"
                        {...register("englishName")}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder={t("ENGLISH_NAME_PLACEHOLDER") as string}
                    />
                    {errors.englishName && (
                        <p className="text-red-500 text-sm mt-1">
                            {t(errors.englishName.message ?? "")}
                        </p>
                    )}
                </div>

                {/* Arabic Name */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        {t("ARABIC_NAME_LABEL")}
                    </label>
                    <input
                        type="text"
                        {...register("arabicName")}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder={t("ARABIC_NAME_PLACEHOLDER") as string}
                    />
                    {errors.arabicName && (
                        <p className="text-red-500 text-sm mt-1">
                            {t(errors.arabicName.message ?? "")}
                        </p>
                    )}
                </div>

                {/* Hebrew Name */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        {t("HEBREW_NAME_LABEL")}
                    </label>
                    <input
                        type="text"
                        {...register("hebrewName")}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder={t("HEBREW_NAME_PLACEHOLDER") as string}
                    />
                    {errors.hebrewName && (
                        <p className="text-red-500 text-sm mt-1">
                            {t(errors.hebrewName.message ?? "")}
                        </p>
                    )}
                </div>



                {/* Submit */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-sunny-500 hover:bg-sunny-600 text-white font-semibold py-2 rounded-lg transition"
                >
                    {isLoading ? t("SAVING") : t("SAVE")}
                </button>
            </form>
        </div>
    );
};

export default AddSubCategoryForm

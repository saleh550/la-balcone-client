
import React, { type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import ImageInput from "../../../../../components/customs/inputs/ImageInput";
// import { addNewMenuItem } from "../../../../../utils/apisUtils";
import { useMenuManager } from "../../../../../store/useMenuManager";
import SelectInput from "../../../../../components/customs/inputs/SelectInput";
import FormSwitch from "../../../../../components/customs/inputs/FormSwitch";
import { updateMenuItem } from "../../../../../utils/apisUtils";
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
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
    englishDescription: z
        .string()
        .min(10, { message: "ENGLISH_DESC__MIN_LENGTH" }),
    arabicDescription: z
        .string()
        .min(10, { message: "ARABIC_NDESC_MIN_LENGTH" }),
    hebrewDescription: z
        .string()
        .min(10, { message: "HEBREW_NDESC_MIN_LENGTH" }),
    price: z
        .string()
        .min(1, { message: "REQUIRED_FIELD_MESSAGE" }),
    subCategoryId: z
        .string()
        .min(1, { message: "REQUIRED_FIELD_MESSAGE" }),
    isWithMilk: z
        .boolean().optional(),
    isVegan: z
        .boolean().optional(),
    isWithGluten: z
        .boolean().optional(),
    image: z.any(),
});

type MenuItemFormData = z.infer<typeof categorySchema>;

interface AddMenuItemFormProps {
    setIsEditMenuItemModalOpen: Dispatch<SetStateAction<boolean>>
}
const EditMenuItemForm: React.FC<AddMenuItemFormProps> = ({ setIsEditMenuItemModalOpen }) => {
    const { subCategories, editMenuItemInSubCategory, editingMenuItem } = useMenuManager()
    const { t } = useTranslation();
    const { } = useMenuManager();
    const [isLoading, setIsLoading] = React.useState(false);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<MenuItemFormData>({
        resolver: zodResolver(categorySchema),
    });

    const onSubmit = async (data: MenuItemFormData) => {
        const formData = new FormData();
        formData.append("englishName", data.englishName);
        formData.append("arabicName", data.arabicName);
        formData.append("hebrewName", data.hebrewName);
        formData.append("hebrewDescription", data.hebrewDescription);
        formData.append("arabicDescription", data.arabicDescription);
        formData.append("englishDescription", data.englishDescription);
        formData.append("price", data.price);
        formData.append("subCategoryId", data.subCategoryId);
        formData.append("isWithMilk", data.isWithMilk?.toString() || "false");
        formData.append("isVegan", data.isVegan?.toString() || "false");
        formData.append("isWithGluten", data.isWithGluten?.toString() || "false");
        if (data?.image && data.image.length > 0) {
            const file = data.image[0];
            formData.append("image", file);
        }
        if (editingMenuItem)
            await updateMenuItem(formData, editMenuItemInSubCategory, setIsLoading, setIsEditMenuItemModalOpen, editingMenuItem.id)
    };

    return (
        <div className="max-w-lg mx-auto bg-transparent p-6 rounded-2xl ">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                {t("ADD_MENU_ITEM_FORM_TITLE")}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        {t("SUB_CATEGORY")}
                    </label>
                    <SelectInput name="subCategoryId" options={subCategories} register={register} error={errors.subCategoryId} defaultValue={editingMenuItem?.subCategoryId} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* English Name */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            {t("ENGLISH_NAME_LABEL")}
                        </label>
                        <input
                            defaultValue={editingMenuItem?.englishName}
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

                        {/* English Description */}
                        <label className="block font-medium text-gray-700 mb-1 mt-3">
                            {t("ENGLISH_DESC_LABEL")}
                        </label>
                        <textarea
                            defaultValue={editingMenuItem?.englishDescription}
                            {...register("englishDescription")}
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder={t("ENGLISH_DESC_PLACEHOLDER") as string}
                            rows={4}
                        />
                        {errors.englishDescription && (
                            <p className="text-red-500 text-sm mt-1">
                                {t(errors.englishDescription.message ?? "")}
                            </p>
                        )}
                    </div>

                    {/* Arabic Name */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            {t("ARABIC_NAME_LABEL")}
                        </label>
                        <input
                            defaultValue={editingMenuItem?.arabicName}
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

                        {/* Arabic Description */}
                        <label className="block font-medium text-gray-700 mb-1 mt-3">
                            {t("ARABIC_DESC_LABEL")}
                        </label>
                        <textarea
                            defaultValue={editingMenuItem?.arabicDescription}
                            {...register("arabicDescription")}
                            dir="rtl"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder={t("ARABIC_DESC_PLACEHOLDER") as string}
                            rows={4}
                        />
                        {errors.arabicDescription && (
                            <p className="text-red-500 text-sm mt-1">
                                {t(errors.arabicDescription.message ?? "")}
                            </p>
                        )}
                    </div>

                    {/* Hebrew Name */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">
                            {t("HEBREW_NAME_LABEL")}
                        </label>
                        <input
                            defaultValue={editingMenuItem?.hebrewName}
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

                        {/* Hebrew Description */}
                        <label className="block font-medium text-gray-700 mb-1 mt-3">
                            {t("HEBREW_DESC_LABEL")}
                        </label>
                        <textarea
                            defaultValue={editingMenuItem?.hebrewDescription}
                            {...register("hebrewDescription")}
                            dir="rtl"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder={t("HEBREW_DESC_PLACEHOLDER") as string}
                            rows={4}
                        />
                        {errors.hebrewDescription && (
                            <p className="text-red-500 text-sm mt-1">
                                {t(errors.hebrewDescription.message ?? "")}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block font-medium text-gray-700 mb-1">
                        {t("PRICE_LABEL")} {"( ₪ )"}
                    </label>
                    <input
                        defaultValue={editingMenuItem?.price}
                        type="number"
                        {...register("price")}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder={t("PRICE_PLACEHOLDER") as string}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm mt-1">
                            {t(errors.price.message ?? "")}
                        </p>
                    )}
                </div>

                {/* Responsive grid for switches */}
                <div className=" flex justify-around sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <FormSwitch
                        defaultValue={editingMenuItem?.isWithMilk}
                        name="isWithMilk"
                        label={`${t("IS_WITH_MILK")}🥛`}
                        control={control}
                        error={errors.isWithMilk}
                    />

                    <FormSwitch
                        defaultValue={editingMenuItem?.isVegan}
                        name="isVegan"
                        label={`${t("IS_VEGAN")} 🥗`}
                        control={control}
                        error={errors.isVegan}
                    />

                    <FormSwitch
                        defaultValue={editingMenuItem?.isWithGluten}
                        name="isWithGluten"
                        label={`${t("IS_WITH_GLUTEN")} 🥖`}
                        control={control}
                        error={errors.isWithGluten}
                    />
                </div>
                <ImageInput
                    defaultValue={editingMenuItem?.image}
                    name="image"
                    control={control}
                    error={errors.image}
                    baseURL={baseURL}
                />
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

export default EditMenuItemForm

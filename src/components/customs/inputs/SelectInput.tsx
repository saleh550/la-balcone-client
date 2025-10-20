import React from "react";
import { useTranslation } from "react-i18next";
import type { FieldError, UseFormRegister } from "react-hook-form";
import { getName } from "../../../utils/utils";
import { useLanguage } from "../../../store/useLanguage";

interface SelectInputProps {
    name: string;
    label?: string;
    options: any[];
    register: UseFormRegister<any>;
    error?: FieldError;
    defaultValue?: string
}

const SelectInput: React.FC<SelectInputProps> = ({ name, label, options, register, error, defaultValue }) => {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage()

    return (
        <div className="flex flex-col space-y-1">
            {label && <label className="text-gray-700 text-sm font-medium">{label}</label>}

            <select
                defaultValue={defaultValue ?? ""}
                {...register(name)}
                className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 
          ${error ? "outline-red-500" : "outline-gray-300"} 
          placeholder:text-gray-400  focus:outline-2 focus:-outline-offset-2 focus:outline-sunny-600`}
            >
                <option value="">{t("SELECT_AN_OPTION")}</option>
                {options?.map((option) => (
                    <option key={option.id} value={option.id}>
                        {getName(currentLanguage, option)}
                    </option>
                ))}
            </select>

            {error && <p className="text-red-500 text-sm">{t("REQUIRED_FIELD_MESSAGE")}</p>}
        </div>
    );
};

export default SelectInput;

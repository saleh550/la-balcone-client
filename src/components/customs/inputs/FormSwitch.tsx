import React from "react";
import { Controller, type Control, type FieldError } from "react-hook-form";
import { Switch } from "@headlessui/react";
import { FcCheckmark } from "react-icons/fc";

interface FormSwitchProps {
    name: string;
    control: Control<any>;
    label?: string;
    error?: FieldError;
    defaultValue?: boolean
}

const FormSwitch: React.FC<FormSwitchProps> = ({ name, control, label, error, defaultValue }) => {
    
    return (
        <div className="flex flex-col space-y-1">
            {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}

            <Controller
                name={name}
                control={control}
                 defaultValue={defaultValue ?? false}
                render={({ field: { value, onChange } }) => (
                    <Switch
                        dir="ltr"
                        checked={value}
                        onChange={onChange}
                        // defaultValue={defaultValue?.toString()||"false"}
                        // defaultChecked={defaultValue}
                        className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-all duration-200 ease-in-out
              ${value ? "bg-green-600" : "bg-gray-400"}`}
                    >
                        <span
                            aria-hidden="true"
                            className={`flex justify-center items-center size-5 rounded-full bg-white shadow-md transform transition
                ${value ? "translate-x-7" : "translate-x-0"}`}
                        >
                            {value && <FcCheckmark className="font-semibold" />}
                        </span>
                    </Switch>
                )}
            />

            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
};

export default FormSwitch;

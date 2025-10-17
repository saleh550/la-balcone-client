
import { PhotoIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Controller, type Control, type FieldError } from "react-hook-form";
import { useTranslation } from "react-i18next";
interface ImageInputProps {
    name: string;
    control: Control<any>;
    error?: FieldError | any;
    defaultValue?: string;
    onUpload?: (files: FileList | null) => void;
    baseURL?: string;
}
const ImageInput: React.FC<ImageInputProps> = (
    {
        name,
        control,
        error,
        defaultValue,
        onUpload,
        baseURL,
    }
) => {
    const [preview, setPreview] = React.useState<string | null>(
        defaultValue ? `${baseURL}${defaultValue}` : null
    );
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center space-y-2 border border-gray-300 rounded-md p-4">
            {/* Preview Section */}
            {preview ? (
                <a href={preview} target="_blank" rel="noopener noreferrer">
                    <img className="w-24 h-24 object-cover rounded-md" src={preview} alt="Preview" />
                </a>
            ) : (
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            )}

            {/* File Input */}
            <div className="flex text-sm leading-6 text-gray-600 justify-center">
                <label
                    htmlFor={`file-upload-${name}`}
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-sunny-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sunny-600 focus-within:ring-offset-2 hover:text-sunny-500"
                >
                    <span>{t("UPLOAD_IMAGE")}</span>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <input
                                id={`file-upload-${name}`}
                                type="file"
                                accept=".jpg,.jpeg,.png,.gif"
                                className="sr-only"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const previewURL = URL.createObjectURL(file);
                                        setPreview(previewURL);
                                    }
                                    field.onChange(e.target.files);
                                    onUpload?.(e.target.files);
                                }}
                            />
                        )}
                    />
                </label>
            </div>

            {/* Info */}
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    )
}

export default ImageInput

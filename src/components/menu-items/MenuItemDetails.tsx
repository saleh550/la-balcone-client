
import type { FC } from "react";
import {
    FaLeaf,
} from "react-icons/fa";
import milkIcon from "../../assets/icons/milk-bottle.png";
import glutenIcon from "../../assets/icons/gluten.png";
import { useSubCategories } from "../../store/useSubCategories";
import { getDescription, getName } from "../../utils/utils";
import { useLanguage } from "../../store/useLanguage";

interface MenuItemDetailsProps {

}

const MenuItemDetails: FC<MenuItemDetailsProps> = ({ }) => {
    const {currentLanguage}=useLanguage();
    const { selectedMenuItem: item } = useSubCategories();
    return (
        <div className="flex flex-col md:flex-row gap-6">
            {/* 🖼️ Image Section */}
            <div className="md:w-1/2 w-full">
                <img
                    src={item?.image}
                    alt={item?.englishName}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
                />
            </div>

            {/* 📝 Details Section */}
            <div className="md:w-1/2 w-full flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900  mb-2">
                        {getName(currentLanguage,item)}
                    </h2>


                    <p className="text-gray-700  leading-relaxed mb-6">
                        {getDescription(currentLanguage,item)}
                    </p>
                    <p className="text-gray-500  mb-4">
                        ₪ {item?.price.toFixed(2)}
                    </p>

                    {/* 🏷️ Status & Dietary Info */}
                    <div className="flex flex-wrap gap-3">
                        {/* {item?.isAvailable ? (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                Available
                            </span>
                        ) : (
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Not Available
                            </span>
                        )} */}

                        {item?.isVegan && (
                            <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100  rounded-full text-sm font-medium">
                                <FaLeaf /> Vegan
                            </span>
                        )}

                        {item?.isWithMilk && (
                            <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100 rounded-full text-sm font-medium">
                                <img
                                    src={milkIcon}
                                    alt="Milk"
                                    className="w-5 h-5 object-contain"
                                /> Contains Milk
                            </span>
                        )}

                        {item?.isWithGluten && (
                            <span className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-gray-100 rounded-full text-sm font-medium">
                                <img
                                    src={glutenIcon}
                                    alt="Gluten"
                                    className="w-5 h-5 object-contain"
                                />  Contains Gluten
                            </span>
                        )}

                        {/* {!item?.isPublished && (
                            <span className="flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium">
                                <FaTimesCircle /> Hidden
                            </span>
                        )} */}
                    </div>
                </div>

                {/* 🔹 Status field */}
                {/* {item?.status && (
                    <div className="mt-6 text-sm text-gray-500 italic">
                        Status: {item?.status}
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default MenuItemDetails;

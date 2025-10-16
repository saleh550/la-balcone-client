import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../store/useLanguage'

const MenuButton = () => {
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage();

    const isRTL = currentLanguage === "ar" || currentLanguage === "he";
    return (
        <div
            className={`w-full flex justify-start px-4 mb-4  pt-2`}
        >
            <Link
                to={"/"}
                dir={isRTL ? "rtl" : "ltr"}
                className={`flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-md transition-all duration-200`}
            >
                <span>{t("GO_TO_MENU")}</span>
            </Link>
        </div>
    )
}

export default MenuButton

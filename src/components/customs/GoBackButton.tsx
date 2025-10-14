
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../store/useLanguage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { FC } from "react";

const GoBackButton: FC = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  const handleGoBack = () => navigate(-1);

  const isRTL = currentLanguage === "ar" || currentLanguage === "he";

  const label =
    currentLanguage === "en"
      ? "Back"
      : currentLanguage === "he"
      ? "חזרה"
      : "رجوع";

  return (
    <div
      className={`w-full flex justify-start px-4 mb-4  pt-2`}
    >
      <button
        onClick={handleGoBack}
        dir={isRTL ? "rtl" : "ltr"}
        className={`flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-300 hover:bg-white text-gray-800 font-medium px-4 py-2 rounded-full shadow-md transition-all duration-200`}
      >
        {isRTL ? (
          <>
            <FaArrowRight className="w-4 h-4" />
            <span>{label}</span>
          </>
        ) : (
          <>
            <FaArrowLeft className="w-4 h-4" />
            <span>{label}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default GoBackButton;

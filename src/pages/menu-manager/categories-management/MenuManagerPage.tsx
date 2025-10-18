
import { useTranslation } from "react-i18next"
import AllCategoriesHeader from "../components/categories/AllCategoriesHeader"
import AllCategoriesList from "../components/categories/AllCategoriesList"
import { useState } from "react"
import Modal from "../../../components/customs/modals/Modal"
import AddCategoryForm from "../components/categories/forms/AddCategoryForm"
import { useLanguage } from "../../../store/useLanguage"


const MenuManagerPage = () => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false)
  const { currentLanguage } = useLanguage()
  const { t } = useTranslation()
  return (
    <>
      <div data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"} className="">

        <AllCategoriesHeader />
        <div className="p-2">
          <button onClick={() => setIsAddCategoryModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            {t("ADD_NEW_CATEGORY")}
          </button>
        </div>
        <AllCategoriesList />
      </div>
      <Modal title={t("ADD_CATEGORY_FORM_TITLE")} isOpen={isAddCategoryModalOpen} setIsOpen={setIsAddCategoryModalOpen}>
        <AddCategoryForm setIsAddCategoryModalOpen={setIsAddCategoryModalOpen} />
      </Modal>
    </>
  )
}

export default MenuManagerPage

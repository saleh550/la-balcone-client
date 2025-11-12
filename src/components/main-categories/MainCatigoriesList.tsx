import MainCategoriesCard from "./MainCategoriesCard";
import { useMainCategories } from "../../store/useMainCategories";
import FadeOnMount from "../customs/animations/FadeOnMount";



const MainCatigoriesList = () => {
    const { categories } = useMainCategories();
    return (
        <div data-aos="fade-up" data-aos-duration="1500"   className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
                <FadeOnMount index={index} key={cat.id} animation="fade-up">
                <MainCategoriesCard key={index} cat={cat} index={index} />
                </FadeOnMount>
            ))}
        </div>
    )
}

export default MainCatigoriesList

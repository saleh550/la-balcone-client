
import GoBackButton from '../../../components/customs/buttons/GoBackButton'
import { useLanguage } from '../../../store/useLanguage'

const MenuItemsManagement = () => {
    const { currentLanguage } = useLanguage()
    return (
        <div data-aos={currentLanguage == 'en' ? "fade-right" : "fade-left"}>
            <GoBackButton />

        </div>
    )
}

export default MenuItemsManagement

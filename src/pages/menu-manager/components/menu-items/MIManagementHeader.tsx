
import { useTranslation } from 'react-i18next'
import Title from '../../../../components/customs/Title'

const MIManagementHeader = () => {
    const { t } = useTranslation()
    return (
        <div>
            {/* Page Header */}
            <div className="mb-8 text-center">
                {/* <h1 className="text-3xl font-bold text-sunny-600 mb-2">
                    {t('MENU_ITEMS_MANAGENMENT_TITLE')} 🍽️
                </h1> */}
                <Title title='MENU_ITEMS_MANAGENMENT_TITLE' />
                <p className="text-gray-500 max-w-2xl mx-auto pt-1">
                    {t('MENU_ITEMS_MANAGER_DESCRIPTION')}
                </p>
            </div>
        </div>
    )
}

export default MIManagementHeader

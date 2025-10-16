
import MenuHeader from '../menu-layout/MenuHeader'
import ScrollToTop from '../../components/customs/ScrollToTop'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className="min-h-svh ">
            <MenuHeader />
            {/* add padding to push outlet below fixed header */}
            <main className="pt-[72px]">
                <ScrollToTop />
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout

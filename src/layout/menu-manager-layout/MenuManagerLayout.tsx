import { Outlet } from "react-router-dom"
import ScrollToTop from "../../components/customs/ScrollToTop"
import MenuManagerFooter from "./components/MenuManagerFooter"
import MenuManagerHeader from "./components/MenuManagerHeader"
import { useMenuManager } from "../../store/useMenuManager"
import { useEffect, useState } from "react"
import { getAllCategories } from "../../utils/apisUtils"


const MenuManagerLayout = () => {
    const [_isLoading, setIsLoading] =useState(false)
    const {setCategories}=useMenuManager()
    useEffect(() => {
        const fun = async () => {
            await getAllCategories(setCategories, setIsLoading)
        }
        fun()
    }, [])
    return (
        <>
            <div className="min-h-svh ">
                <MenuManagerHeader />
                {/* add padding to push outlet below fixed header */}
                <main className="pt-[72px]">
                    <ScrollToTop />
                    <Outlet />
                </main>
            </div>
            <MenuManagerFooter />
        </>
    )
}

export default MenuManagerLayout

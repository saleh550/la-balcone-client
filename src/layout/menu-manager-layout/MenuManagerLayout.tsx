import { Outlet } from "react-router-dom"
import ScrollToTop from "../../components/customs/ScrollToTop"
import MenuManagerFooter from "./components/MenuManagerFooter"
// import MenuManagerHeader from "./components/MenuManagerHeader"
import { useMenuManager } from "../../store/useMenuManager"
import { useEffect, useState } from "react"
import { getAllCategories } from "../../utils/apisUtils"
import MenuHeader from "../menu-layout/MenuHeader"
import { useDarkMode } from "../../store/useDarkMode"
import darkbg from '../../assets/bgimages/labalcone-dark-bg.jpeg'
import lightbg from '../../assets/bgimages/labalcone-light-bg.jpeg'

const MenuManagerLayout = () => {
    const [_isLoading, setIsLoading] =useState(false)
  const [bgImage, setBgImage] = useState<string>()
    const { currentDarkMode } = useDarkMode();
  
    const {setCategories}=useMenuManager()
    useEffect(() => {
        const fun = async () => {
            await getAllCategories(setCategories, setIsLoading)
        }
        fun()
    }, [])
      useEffect(() => {
    setBgImage(currentDarkMode == "dark" ? darkbg : lightbg)
  }, [currentDarkMode])
    return (
        <>
            <div className={`min-h-svh bg-cover bg-center bg-no-repeat bg-fixed
            overflow-hidden pb-10` } style={{ backgroundImage: `url(${bgImage})` }}>
                        <MenuHeader />
                
                {/* <MenuManagerHeader /> */}
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

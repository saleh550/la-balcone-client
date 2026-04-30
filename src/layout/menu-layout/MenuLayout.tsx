import { useEffect, useState } from 'react'
import ScrollToTop from '../../components/customs/ScrollToTop'
import MenuFooter from './MenuFooter'
import MenuHeader from './MenuHeader'
import { Outlet } from 'react-router-dom'
import { useMainCategories } from '../../store/useMainCategories'
import { getActiveCategories } from '../../utils/apisUtils'
// import darkbg from '../../assets/bgimages/dark.avif'
// import lightbg from '../../assets/bgimages/light.jpg'
import darkbg from '../../assets/bgimages/labalcone-dark-bg.jpeg'
import lightbg from '../../assets/bgimages/labalcone-light-bg.jpeg'
import { useDarkMode } from '../../store/useDarkMode'
const MenuLayout = () => {
  const [_isLoading, setIsLoading] = useState(false)
  const [bgImage, setBgImage] = useState<string>()
  const { currentDarkMode } = useDarkMode();
  const { setCategories } = useMainCategories()
  useEffect(() => {
    const fun = async () => {
      await getActiveCategories(setCategories, setIsLoading)
    }
    fun()
  }, [])
  useEffect(() => {
    setBgImage(currentDarkMode == "dark" ? darkbg : lightbg)
  }, [currentDarkMode])
  return (
    <>
      <div className={`min-h-svh bg-cover bg-center bg-no-repeat bg-fixed
            overflow-hidden` } style={{ backgroundImage: `url(${bgImage})` }}>
        <MenuHeader />
        {/* add padding to push outlet below fixed header */}
        <main className="pt-[72px]">
          <ScrollToTop />
          <Outlet />
        </main>
      </div>
      <MenuFooter />
    </>
    // <div className="relative min-h-screen bg-gray-200 overflow-hidden">
    //   {/* Fixed Header */}

    //   <MenuHeader />

    //   {/* ☁️ שכבת עננים עקומים */}
    //   <div className="w-full">
    //     {/* ענן 1 */}
    //     <div
    //       className="absolute  h-[80px] bg-sky-200 border-2 blur-xl top-[20px] left-[-100px] rounded-[50%_60%_40%_70%/60%_40%_60%_50%]"
    //       style={{ animation: 'float1 15s linear infinite' }}
    //     />
    //     {/* ענן 2 */}
    //     <div
    //       className="absolute w-[250px] h-[100px] bg-sky-200 border  blur-2xl top-[40px] left-[200px] rounded-[60%_40%_70%_50%/50%_60%_40%_70%]"
    //       style={{ animation: 'float2 5s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float3 11s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float4 20s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float5 30s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float6 4s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float7 12s linear infinite' }}
    //     />
    //     {/* ענן 3 */}
    //     <div
    //       className="absolute w-[180px] h-[70px] bg-sky-200 border  blur-xl top-[10px] left-[500px] rounded-[40%_70%_50%_60%/60%_50%_70%_40%]"
    //       style={{ animation: 'float8 10s linear infinite' }}
    //     />
    //   </div>


    //   {/* Push content below the header */}
    //   <main className="pt-[180px] pb-24">
    //     <Outlet />
    //   </main>

    //   <style>{`
    //     @keyframes float1 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(600px); }
    //     }
    //     @keyframes float2 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(-400px); }
    //     }
    //     @keyframes float3 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(500px); }
    //     }
    //               @keyframes float4 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(-500px); }
    //     }
    //               @keyframes float5 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(200px); }
    //     }
    //               @keyframes float6 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(-200px); }
    //     }
    //               @keyframes float7 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(300px); }
    //     }
    //               @keyframes float8 {
    //       0% { transform: translateX(0); }
    //       100% { transform: translateX(700px); }
    //     }
    //   `}</style>
    // </div>
  )
}

export default MenuLayout

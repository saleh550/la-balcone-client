
import LnaguageMenu from "../../components/LanguageMenu";
export default function MenuManagerHeader() {

  return (
    <header dir="ltr" className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left: Logo or Restaurant Name */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn1.iconfinder.com/data/icons/food-drink-5/32/fast-food-256.png"
            alt="Restaurant Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-semibold text-xl text-gray-800">
            La Balcone
          </span>
        </div>
        <nav className="hidden md:flex gap-6">

        </nav>
         <LnaguageMenu/>
      </div>
    </header>
  );
}

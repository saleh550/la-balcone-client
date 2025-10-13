
import LnaguageMenu from "../components/LanguageMenu";
export default function MenuHeader() {

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

        {/* Right: Burger Icon (mobile) */}
        {/* <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}

        {/* Right: Categories (desktop) */}
        <nav className="hidden md:flex gap-6">
          {/* {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              {cat}
            </a>
          ))} */}
        </nav>
         <LnaguageMenu/>
      </div>

      {/* Mobile Dropdown Menu */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-inner border-t"
          >
            <ul className="flex flex-col py-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href={`#${cat.toLowerCase()}`}
                    className="block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat}
                  </a>
                </li>
              ))}
              <li >

               <LnaguageMenu/>
              </li>
            </ul>
           
          </motion.nav>
        )}
      </AnimatePresence> */}
    </header>
  );
}

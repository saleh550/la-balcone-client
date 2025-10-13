import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

type MenuCategory = {
  id: number;
  title: string;
  dishes: Dish[];
};

const menuData: MenuCategory[] = [
  {
    id: 1,
    title: "Starters",
    dishes: [
      {
        id: 1,
        name: "Bruschetta",
        description: "Grilled bread with tomatoes, olive oil & basil.",
        price: "$8.50",
        image: "/images/bruschetta.jpg",
      },
      {
        id: 2,
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes & balsamic glaze.",
        price: "$9.00",
        image: "/images/caprese.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Main Dishes",
    dishes: [
      {
        id: 3,
        name: "Pasta Carbonara",
        description: "Creamy sauce, pancetta & parmesan.",
        price: "$15.50",
        image: "/images/carbonara.jpg",
      },
      {
        id: 4,
        name: "Grilled Salmon",
        description: "Served with lemon butter sauce & veggies.",
        price: "$18.00",
        image: "https://simplicityandastarter.com/wp-content/uploads/2025/08/Sourdough-Cheez-Its_13-683x1024.png",
      },
    ],
  },
  {
    id: 3,
    title: "Desserts",
    dishes: [
      {
        id: 5,
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso & mascarpone.",
        price: "$7.50",
        image: "https://simplicityandastarter.com/wp-content/uploads/2025/08/Sourdough-Cheez-Its_13-683x1024.png",
      },
      {
        id: 6,
        name: "Panna Cotta",
        description: "Creamy vanilla pudding with berry coulis.",
        price: "$8.00",
        image: "/images/pannacotta.jpg",
      },
    ],
  },
];

export default function MainMenu() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className=" mx-auto py-20 px-4 ">
      {menuData.map((category) => (
        <div key={category.id} className="mb-16">
          {/* Section Title */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 tracking-wide relative"
          >
            {category.title}
            <span className="block w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></span>
          </h2>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.dishes.map((dish, index) => (
              <div
                key={dish.id}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-[180px]">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {dish.description}
                    </p>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="text- font-bold text-base">
                      {dish.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

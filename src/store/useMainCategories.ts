import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MainCategoryType } from "../types/types";
interface MainCategoriesStoreType {
  categories: MainCategoryType[];
  setCategories: (cats: MainCategoryType[]) => void;
}
export const useMainCategories = create<MainCategoriesStoreType>()(
  persist(
    (set) => ({
      categories: [
        {
          id: "1",
          englishName: "Appetizers",
          arabicName: "المقبلات",
          hebrewName: "מנות פתיחה",
          image:
            "https://th.bing.com/th/id/OIP.T0dMSEiIgZUlabAF2tz-fgHaLH?w=204&h=306&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
        },
        {
          id: "2",
          englishName: "Main Dishes",
          arabicName: "الأطباق الرئيسية",
          hebrewName: "מנות עיקריות",
          image:
            "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800",
        },
        {
          id: "3",
          englishName: "Pasta",
          arabicName: "باستا",
          hebrewName: "פסטה",
          image:
            "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800",
        },
        {
          id: "4",
          englishName: "Pizza",
          arabicName: "بيتزا",
          hebrewName: "פיצה",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/500px-Pizza-3007395.jpg",
        },
        {
          id: "5",
          englishName: "Desserts",
          arabicName: "حلويات",
          hebrewName: "קינוחים",
          image:
            "data:image/webp;base64,UklGRlpBAABXRUJQVlA4IE5BAABQzQCdASphAesAPpk+mEglo6KlsZnraLATCWIHGXq4J8I3jv4HnH9Wehn5X+F4ss8dsz0wbhbzkebB5su/b+gB00dp8cpv3fgv+b/WP8TzMMdfa7qL+Eedv/A75fm5qF+3/Ptfh9SPv/QI9/vx3ngTRPmfUB8xO...",
        },
      ],
      setCategories: (categories) => set({ categories }),
    }),
    { name: "mainCategories" }
  )
);

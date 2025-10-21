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
      categories: [],
      setCategories: (categories) => set({ categories }),
    }),
    { name: "mainCategories" }
  )
);

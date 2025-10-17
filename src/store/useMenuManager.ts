import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MainCategoryType } from "../types/types";
interface MenuManagerStoreType {
  categories: MainCategoryType[];
  editingCategory: MainCategoryType | null;
  deletingCategory: MainCategoryType | null;
  setEditingCategory: (category: MainCategoryType | null) => void;
  setDeletingCategory: (category: MainCategoryType | null) => void;
  setCategories: (cats: MainCategoryType[]) => void;
  addCategory: (cats: MainCategoryType) => void;
  editCategory: (category: MainCategoryType) => void;
  deleteCategory: (category: MainCategoryType) => void;
}
export const useMenuManager = create<MenuManagerStoreType>()(
  persist(
    (set) => ({
      categories: [],
      editingCategory: null,
      deletingCategory: null,
      setCategories: (categories) => set({ categories }),
      setEditingCategory: (category) => set({ editingCategory: category }),
      setDeletingCategory: (category) => set({ deletingCategory: category }),
      addCategory: (category) =>
        set((state) => ({
          categories: [category, ...state.categories],
        })),
      editCategory: (updatedCategory) =>
        set((state) => ({
          categories: state.categories.map((cat) =>
            cat.id === updatedCategory.id ? updatedCategory : cat
          ),
        })),
      deleteCategory: (deletedCategory) => {
        set((state) => ({
          categories: state.categories.filter(
            (cat) => cat.id != deletedCategory.id
          ),
        }));
      },
    }),
    { name: "menuManager" }
  )
);

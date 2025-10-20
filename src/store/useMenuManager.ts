import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  MainCategoryType,
  MenuItemType,
  SubCategoryType,
} from "../types/types";
interface MenuManagerStoreType {
  categories: MainCategoryType[];
  subCategories: SubCategoryType[];
  editingCategory: MainCategoryType | null;
  editingMenuItem: MenuItemType | null;
  deletingMenuItem: MenuItemType | null;
  deletingCategory: MainCategoryType | null;
  setSubCategories: (subs: SubCategoryType[]) => void;
  addSubCategory: (sub: SubCategoryType) => void;
  setEditingCategory: (category: MainCategoryType | null) => void;
  setEditingMenuItem: (item: MenuItemType | null) => void;
  setDeletingMenuItem: (item: MenuItemType | null) => void;
  setDeletingCategory: (category: MainCategoryType | null) => void;
  setCategories: (cats: MainCategoryType[]) => void;
  addCategory: (cats: MainCategoryType) => void;
  editCategory: (category: MainCategoryType) => void;
  deleteCategory: (category: MainCategoryType) => void;
  addMenuItemToSubCategory: (menuItem: MenuItemType) => void;
  editMenuItemInSubCategory: (updatedItem: MenuItemType) => void;
  deleteMenuItemFromSubCategory: (deletedItem: MenuItemType) => void;
}
export const useMenuManager = create<MenuManagerStoreType>()(
  persist(
    (set) => ({
      categories: [],
      subCategories: [],
      editingCategory: null,
      deletingCategory: null,
      editingMenuItem: null,
      deletingMenuItem: null,
      setDeletingMenuItem: (deletingMenuItem) => set({deletingMenuItem}),
      setEditingMenuItem: (editingMenuItem) => {
        set({ editingMenuItem });
      },
      setSubCategories: (subCategories) => set({ subCategories }),
      addSubCategory: (newSubCategory) => {
        set((state) => ({
          subCategories: [newSubCategory, ...state.subCategories],
        }));
      },
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
      addMenuItemToSubCategory: (newMenuItem) => {
        set((state) => ({
          subCategories: state.subCategories.map((sub) =>
            sub.id === newMenuItem.subCategoryId
              ? { ...sub, menuItems: [newMenuItem, ...(sub.menuItems || [])] }
              : sub
          ),
        }));
      },
      editMenuItemInSubCategory: (updatedItem) =>
        set((state) => ({
          subCategories: state.subCategories.map((sub) =>
            sub.id === updatedItem.subCategoryId
              ? {
                  ...sub,
                  menuItems: sub.menuItems.map((item) =>
                    item.id === updatedItem.id ? updatedItem : item
                  ),
                }
              : sub
          ),
        })),
      // ❌ Delete Menu Item
      deleteMenuItemFromSubCategory: (deletedItem) =>
        set((state) => ({
          subCategories: state.subCategories.map((sub) =>
            sub.id === deletedItem.subCategoryId
              ? {
                  ...sub,
                  menuItems: sub.menuItems.filter(
                    (item) => item.id !== deletedItem.id
                  ),
                }
              : sub
          ),
        })),
    }),
    { name: "menuManager" }
  )
);

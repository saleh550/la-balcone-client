import type { Dispatch, SetStateAction } from "react";
import type {
  MainCategoryType,
  MenuItemType,
  SubCategoryType,
} from "../types/types";
import {
  activateCategoryApi,
  createCategoryApi,
  deleteCategoryApi,
  getAllCategoriesApi,
  unActivateCategoryApi,
  updateCategoryApi,
} from "../services/categories/categories-apis";
import type { FieldValues } from "react-hook-form";
import {
  createSubCategoryApi,
  getAllSubCategoriesApi,
} from "../services/subCategories/sub-categories-api";
import {
  activateMenuItemApi,
  createMenuItemApi,
  deleteMenuItemApi,
  unActivateMenuItemApi,
  updateMenuItemApi,
} from "../services/menuItems/menu-items";

export const getAllCategories = async (
  setStoreData: (data: MainCategoryType[]) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const response = await getAllCategoriesApi();
    setStoreData(response?.data?.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const getAllSubCategories = async (
  setStoreData: (data: SubCategoryType[]) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  categoryId: string
) => {
  try {
    setIsLoading(true);
    const response = await getAllSubCategoriesApi(categoryId);
    setStoreData(response?.data?.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const addNewCategory = async (
  data: FieldValues,
  addToStore: (data: MainCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const response = await createCategoryApi(data);
    addToStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const updateCategory = async (
  data: FieldValues,
  updateStore: (data: MainCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  categoryId: string
) => {
  try {
    setIsLoading(true);
    console.log("edit:=>>", { data, categoryId });

    const response = await updateCategoryApi(data, categoryId);

    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const removeCategory = async (
  deleteStore: (data: MainCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  categoryId: string
) => {
  try {
    setIsLoading(true);
    const response = await deleteCategoryApi(categoryId);
    deleteStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const publishCategory = async (
  updateStore: (data: MainCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  categoryId: string
) => {
  try {
    setIsLoading(true);

    const response = await activateCategoryApi(categoryId);

    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const unPublishCategory = async (
  updateStore: (data: MainCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  categoryId: string
) => {
  try {
    setIsLoading(true);

    const response = await unActivateCategoryApi(categoryId);

    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const addNewMenuItem = async (
  data: FieldValues,
  addToStore: (data: MenuItemType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);
    const response = await createMenuItemApi(data);
    addToStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const updateMenuItem = async (
  data: FieldValues,
  updateStore: (data: MenuItemType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  menuItemId: string
) => {
  try {
    setIsLoading(true);
    const response = await updateMenuItemApi(data, menuItemId);
    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const removeMenuItem = async (
  deleteStore: (data: MenuItemType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  menuItemId: string
) => {
  try {
    setIsLoading(true);
    const response = await deleteMenuItemApi(menuItemId);
    deleteStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const publishMenuItem = async (
  updateStore: (data: MenuItemType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  itemId: string
) => {
  try {
    setIsLoading(true);
    const response = await activateMenuItemApi(itemId);

    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
export const unPublishMenuItem = async (
  updateStore: (data: MenuItemType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  itemId: string
) => {
  try {
    setIsLoading(true);

    const response = await unActivateMenuItemApi(itemId);

    updateStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

export const addNewSubCategory = async (
  data: FieldValues,
  addToStore: (data: SubCategoryType) => void,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true);

    const response = await createSubCategoryApi(data);
    addToStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

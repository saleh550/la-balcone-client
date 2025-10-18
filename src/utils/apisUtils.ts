import type { Dispatch, SetStateAction } from "react";
import type { MainCategoryType } from "../types/types";
import {
  activateCategoryApi,
  createCategoryApi,
  deleteCategoryApi,
  getAllCategoriesApi,
  unActivateCategoryApi,
  updateCategoryApi,
} from "../services/categories/categories-apis";
import type { FieldValues } from "react-hook-form";

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

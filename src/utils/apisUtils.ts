import type { Dispatch, SetStateAction } from "react";
import type { MainCategoryType } from "../types/types";
import {
  createCategoryApi,
  getAllCategoriesApi,
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
    console.log("addNewCategory response",response);
    
    addToStore(response?.data?.data);
    setIsOpen(false);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

import { type FieldValues } from "react-hook-form";
import { publicRequest } from "../axios/PublicRequest";
import { privateRequest } from "../axios/PrivateRequest";

export const getAllSubCategoriesApi = (id: string) => {
  return privateRequest({
    url: `/api/sub/categories/get/all/sub/categories/${id}`,
    method: "GET",
  });
};

export const getActiveSubCategoriesApi = (id: string) => {
  return publicRequest({
    url: `/api/sub/categories/get/active/sub/categories/${id}`,
    method: "GET",
  });
};

export const createSubCategoryApi = (data: FieldValues) => {
  return privateRequest({
    url: "/api/sub/categories/create/sub/category",
    method: "POST",
    data,
  });
};

import { type FieldValues } from "react-hook-form";
import { publicRequest } from "../axios/PublicRequest";
import { privateRequest } from "../axios/PrivateRequest";

export const getAllCategoriesApi = () => {
  return privateRequest({
    url: "/api/categories/get/all/categories",
    method: "GET",
  });
};

export const getActiveCategoriesApi = () => {
  return publicRequest({
    url: "/api/categories/get/active/categories",
    method: "GET",
  });
};

export const createCategoryApi = (data: FieldValues) => {
  return privateRequest({
    url: "/api/categories/create/category",
    method: "POST",
    data,
  });
};

export const activateCategoryApi = (id: string) => {
  return privateRequest({
    url: `/api/categories/${id}/activate`,
    method: "PATCH",
  });
};

export const unActivateCategoryApi = (id: string) => {
  return privateRequest({
    url: `/api/categories/${id}/unactivate`,
    method: "PATCH",
  });
};

export const deleteCategoryApi = (id: string) => {
  return privateRequest({
    url: `/api/categories/${id}/delete`,
    method: "PATCH",
  });
};

export const updateCategoryApi = (data: FieldValues, id: string) => {
  return privateRequest({
    url: `/api/categories/edit/${id}`,
    method: "PATCH",
    data,
  });
};

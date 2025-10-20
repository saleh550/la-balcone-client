import { type FieldValues } from "react-hook-form";
import { publicRequest } from "../axios/PublicRequest";
import { privateRequest } from "../axios/PrivateRequest";

export const getAllMenuItemsApi = () => {
  return privateRequest({
    url: "/api/menu/items/get/all/menu/items",
    method: "GET",
  });
};

export const getActiveMenuItemsApi = () => {
  return publicRequest({
    url: "/api/menu/items/get/active/menu/items",
    method: "GET",
  });
};

export const createMenuItemApi = (data: FieldValues) => {
  return privateRequest({
    url: "/api/menu/items/create/menu/item",
    method: "POST",
    data,
  });
};

export const activateMenuItemApi = (id: string) => {
  return privateRequest({
    url: `/api/menu/items/activate/menu/item/${id}`,
    method: "PATCH",
  });
};

export const unActivateMenuItemApi = (id: string) => {
  return privateRequest({
    url: `/api/menu/items/unactivate/menu/item/${id}`,
    method: "PATCH",
  });
};

export const deleteMenuItemApi = (id: string) => {
  return privateRequest({
    url: `/api/menu/items/delete/menu/item/${id}`,
    method: "PATCH",
  });
};

export const updateMenuItemApi = (data: FieldValues, id: string) => {
  return privateRequest({
    url: `/api/menu/items/update/menu/item/${id}`,
    method: "PUT",
    data,
  });
};

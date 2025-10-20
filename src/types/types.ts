import type { CategoryStatus } from "./enums";

export type MainCategoryType = {
  id: string;
  englishName: string;
  arabicName: string;
  hebrewName: string;
  image: string;
  createdBy: string;
  status: CategoryStatus;
  createdAt: Date;
  updatedAt: Date;
};
export type MenuItemType = {
  id: string;
  subCategoryId: string;
  englishName: string;
  hebrewName: string;
  arabicName: string;
  englishDescription: string;
  hebrewDescription: string;
  arabicDescription: string;
  image: string;
  price: number;
  isWithMilk: boolean;
  isVegan: boolean;
  isWithGluten: boolean;
  createdBy: string;
  status: CategoryStatus;
  createdAt: Date;
  updatedAt: Date;
};
export type SubCategoryType = {
  id: string;
  categoryId: string;
  englishName: string;
  hebrewName: string;
  arabicName: string;
  menuItems: MenuItemType[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserType = {
  id: string;
  name: string;
  useName: string;
};

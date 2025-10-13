export type MainCategoryType = {
    id: string;
    englishName: string;
    arabicName: string;
    hebrewName: string;
    image: string;
}
export type MenuItemType = {
  id: string;
  subCategoryId: string;
  englishName: string;
  hebrewName: string;
  arabicName: string;
  description: string;
  image: string;
  price: number;
  isAvailable: boolean;
  isPublished: boolean;
  isWithMilk: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
};
export type SubCategoryType = {
  id: string;
  categoryId: string;
  englishName: string;
  hebrewName: string;
  arabicName: string;
  menuItems: MenuItemType[];
};
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
  englishDescription: string;
  hebrewDescription: string;
  arabicDescription: string;
  image: string;
  price: number;
  isAvailable: boolean;
  isPublished: boolean;
  isWithMilk: boolean;
  isVegan: boolean;
  isWithGluten: boolean;
  status:string
};
export type SubCategoryType = {
  id: string;
  categoryId: string;
  englishName: string;
  hebrewName: string;
  arabicName: string;
  menuItems: MenuItemType[];
};
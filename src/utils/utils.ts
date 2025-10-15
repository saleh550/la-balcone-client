export const getName = (currentLanguage: string, names: any) => {
  if (currentLanguage === "en") {
    return names.englishName;
  } else if (currentLanguage === "ar") {
    return names.arabicName;
  } else {
    return names.hebrewName;
  }
};
export const getDescription = (currentLanguage: string, descs: any) => {
  if (currentLanguage === "en") {
    return descs.englishDescription;
  } else if (currentLanguage === "ar") {
    return descs.arabicDescription;
  } else {
    return descs.hebrewDescription;
  }
};

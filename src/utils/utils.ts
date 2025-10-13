export const getName = (currentLanguage: string, names: any) => {
  if (currentLanguage === "en") {
    return names.englishName;
  } else if (currentLanguage === "ar") {
    return names.arabicName;
  } else {
    return names.hebrewName;
  }
};

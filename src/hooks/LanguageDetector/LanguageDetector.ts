import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageDetector = (
  setLang: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);
};

export default LanguageDetector;

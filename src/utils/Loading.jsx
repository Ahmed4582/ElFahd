// loading
import i18next from "i18next";
import { useState, useEffect } from "react";

// word Loading or تحميل

export const LoadingWord = () => {
  const [word, setWord] = useState("Loading");
  useEffect(() => {
    if (i18next.language === "ar") {
      setWord("... تحميل ...");
    } else {
      setWord("... Loading ...");
    }
  }, [i18next.language]);
  return word;
};

// error
export const ErrorWord = () => {
  const [word, setWord] = useState("Error");
  useEffect(() => {
    if (i18next.language === "ar") {
      setWord("خطأ");
    } else {
      setWord("Error");
    }
  }, [i18next.language]);
  return word;
};

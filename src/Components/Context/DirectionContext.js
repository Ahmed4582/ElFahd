import { createContext, useState } from "react";
import { useEffect } from "react";
import i18n from "i18next";

export const DirectionContext = createContext();

export default function DirectionContextProvider({children}){
    // const [dir, setDir] = useState("rtl")

      const [dir, setDir] = useState(i18n.dir());

      useEffect(() => {
        const handleLanguageChange = () => {
          setDir(i18n.dir(i18n.language));
        };

        i18n.on("languageChanged", handleLanguageChange);

        return () => {
          i18n.off("languageChanged", handleLanguageChange);
        };
      }, []);
    return <DirectionContext.Provider value={{dir, setDir}}>
        {children}
    </DirectionContext.Provider>
}
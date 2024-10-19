import { createContext, useState } from "react"
import { useTranslation } from "react-i18next";


export const TranslateContext = createContext();
export default function TranslateContextProvider({ children }) {
    const { i18n } = useTranslation("global")
    const [EnLang , setEnLang] = useState( i18n.language === "en" ? true : false)   
    function handleChangeLang(lang) {
        i18n.changeLanguage(lang)
    }
    return <TranslateContext.Provider value={{ handleChangeLang, EnLang, setEnLang }}>
        {children}
    </TranslateContext.Provider>
}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "mouse-follower/src/scss/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import i18next from "i18next";
import AR_LANG from "./locales/ar/common.json";
import EN_LANG from "./locales/en/common.json";
import { I18nextProvider } from "react-i18next";

// lang
import TranslateContextProvider from "./Components/Context/TranslateContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { GeneralWebsiteDataProvider } from "./Components/Context/Global";
import toast, { Toaster } from "react-hot-toast";
import { NavLinksProvider } from "./Components/Context/NavDataContext";

// react redux
import { Provider } from 'react-redux';
import store from "./store/store";
// react query

// language
AOS.init();
i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                global: EN_LANG,
            },
            ar: {
                global: AR_LANG,
            },
        },
        lng: localStorage.getItem("i18nextLng") || "en",
    });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <TranslateContextProvider>
                <GeneralWebsiteDataProvider>
                    <NavLinksProvider>

                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                            toastOptions={{
                                style: {
                                    padding: "10px",
                                    color: "#fff",
                                    background: "#333",
                                },
                                duration: 3000, // 3 seconds
                            }}
                        />
                        <Provider store={store}>
                            <App />
                        </Provider>

                    </NavLinksProvider>
                </GeneralWebsiteDataProvider>
            </TranslateContextProvider>
        </I18nextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

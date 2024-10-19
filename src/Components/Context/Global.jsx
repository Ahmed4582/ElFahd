import { createContext, useEffect, useState } from "react";
import profileApi from "../../Api/config";
import { useTranslation } from "react-i18next";
/*
{
    "status": 200,
    "message": "this is Setting",
    "data": {
        "id": 1,
        "email": "fahd@gmail.com",
        "mobile": null,
        "mobile2": null,
        "whatsapp": null,
        "facebook": "https://www.facebook.com/",
        "instgram": "https://www.instagram.com/",
        "twitter": "https://www.twitter.com/",
        "behance": "https://www.behance.com/",
        "dribbble": "https://www.dribbble.com/",
        "linkedin": null,
        "youtube": null,
        "website": "http://www.fahd.com",
        "map_url": null,
        "default_lang": "en",
        "created_at": null,
        "updated_at": "2024-01-05T13:36:38.000000Z"
    }
}
*/
const defaultWebsiteData = {
  id: 1,
  email: "",
  mobile: null,
  mobile2: null,
  whatsapp: null,
  facebook: "",
  instgram: "",
  twitter: "",
  behance: "",
  dribbble: "",
  linkedin: null,
  youtube: null,
  website: "",
  map_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3486038594788!2d31.358048876461954!3d30.05554051804328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dafd66227f1%3A0xd0de03f9664f6750!2sAll%20Safe!5e0!3m2!1sen!2seg!4v1715344666833!5m2!1sen!2seg",
  default_lang: "en",
  created_at: null,
  updated_at: "2024-01-05T13:36:38.000000Z",
};

export const Context = createContext(defaultWebsiteData);

export const GeneralWebsiteDataProvider = ({ children }) => {
  const [websiteData, setWebsiteData] = useState(defaultWebsiteData);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // make website data empty
    setWebsiteData(defaultWebsiteData);

    profileApi
      .get("/settings")
      .then((res) => {
        setWebsiteData(res.data.data);
      })
      .catch((err) => {});
  }, [i18n.language]);
  console.log(websiteData);
  return <Context.Provider value={websiteData}>{children}</Context.Provider>;
};

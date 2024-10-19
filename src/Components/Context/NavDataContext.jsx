import { createContext, useEffect, useState } from "react";
import profileApi from "../../Api/config";
import { useTranslation } from "react-i18next";
/*
{
    "status": 200,
    "message": "this is all menuItems",
    "data": [
        {
            "id": 2,
            "name": "Home",
            "type": "home",
            "parent_id": "0",
            "order": "1",
            "child": []
        },
        {
            "id": 3,
            "name": "About us",
            "type": "about-us",
            "parent_id": "0",
            "order": "2",
            "child": []
        },
        {
            "id": 4,
            "name": "Services",
            "type": "services",
            "parent_id": "0",
            "order": "3",
            "child": []
        },
        {
            "id": 7,
            "name": "Contact Us",
            "type": "contact",
            "parent_id": "0",
            "order": "6",
            "child": []
        }
    ]
}
*/
const defaultNavData = [
    {
        id: 2,
        name: "Home",
        type: "home",
        parent_id: "0",
        order: "1",
        child: [],
    },
    {
        id: 3,
        name: "About us",
        type: "about-us",
        parent_id: "0",
        order: "2",
        child: [],
    },
    {
        id: 4,
        name: "Services",
        type: "services",
        parent_id: "0",
        order: "3",
        child: [],
    },
    {
        id: 7,
        name: "Contact Us",
        type: "contact",
        parent_id: "0",
        order: "6",
        child: [],
    },
    ];

export const Context = createContext(defaultNavData);

export const NavLinksProvider = ({ children }) => {
  const [navData, setNavData] = useState(defaultNavData);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // make website data empty
    setNavData(defaultNavData);

    profileApi
      .get("/settings")
      .then((res) => {
        setNavData(res.data.data);
      })
      .catch((err) => {});
  }, [i18n.language]);
  return <Context.Provider value={navData}>{children}</Context.Provider>;
};

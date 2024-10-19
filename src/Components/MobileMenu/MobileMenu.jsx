import React from 'react';
import './mobileMenu.scss'
import { useContext } from 'react';
import { MobileContext } from '../Context/MobileContext';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TranslateContext } from '../Context/TranslateContext';
import { DirectionContext } from '../Context/DirectionContext';
function MobileMenu() {
  const { openMenu ,setOpenMenu } = useContext(MobileContext);
  const { handleChangeLang, EnLang, setEnLang } = useContext(TranslateContext);
  const {setDir} = useContext(DirectionContext)
  const { t } = useTranslation("global")
  return (
    <>
      <div
        className={`mobile-menu w-100 h-100 main-bg position-fixed fixed  ${
          openMenu ? "active" : ""
        }`}
      >
        <ul className="nav-list m-0 list-unstyled d-flex flex-column align-items-center justify-content-center h-100">
          <li className="nav-item my-2" onClick={() => setOpenMenu(!openMenu)}>
            <NavLink className="navlink2 text-decoration-none" to={"/"}>
              {t("navbar.home")}
            </NavLink>
          </li>
          <li className="nav-item my-2" onClick={() => setOpenMenu(!openMenu)}>
            <NavLink className="navlink2 text-decoration-none" to={"/about-us"}>
              {t("navbar.about")}
            </NavLink>
          </li>
          <li className="nav-item my-2" onClick={() => setOpenMenu(!openMenu)}>
            <NavLink className="navlink2 text-decoration-none" to={"/services"}>
              {t("navbar.services")}
            </NavLink>
          </li>
          <li className="nav-item my-2" onClick={() => setOpenMenu(!openMenu)}>
            <NavLink className="navlink2 text-decoration-none" to={"/contact-us"}>
              {t("navbar.contact")}
            </NavLink>
          </li>
          {EnLang ? (
            <li
              onClick={() => {
                handleChangeLang("ar");
                setEnLang(false);
                setDir("rtl");
                setOpenMenu(!openMenu);
              }}
              data-cursor-text={t("navbar.lang")}
            >
              <p className="navlink2 mb-0 text-decoration-none pointer rounded-pill">
                {t("navbar.lang")}
              </p>
            </li>
          ) : (
            <li
              onClick={() => {
                handleChangeLang("en");
                setEnLang(true);
                setDir("ltr");
                setOpenMenu(!openMenu);
              }}
              data-cursor-text={t("navbar.lang")}
            >
              <p className="navlink2 mb-0 text-decoration-none pointer rounded-pill">
                {t("navbar.lang")}
              </p>
            </li>
          )}
          <div className="contact-us d-lg-block my-fixed-element d-none contact-nav rounded-pill">
            <Link
              data-cursor-text={t("navbar.contact")}
              to={"/contact-us"}
              className="text-decoration-none  my-fixed-element main-font text-white mb-0"
            >
              {t("navbar.contact")}
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
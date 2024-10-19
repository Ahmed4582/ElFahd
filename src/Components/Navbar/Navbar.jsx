import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Navbar/navbar.scss'
import logo from '../../assets/images/Frame 773975313.png'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MobileContext } from '../Context/MobileContext';
import { TranslateContext } from '../Context/TranslateContext';
import { DirectionContext } from '../Context/DirectionContext';


function Navbar() {
  const { t } = useTranslation("global")
  const { isMobile, openMenu, setOpenMenu } = useContext(MobileContext);
  const { handleChangeLang, EnLang, setEnLang } = useContext(TranslateContext);
  const {setDir} = useContext(DirectionContext)
  return <>
    <nav className='py-3 bg-transparent fixed-top fixed2'>
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <Link to={'/'} >
            <img src={logo} className='w-100' alt="Fahad" />
          </Link>
        </div>
        <ul className='nav-list m-0 list-unstyled d-lg-flex d-none align-items-center justify-content-between'>
          <li data-cursor-text={t("navbar.home")} className='nav-item my-fixed-element'><NavLink className='navlink text-decoration-none rounded-pill' activeclassname="active" to={'/'}>{t("navbar.home")}</NavLink></li>
          <li data-cursor-text={t("navbar.about")} className='nav-item my-fixed-element'><NavLink className='navlink text-decoration-none rounded-pill' to={'/about-us'}>{t("navbar.about")}</NavLink></li>
          <li data-cursor-text={t("navbar.services")} className='nav-item my-fixed-element'><NavLink className='navlink text-decoration-none rounded-pill' to={'/services'}>{t("navbar.services")}</NavLink></li>
          {EnLang ?
            <li onClick={() => { handleChangeLang("ar"); setEnLang(false); setDir("rtl") }} data-cursor-text={t("navbar.lang")} className='nav-item my-fixed-element'><p className='navlink mb-0 text-decoration-none pointer rounded-pill'>{t("navbar.lang")}</p></li>
            :
            <li onClick={() => { handleChangeLang("en"); setEnLang(true); setDir("ltr") }} data-cursor-text={t("navbar.lang")} className='nav-item my-fixed-element'><p className='navlink mb-0 text-decoration-none pointer rounded-pill'>{t("navbar.lang")}</p></li>
          }

        </ul>
        <div className="contact-us d-lg-block my-fixed-element d-none contact-nav rounded-pill">
          <Link data-cursor-text={t("navbar.contact")} to={'/contact-us'} className='text-decoration-none  my-fixed-element main-font text-white mb-0'>{t("navbar.contact")}</Link>
        </div>
        {isMobile && (
          <div className={`nav-bar-icons  d-flex align-items-end justify-content-center flex-column  ${openMenu ? "menu-open" : ''}`} onClick={() => setOpenMenu(!openMenu)}>
            <div></div>
            <div></div>
          </div>
        )}

      </div>

    </nav>
  </>
}

export default Navbar;
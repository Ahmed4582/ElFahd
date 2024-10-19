import React from "react";
import "./footer.scss";
import frame from "../../assets/images/Frame 773975316.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Context } from "../Context/Global";
import { useContext } from "react";

// react icons


// comp for Icon
const FIcon = ({ icon, link }) => {
  return (
    <li className="mx-2 magnet">
      <a className="text-decoration-none" type="button" href={link}
        target="_blank"
      >
        <div className="social-link d-flex align-items-center rounded-circle p-4 justify-content-center bg-white">
          <i className={`fa-brands fa-${icon} fa-2x text-black`}></i>
        </div>
      </a>
    </li>
  );
};

function Footer() {
  const { t } = useTranslation("global");

  const websiteData  = useContext(Context);
    console.log(websiteData);
  return (
    <>
      <footer className="py-5 text-white mt-5 main-font">
        <div className="container">
          <div className="row g-4 mb-4 justify-content-between">
            <div className="col-lg-4 ps-lg-5">
              <div className="footer-info">
                <div className="footer-logo">
                  <img src={frame} alt="FAHAD" />
                </div>
                <div className="footer-text">
                  <p className="py-4 secondary-text">
                    تعد شركة غزل للمنسوجات شركة مبتكرة في مجال النسيج فقد قامت
                    بتطوير أعمالها بهدف النمو لتصبح مؤسسة بارزة في مجال النسيج و
                    الاقمشة فى الشرق الأوسط.
                  </p>
                </div>
                <div className="footer-social-links">
                  <ul className="d-flex p-0 align-items-center list-unstyled">
                    {/* <li className="mx-2 magnet">
                      <Link className="text-decoration-none">
                        <div className="social-link d-flex align-items-center rounded-circle p-4 justify-content-center bg-white">
                          <i className="fa-brands fa-linkedin-in fa-2x text-black"></i>
                        </div>
                      </Link>
                    </li>
                    <li className="mx-2 magnet">
                      <Link className="text-decoration-none">
                        <div className="social-link d-flex align-items-center rounded-circle p-4 justify-content-center bg-white">
                          <i className="fa-brands fa-twitter fa-2x text-black"></i>
                        </div>
                      </Link>
                    </li>
                    
                    <li className="mx-2 magnet">
                      <Link className="text-decoration-none">
                        <div className="social-link d-flex align-items-center rounded-circle p-4 justify-content-center bg-white">
                          <i className="fa-brands fa-instagram fa-2x text-black"></i>
                        </div>
                      </Link>
                    </li>
                 */}

                    {/*  facebook , wwhatsapp
                    instgram
                    twitter
                    dribble
                    linkedin
                    youtube
                    behance

                    
                    */}

                    {/* icons */}
                    {/* <FIcon icon="facebook" /> */}
                    {websiteData?.facebook && (
                      <FIcon icon="facebook" link={websiteData?.facebook} />
                    )}
                    {websiteData?.instagram && (
                      <FIcon icon="instagram" link={websiteData?.instagram} />
                    )}
                    {websiteData?.twitter && (
                      <FIcon icon="twitter" link={websiteData?.twitter} />
                    )}
                    {websiteData?.linkedin && (
                      <FIcon icon="linkedin" link={websiteData?.linkedin} />
                    )}
                    {websiteData?.youtube && (
                      <FIcon icon="youtube" link={websiteData?.youtube} />
                    )}
                    {websiteData?.behance && (
                      <FIcon icon="behance" link={websiteData?.behance} />
                    )}
                    {websiteData?.whatsapp && (
                      <FIcon icon="whatsapp" link={websiteData?.whatsapp} />
                    )}








                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row justify-content-between">
                <div className="col-6">
                  <h4>{t("footer.links")}</h4>
                  <ul className="p-0 list-unstyled">
                    <li className="secondary-text my-2">
                      <Link
                        className="secondary-text text-decoration-none"
                        to={"/"}
                      >
                        {t("navbar.home")}
                      </Link>
                    </li>
                    <li className="secondary-text my-2">
                      <Link
                        className="secondary-text text-decoration-none"
                        to={"/about-us"}
                      >
                        {t("navbar.about")}
                      </Link>
                    </li>
                    <li className="secondary-text my-2">
                      <Link
                        className="secondary-text text-decoration-none"
                        to={"/services"}
                      >
                        {t("navbar.services")}
                      </Link>
                    </li>
                    <li className="secondary-text my-2">
                      <Link
                        className="secondary-text text-decoration-none"
                        to={"/contact-us"}
                      >
                        {t("navbar.contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>{t("footer.contact")}</h4>
                  <p className="my-5 secondary-text">
                    {t("footer.contact-text")}
                  </p>
                  <p className="mt-5 secondary-text">
                    {/* 01010000000 */}
                    {websiteData?.phone || "010XXXXXXX"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p className="secondary-text py-5 mb-0 text-center">
              {t("footer.cobyrights")}{" "}
              <a href="https://www.allsafeeg.com/en">All Safe</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React, { useContext, useEffect } from "react";
import frame1 from "../../assets/images/Abstract Design.png";
import shadow1 from "../../assets/images/Ellipse 195.png";
import shadow2 from "../../assets/images/Ellipse 196.png";
import img from "../../assets/images/laptob.png";
import { useTranslation } from "react-i18next";
import fram33 from "../../assets/images/AbstractDesign3.png";
import { Fade } from "react-awesome-reveal";
import icon from "../../assets/images/Icon Container.png";
import { Link } from "react-router-dom";
import persone2 from "../../assets/images/d286ebd43e1f30fb3d5ce5e965da8de4.jpg";
import gsap from "gsap";
import { DirectionContext } from "../Context/DirectionContext";

import { useQuery } from "@tanstack/react-query";
import profileApi from "../../Api/config";
import useFetchData from "../../hooks/useFetchData";
import { stripHtml } from "../../utils/htmlParser";
import { LoadingWord, ErrorWord } from "../../utils/Loading";
function Services() {
  const { dir } = useContext(DirectionContext);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let magnets = document.querySelectorAll(".magnet");
    magnets.forEach((magnet) => {
      const xTo = gsap.quickTo(magnet, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnet, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      magnet.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = magnet.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      });
      magnet.addEventListener("mouseleave", (e) => {
        xTo(0);
        yTo(0);
      });
    });
  }, []);
  const { t } = useTranslation("global");

  // get data from api
  const { data: servicesData, loading, error } = useFetchData("/services");

  console.log(servicesData, loading, error);

  return (
    <>
      <section className="py-5 position-relative">
        <img
          src={shadow1}
          alt="vector"
          className="eclipse position-absolute top-0 end-0"
        />
        <div className="container">
          <div className="row gx-lg-0 g-4 rounded-3 flex-lg-nowrap p-4 h-section position-relative">
            <img
              src={frame1}
              alt="fahad"
              className="position-absolute top-0 end-0 my-0 frame-fix"
            />
            <div className="col-lg-7 transs">
              <Fade direction="up" duration={2000}>
                <img src={img} className="w-100 rounded-4" alt="Fahad" />
              </Fade>
            </div>
            <div className="col-lg-5 transs">
              <Fade direction="left" duration={2000}>
                <div className="card-h p-lg-5 p-md-4 p-2">
                  <div className="line mb-5 mt-4"></div>
                  <h2 dir={dir} className="text-white main-font h1">
                    {t("services-page.h")} <br className="d-xlg-block d-none" />
                  </h2>
                  <p dir={dir} className="lead secondary-text my-4">
                    {t("services-page.p")}
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 position-relative">
        <img
          src={shadow2}
          alt="vector"
          className="eclipse position-absolute top-0 start-0 d-md-block d-none"
        />
        <div className="container">
          <Fade direction="up" duration={1500}>
            <div className="main-section-text py-5 text-white text-center main-font">
              <h2>
                {t("sevices.h")} <br />{" "}
                <span className="fw-bold main-text">{t("sevices.span")}</span>
              </h2>
              <div className="py-5 position-relative">
                <p className="mb-0 secondary-text">{t("sevices.p")}</p>
              </div>
            </div>
          </Fade>
          <div className="row g-4">
            <p className="text-center text-secondary">
              {loading && <LoadingWord />}
              {error && <ErrorWord />}
            </p>
            {servicesData &&
              servicesData.map((service) => (
                <div className="col-xxl-4 col-md-6" key={service.id}>
                  <Fade duration={2000}>
                    <Link
                      to={`/services/details/${service.id}`}
                      className="text-decoration-none"
                    >
                      <div
                        data-cursor-text={t("explore")}
                        className="services-card overflow-hidden rounded-4 position-relative"
                      >
                        <img
                          src={service.image}
                          className="w-100"
                          alt="person"
                        />
                        <div className="services-layer p-3 position-absolute top-0 end-0 start-0 bottom-0">
                          <div className="text-center py-2 px-3">
                            <img src={icon} alt="icon" />
                            <h5 className="py-2 main-font text-white">
                              {service.name}
                            </h5>
                            <p className="secondary-text py-2 mb-0 main-font">
                              {stripHtml(service.short_desc)}
                              <br />
                              {stripHtml(service.text)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <Fade direction="left" duration={1500}>
            <div className="contact-us-footer d-flex align-items-center justify-content-between overflow-hidden z-1 position-relative">
              <img
                src={fram33}
                alt="frame"
                className="position-absolute start-0 top-0 eclipse"
              />
              <div className="contact-us-footer-text text-white main-font fw-bold">
                <h2>
                  {t("contact-us-footer.h")}{" "}
                  <span className="main-text">
                    {t("contact-us-footer.span")}
                  </span>
                </h2>
                <p className="secondary-text my-3">
                  {t("contact-us-footer.p")}
                </p>
              </div>
              <Link to={"/contact-us"} className="text-decoration-none">
                <button className="my-4 magnet contact-btn-footer px-3 py-2 rounded-3 main-bg">
                  <p className="mb-0 text-white main-font">{t("header.btn")}</p>
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Services;

import React, { useContext, useEffect } from 'react';
import frame1 from '../../assets/images/Abstract Design.png';
import shadow1 from '../../assets/images/Ellipse 195.png';
import shadow2 from '../../assets/images/Ellipse 196.png';
import img from '../../assets/images/people.png';
import meet from '../../assets/images/meet.jpg'
import fram33 from '../../assets/images/AbstractDesign3.png'
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { DirectionContext } from '../Context/DirectionContext';


// api
import profileApi from "../../Api/config";
import useFetchData from "../../hooks/useFetchData";
import { LoadingWord, ErrorWord } from "../../utils/Loading";
import { stripHtml } from "../../utils/htmlParser";

function AboutUs() {
  const {dir} = useContext(DirectionContext)
  const { t } = useTranslation("global")
  useEffect(() => {
    window.scrollTo(0, 0);
    let magnets = document.querySelectorAll('.magnet')
    magnets.forEach(magnet => {
      const xTo = gsap.quickTo(magnet, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
      const yTo = gsap.quickTo(magnet, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })
      magnet.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = magnet.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      })
      magnet.addEventListener('mouseleave', (e) => {
        xTo(0);
        yTo(0);
      })
    })
  }, [])


//   data 
    const { data: aboutUsData, loading, error } = useFetchData("/about-struc");

  return (
    <>
      <section className="py-5 position-relative"
        style={{overflow: 'hidden'}}
      >
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
            <div className="mt-lg-4 col-lg-7 transs"
                style={{marginTop: '15%'}}
            >
              <Fade direction="up" duration={2000}>
                <img src={img} className="w-100 rounded-4" alt="Fahad" />
              </Fade>
            </div>
            <div className="col-lg-5 transs">
              <Fade direction="left" duration={2000}>
                <div className="card-h p-lg-5 p-md-4 p-2">
                  <div className="line mb-5 mt-4"></div>
                  <h2 dir={dir} className="text-white main-font h1">
                    {t("about-us.h")} <br className="d-xlg-block d-none" />
                  </h2>
                  <p dir={dir} className="lead secondary-text my-4">
                    {t("about-us.p")}
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 position-relative">
        <img
          src={shadow1}
          alt="vector"
          className="eclipse position-absolute bottom-0 end-0"
        />
        <img
          src={shadow2}
          alt="vector"
          className="eclipse position-absolute top-50 start-0 d-md-block d-none"
        />
        <div className="container">
          <Fade direction="up" duration={1500}>
            <div className="main-section-text py-5 text-white text-center main-font">
              <h2>
                {t("our_vision.h")} <br />{" "}
                <span className="fw-bold main-text">
                  {t("our_vision.span")}
                </span>
              </h2>
            </div>
          </Fade>

          {aboutUsData?.length > 0 &&
            aboutUsData?.map((about, index) => (
              <Fade
                direction={index % 2 === 0 ? "right" : "left"}
                key={index}
                duration={2000}
              >
        
                <div className="row align-items-center py-4 vision-wrab g-4">
                  <div
                    className={`col-md-7 ${
                      index % 2 !== 0 ? "order-md-2" : ""
                    }`}
                  >
                    <div className="vision-text main-font text-white">
                      <h3>
                        {loading ? (
                          <LoadingWord />
                        ) : error ? (
                          <ErrorWord />
                        ) : (
                          about.name ? stripHtml(about.name) : t("no-data")
                        )}
                      </h3>
                      <p className="my-4 secondary-text">
                        {" "}
                        {/* يعمل أعضاء فريق المحاماة بشكل متعاون ومنسق لتحقيق أهداف
                        العميل وتقديم النصح القانوني الشامل والمتخصص */}
                        {loading ? (
                          <LoadingWord />
                        ) : error ? (
                          <ErrorWord />
                        ) : (
                          about.text? stripHtml(about.text): t("no-data")
                        )}
                      </p>
                      <p className="my-4 secondary-text">
                        {/* يتمتع أعضاء الفريق بمهارات قانونية عالية وفهم عميق
                        للنظام القانوني والإجراءات القانونية المطبقة */}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col-md-5 ${
                      index % 2 !== 0 ? "order-md-1" : ""
                    }`}
                  >
                    <div className="vision-image rounded-4 ps-5 pe-5 pt-5">
                      <img
                        src={about.image}
                        alt="meet"
                        className="w-100 rounded-top-4"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            ))}

            {aboutUsData?.length === 0 && <p className="text-center text-secondary">
              {loading && <LoadingWord />}
              {error && <ErrorWord />}
              {t("no-data")}
            </p>}

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

export default AboutUs;
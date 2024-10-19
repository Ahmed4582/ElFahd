import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import arrows from "../../assets/images/Group.png";
import "./home.scss";
import img from "../../assets/images/Image.png";
import frame1 from "../../assets/images/Abstract Design.png";
import vecLeft from "../../assets/images/Vector1.png";
import vecRight from "../../assets/images/Vector.png";
import shadow1 from "../../assets/images/Ellipse 195.png";
import shadow2 from "../../assets/images/Ellipse 196.png";
import icon from "../../assets/images/Icon Container.png";
import fram33 from "../../assets/images/AbstractDesign3.png";
import rating from "../../assets/images/Rating.png";
import grass from "../../assets/images/c22571d8343bdf6f725670c25cc6b510.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import persone1 from "../../assets/images/person1.png";
import persone2 from "../../assets/images/d286ebd43e1f30fb3d5ce5e965da8de4.jpg";
import video from "../../assets/images/463932_law_lawyer_businessman_191212Lightboard4k021720p5000br.mp4";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { DirectionContext } from "../Context/DirectionContext";

// star icon
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
// api
import profileApi from "../../Api/config";
import useFetchData from "../../hooks/useFetchData";
import { LoadingWord, ErrorWord } from "../../utils/Loading";
import { stripHtml } from "../../utils/htmlParser";

// context 
import { Context } from "../Context/Global";

// component to takke number of stars aand return the shape of stars with icons
// HALF star or FULL star
const Stars = ({ number }) => {
  let stars = [];
  const fullStars = Math.floor(number);
  const hasHalfStar = number % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<StarIcon key={i} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <StarHalfIcon
          key={i}
          // reverse
          style={{ transform: "scaleX(-1)" }}
        />
      );
    } else {
      stars.push(<StarOutlineIcon key={i} />);
    }
  }
  return <div>{stars}</div>;
};

/// functiolnt to take index and return right or left or up or down
const direction = (index) => {
  // if (idex === 0) return "right";
  // if (idex === 1) return "left";
  // return index % 2 === 0 ? "right" : "left";
  switch (index) {
    case 0:
      return "right";
    case 1:
      return "null";
    case 2:
      return "left";
    case 3:
      return "right";
    case 4:
      return "null";
    case 5:
      return "left";
    case 6:
      return "bottom";
    case 7:
      return "bottom";
    default:
      return "right";
  }
};

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const { dir } = useContext(DirectionContext);
  const container = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const text = useRef(null);
  const websiteData = useContext(Context);


  //   reviews data
  const { data: reviewsData, loading, error } = useFetchData("/clients");

  // services data
  const { data: servicesData } = useFetchData("/services");

  // about us data
  const { data: aboutUsData } = useFetchData("/about-us");

  // about us values
  const { data: aboutUsValues } = useFetchData("/about-values");

  useEffect(() => {
    let magnets = document.querySelectorAll(".magnet");
    console.log(magnets);
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
  }, [websiteData , reviewsData, servicesData, aboutUsData, aboutUsValues]);

  const { t } = useTranslation("global");

  return (
    <>
      <header className="header">
        <div className="container">
          <div ref={text} className="row  min-vh-100 align-items-center">
            <div className="col-lg-8">
              <div className="header-text">
                <Fade direction="up" duration={2000}>
                  <h1 className="text-white main-font fw-bold">
                    {t("header.head")}
                  </h1>
                  <p className="mb-0 secondary_text secondary-font">
                    {t("header.p")}
                  </p>
                </Fade>
                <Fade direction="up" duration={2000} delay={500}>
                  <Link to={"/contact-us"} className="text-decoration-none">
                    <button className="my-4 main-btn main-bg magnet">
                      <p className="mb-0 text-white main-font">
                        {t("header.btn")}
                      </p>
                    </button>
                  </Link>
                </Fade>
              </div>
            </div>
            <div
              className="col-lg-4 d-lg-block
                order-first mt-4 pt-4 order-lg-last
             "
            >
              <div
                className=" mx-auto
                flex justify-content-center align-items-center
              "
                style={{ direction: "rtl" }}
              >
                <img
                  src={arrows}
                  className="
                    
                  w-lg-100 bottomRight-to-topLeft"
                  alt="arrows"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section ref={container} className="py-5 position-relative">
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
            <div ref={image1} className="col-lg-7 transs">
              <Fade direction="up" duration={2000}>
                <img src={img} className="w-100" alt="Fahad" />
              </Fade>
            </div>
            <div ref={image2} className="col-lg-5 transs">
              <Fade direction="left" duration={2000}>
                <div className="card-h p-lg-5 p-md-4 p-2">
                  <div className="line mb-5 mt-4"></div>
                  <h2 dir={dir} className="text-white main-font h1">
                    {t("1section.h")} <br className="d-xlg-block d-none" />{" "}
                    <span>{t("1section.span")}</span>
                  </h2>
                  <p dir={dir} className="lead secondary-text my-4">
                    {t("1section.p")}
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="py-5 position-relative">
        <img
          src={shadow1}
          alt="vector"
          className="eclipse position-absolute top-50 end-0"
        />
        <img
          src={shadow2}
          alt="vector"
          className="eclipse position-absolute top-0 start-0 d-md-block d-none"
        />
        <div className="container">
          <Fade direction="up" duration={1500}>
            <div className="main-section-text py-5 text-white text-center main-font">
              <h2>
                {t("rates.h")} <br />{" "}
                <span className="fw-bold main-text">{t("rates.span")}</span>
              </h2>
              <div className="py-5 position-relative">
                <img
                  src={vecLeft}
                  alt=","
                  className="position-absolute start-0 top-0"
                />
                <img
                  src={vecRight}
                  alt=","
                  className="position-absolute end-0 bottom-0"
                />
                <p className="mb-0 secondary-text">{t("rates.p")}</p>
              </div>
            </div>
          </Fade>

          <div
            className="row justify-content-center rate-content g-xxl-5 g-4"
            style={{ overflow: "hidden" }}
          >
            {reviewsData &&
              reviewsData.map((review, index) => (
                <>
                  <div className="col-xxl-4 col-lg-6 magnet" key={index}>
                    <Fade
                      duration={2000}
                      direction={direction(index)}
                      data-cursor-text={t("explore")}
                      key={index}
                    >
                      <div className="row g-xxl-5 g-1 rate-card align-items-center">
                        <div className="col-3">
                          <div className="rate-img overflow-hidden rounded-circle">
                            <img
                              src={review.image}
                              alt="person"
                              className="w-100 position-relative"
                            />
                          </div>
                        </div>
                        <div className="col-9 rate-text p-3 px-4">
                          <h3 className="main-font text-white">
                            {review.title}
                          </h3>
                          <div
                            style={{ color: "#A34DEC" }}
                            className="d-flex align-items-center"
                          >
                            <Stars number={review.stars} />
                          </div>

                          <p className="py-4 secondary-text main-font px-3">
                            {stripHtml(review.text)}
                          </p>
                          <h5 className="text-white main-font">
                            {review.name}
                          </h5>
                          <h6 className="secondary-text main-font">
                            {review.position}
                          </h6>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </>
              ))}
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
          <div className="row g-4" style={{ overflow: "hidden" }}>
            {servicesData &&
              servicesData.map((service, index) => (
                <div className="col-xxl-4 col-md-6" key={index}>
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
          <p className="text-white main-font text-start pt-5">
            {t("see_more.p")}{" "}
            <Link className="text-info text-decoration-none" to={"/services"}>
              {t("see_more.a")}
            </Link>
          </p>
        </div>
      </section>

      {/* about us section */}
      <section className="py-5 position-relative">
        <img
          src={shadow1}
          alt="vector"
          className="eclipse position-absolute bottom-0 end-0"
        />
        <div className="container">
          <Fade direction="up" duration={1500}>
            <div className="main-section-text py-5 text-white text-center main-font">
              <h2>
                {t("about_office.h")} <br />{" "}
                <span className="fw-bold main-text">
                  {t("about_office.span")}
                </span>
              </h2>
              <div className="py-5 position-relative">
                <p className="mb-0 secondary-text">{t("about_office.p")}</p>
              </div>
            </div>
          </Fade>
          {aboutUsData && (
            <Fade duration={2500}>
              <div className="row h-section p-4 rounded-4 position-relative">
                <img
                  src={frame1}
                  alt="fahad"
                  className="position-absolute top-0 end-0 my-0 frame-fix"
                />
                {/* <div className="col-12" data-cursor-video={aboutUsData?.video}> */}
                <div className="col-12">
                  <Fade direction="left" duration={2000}>
                    <video
                      src={aboutUsData?.video}
                      muted
                      controls
                      className="w-100 rounded-4"
                    ></video>
                  </Fade>
                </div>
              </div>
            </Fade>
          )}
        </div>
      </section>

      {/* vision */}
      <section className="p-5 position-relative" style={{ overflow: "hidden" }}>
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

          {aboutUsValues &&
            aboutUsValues.map((value, index) => (
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
                        ) : value.text ? (
                          stripHtml(value.name)
                        ) : (
                          t("no-data")
                        )}
                      </h3>
                      <p className="my-4 secondary-text">
                        {loading ? (
                          <LoadingWord />
                        ) : error ? (
                          <ErrorWord />
                        ) : value.text ? (
                          stripHtml(value.text)
                        ) : (
                          t("no-data")
                        )}
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
                        src={grass}
                        alt="grass"
                        className="w-100 rounded-top-4"
                      />
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
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
                <button 

                className="my-4  contact-btn-footer px-3 py-2 rounded-3 main-bg magnet">
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

export default Home;

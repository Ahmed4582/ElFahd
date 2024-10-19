import React, { useEffect } from "react";
import shadow1 from "../../assets/images/Ellipse 195.png";
import shadow2 from "../../assets/images/Ellipse 196.png";
import grass from "../../assets/images/law.png";
import fram33 from "../../assets/images/AbstractDesign3.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { stripHtml } from "../../utils/htmlParser";
import { LoadingWord, ErrorWord } from "../../utils/Loading";
import { useNavigate } from "react-router-dom";
function ServiceDetails() {
  const { t } = useTranslation("global");
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

  const navigate = useNavigate();
  //   get data with id
  const { id } = useParams();
  console.log(id);

  const { data: serviceData, loading, error } = useFetchData(`/service/${id}`);
  console.log(serviceData, loading, error);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="service-header rounded-4 py-4 mt-5">
            <h2 className="text-center main-font text-white">
              {/* الخدمات القانونية  لمجال العقارات */}
              {/* {serviceData?.name} */}
                {loading ? <LoadingWord /> : error ? <ErrorWord /> : serviceData?.name}
            </h2>
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
        <div className="container serv-details">
          {/* main desc */}
          <Fade direction="right" className="fade" duration={2000}>
            <div className="row align-items-center py-4 serv-details-wrab g-4">
              <div className="col-md-6">
                <div className="serv-details-text main-font text-white">
                  <p className="my-3 secondary-text">
                    {stripHtml(serviceData?.short_desc)}
                    <br />
                    {stripHtml(serviceData?.text)}
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={`${serviceData?.image}/${id}`}
                  alt="grass"
                  className="w-100 rounded-4"
                />
              </div>
            </div>
          </Fade>

          {/*  "child": [
            {
                "id": 12,
                "name": "Child Service",
                "short_desc": null,
                "text": null,
                "image": "https://www.web-allsafeeg.com/fahd/uploads/services/51853434.png"
            },
            {
                "id": 13,
                "name": "neew",
                "short_desc": null,
                "text": null,
                "image": "https://www.web-allsafeeg.com/fahd/uploads/no_image.jpg"
            }
        ] */}

          {/* children */}

          {/* suggestion services */}
          <h2 className="text-center main-font text-white my-5">
            {t("service.suggestion-services")}
          </h2>

          {serviceData?.child?.length > 0 &&
            serviceData?.child.map((child) => (
              <Fade
                direction={child.id % 2 === 0 ? "left" : "right"}
                className="fade"
                duration={2000}
              >
                <div
                  className="row align-items-center py-4 serv-details-wrab g-4"
                    role="button"
                  onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    
                    navigate(`/services/details/${child.id}`);
                  }}
                >
                  <div className="col-md-6">
                    <div className="serv-details-text main-font text-white">
                      <p className="my-3 secondary-text">
                        {stripHtml(child.short_desc)}
                        <br />
                        {stripHtml(child.text)}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={child.image}
                      alt="grass"
                      className="w-100 rounded-4"
                    />
                  </div>
                </div>
              </Fade>
            ))}

          {serviceData?.child?.length === 0 && (
            <p className="text-center text-secondary">
              {t("service.no-suggestion-services")}
            </p>
          )}
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

export default ServiceDetails;

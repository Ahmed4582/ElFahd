import React, { useEffect, useState, useContext } from 'react';
import './contactUs.scss'
import facebook from "../../assets/images/Icon Container (1).png"
import google from "../../assets/images/Icon Container (2).png"
import linkedin from "../../assets/images/Icon Container3.png"
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { Fade } from 'react-awesome-reveal';
    
import { Context } from '../Context/Global';
// api
import profileApi from "../../Api/config";
import useFetchData from "../../hooks/useFetchData";
import { LoadingWord, ErrorWord } from "../../utils/Loading";
import { stripHtml } from "../../utils/htmlParser";


// hot toast
import toast, { Toaster } from "react-hot-toast";

function ContactUs() {
      const { t } = useTranslation("global")
        const websiteData = useContext(Context);
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





  const [submitLoading, setSubmitLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    

  // function to post 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    const form = e.target;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const subject = data.get("subject");
    const message = data.get('message');
    try {
      await profileApi.post("/save-contactus", {
        name,
        email,
        phone,
        subject,
        message,
      });
        setSubmitLoading(false);
        toast.success("Your message has been sent successfully");
      form.reset();
      setSubmitError(false);
    } catch (error) {
      console.log(error);
        setSubmitError(true);
        setSubmitLoading(false);
        toast.error("Something went wrong, please try again later");
    }
  }

  return (
    <>
      <section className="py-5">
        <div className="container">
          <Fade duration={2000}>
            <div className="contact-us-form mt-5 p-5 main-font rounded-4">
              <div className="form-header text-center">
                <h5 className="main-text fw-bold">
                  {t("contact-us-page.p-green")}
                </h5>
                <h2 className="text-white fw-bold py-2">
                  {t("contact-us-page.h")}
                </h2>
                <p className="secondary-text fw-bold">
                  {t("contact-us-page.p")}
                </p>
              </div>

              <form className="py-5" onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <Fade direction="up" delay={100} duration={500}>
                      <input
                        name="name"
                        required
                        type="text"
                        placeholder={t("placeholders.name")}
                        className="w-100 px-4 rounded-pill py-3"
                        disabled={submitLoading}
                      />
                    </Fade>
                  </div>
                  <div className="col-md-6">
                    <Fade direction="up" delay={200} duration={500}>
                      <input
                        name="email"
                        required
                        type="email"
                        placeholder={t("placeholders.email")}
                        className="w-100 px-4 rounded-pill py-3"
                        disabled={submitLoading}
                      />
                    </Fade>
                  </div>
                  <div className="col-md-6">
                    <Fade direction="up" delay={400} duration={500}>
                      <input
                        name="phone"
                        required
                        type="number"
                        placeholder={t("placeholders.phone")}
                        className="w-100 px-4 rounded-pill py-3"
                        disabled={submitLoading}
                      />
                    </Fade>
                  </div>
                  <div className="col-md-6">
                    <Fade direction="up" delay={500} duration={500}>
                      <input
                        name="subject"
                        required
                        type="text"
                        placeholder={t("placeholders.object")}
                        className="w-100 px-4 rounded-pill py-3"
                        disabled={submitLoading}
                      />
                    </Fade>
                  </div>
                  <div className="col-12">
                    <Fade direction="up" delay={600} duration={500}>
                      <textarea
                        name="message"
                        required
                        placeholder={t("placeholders.message")}
                        className="w-100 py-3 px-4 rounded-4"
                        cols="30"
                        rows="10"
                        disabled={submitLoading}
                      ></textarea>
                    </Fade>
                  </div>
                </div>
                <Fade delay={400} duration={500}>
                  <div className="submit-button text-center">
                    <button
                      type="submit"
                      disabled={submitLoading}
                      className={`my-4
                      
                        ${submitLoading ? "" : "main-btn main-bg"}
                        `}
                    >
                      <p className="mb-0 text-white main-font">
                        {submitLoading
                          ? t("placeholders.loading")
                          : t("placeholders.send")}
                      </p>
                    </button>
                    {submitError && (
                      <p className="text-danger">{t("placeholders.error")}</p>
                    )}
                  </div>
                </Fade>
              </form>
            </div>
          </Fade>
          <ul className="mt-5 p-0 d-flex justify-content-center">
            <li className="d-flex align-items-center mx-2">
              <span className="text-white main-font">
                {/* hello@skillbirdge.com */}
                {websiteData?.email || "fahd@fahd.com"}
              </span>
              <i className="fa-solid fa-envelope main-text mx-1"></i>
            </li>
            <li className="d-flex align-items-center mx-2">
              <a
                className="text-white main-font"
                href={`tel:${websiteData?.mobile}`}
              >
                {/* +91 91813 23 2309 */}
                {websiteData?.mobile || "01xxxxxxxxx"}
                {/* {websiteData?.mobile2} */}
              </a>
              <a
                className="text-white main-font"
                href={`tel:${websiteData?.mobile2}`}
              >
                {/* +91 91813 23 2309 */}
                {websiteData?.mobile2}
              </a>

              <i className="fa-solid fa-phone main-text mx-1"></i>
            </li>
            {/* <li className="d-flex align-items-center mx-2">
              <span className="text-white main-font">
              </span>
              <i className="fa-solid fa-location-dot main-text mx-1"></i>
            </li> */}
          </ul>
        </div>
      </section>
      <section className="py-5">
        <Fade direction="up" duration={1500}>
          <div className="text-center main-font">
            <h3 className="fw-bold text-white">{t("location.h")}</h3>
            <p className="mt-3 secondary-text fw-bold">{t("location.p")}</p>
          </div>
        </Fade>
        <Fade duration={1500}>
          <div className="map py-5">
            <iframe
              className="w-100"
              src={
                websiteData?.map_url ||
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3486038594788!2d31.358048876461954!3d30.05554051804328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583dafd66227f1%3A0xd0de03f9664f6750!2sAll%20Safe!5e0!3m2!1sen!2seg!4v1715344666833!5m2!1sen!2seg"
              }
              height="650"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default ContactUs;
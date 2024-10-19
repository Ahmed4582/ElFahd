import './App.scss';
import { RouterProvider, createBrowserRouter, createHashRouter, } from 'react-router-dom';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import ContactUs from './Components/ContactUs/ContactUs';
import Scrollbar from 'smooth-scrollbar';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import { useEffect, useState } from 'react';
import MobileContextProvider from './Components/Context/MobileContext';
import DirectionContextProvider from './Components/Context/DirectionContext';
function App() {

  const Routing = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'services', element: <Services /> },
        { path: 'contact-us', element: <ContactUs /> },
        { path: 'services/details/:id', element: <ServiceDetails /> }
      ]
    }
  ])


  useEffect(() => {
    const fixed = document.querySelector(".fixed")
    const fixed2 = document.querySelector(".fixed2")
    const scrollbar = Scrollbar.init(document.body, {
      damping: 0.05,
      syncCallbacks: true,
    });

    scrollbar.addListener(({ offset }) => {
      fixed.style.top = offset.y + 'px';
      fixed2.style.top = offset.y + 'px';
    });


    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      speed: 1,
      className: 'mf-cursor',
      textClassName: 'mf-cursor-text',
      skewing: 0,
      skewingText: 1,
    });
    const elList = document.querySelectorAll('.my-fixed-element');

    for (let i = 0; i < elList.length; i++) {
      const el = elList[i];

      el.addEventListener('mouseenter', () => {
        cursor.setStick(el);
      });

      el.addEventListener('mouseleave', () => {
        cursor.removeStick();
      });
    }
  }, [])
  return <>
    <DirectionContextProvider>
      <MobileContextProvider>
        <RouterProvider router={Routing}></RouterProvider>
      </MobileContextProvider>
    </DirectionContextProvider>
  </>
}

export default App;

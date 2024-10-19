import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import elipse from '../../assets/images/Ellipse 194.png'
import MobileMenu from '../MobileMenu/MobileMenu';
import { ReactLenis, useLenis } from 'lenis/react'
import Footer from '../Footer/Footer';
import { DirectionContext } from '../Context/DirectionContext';

function Layout() {
  const {dir} = useContext(DirectionContext)
  return (
    <>
      <MobileMenu />
      <div dir={dir} className=' position-relative ' id='scroll'>
        <Navbar />
        <Outlet />
        <Footer />
        <img src={elipse} alt="eclipse" className='position-absolute d-md-block d-none start-0 eclipse top-0' />
      </div>
    </>
  );
}

export default Layout;

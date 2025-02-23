/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const MainLayout = ({ children, logoClassText }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-dark.png"); // Logo berwarna
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo-light.png"); // Logo hitam putih
      }
    };

    handleScroll(); // Pastikan logo benar saat pertama kali render
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarRef]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Navbar
        navbarRef={navbarRef}
        logoRef={logoRef}
        logoClass={logoClassText}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

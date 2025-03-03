import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simply Creation</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* ✅ Meta Tag SEO Biasa */}
        <meta
          name="keywords"
          content="CV Simply Creation, rotan furniture Cirebon, furniture rotan, kursi rotan, meja rotan, sofa rotan, kerajinan rotan Cirebon, dekorasi rotan, desain interior rotan, home decor rotan, perabot rotan, rotan berkualitas, handmade furniture, eco-friendly furniture, mebel rotan Cirebon, outdoor furniture, indoor furniture, custom furniture rotan, pengrajin rotan Cirebon, produk rotan unik, industri rotan Cirebon"
        />
        <meta
          name="description"
          content="CV Simply Creation is a Cirebon-based company specializing in high-quality rattan furniture. Our designs combine traditional craftsmanship with modern innovation, offering unique and sustainable furniture solutions for your home or business."
        />
        <meta name="author" content="Simply Creation" />

        {/* ✅ Open Graph Meta Tags untuk Social Media Preview */}
        <meta
          property="og:title"
          content="Simply Creation - Rattan Furniture Cirebon"
        />
        <meta
          property="og:description"
          content="High-quality rattan furniture combining craftsmanship with modern design."
        />
        <meta property="og:image" content="/assets/img/ojan.png" />
        <meta property="og:url" content="https://simplycreation.id" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Simply Creation - Rattan Furniture Cirebon"
        />
        <meta
          name="twitter:description"
          content="High-quality rattan furniture combining craftsmanship with modern design."
        />
        <meta name="twitter:image" content="/assets/img/ojan.png" />
      </Head>

      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;

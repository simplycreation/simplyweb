import React from "react";
import Head from "next/head";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video2 from "../../components/Video2";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services7 from "../../components/Services7";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });

  return (
    <MainLayout>
      <Head>
        <title>Simply Creation - Rattan Furniture Cirebon</title>
        <meta
          name="keywords"
          content="CV Simply Creation, rotan furniture Cirebon, furniture rotan, kursi rotan, meja rotan, sofa rotan, kerajinan rotan Cirebon, dekorasi rotan, desain interior rotan, home decor rotan, perabot rotan, rotan berkualitas, handmade furniture, eco-friendly furniture, mebel rotan Cirebon, outdoor furniture, indoor furniture, custom furniture rotan, pengrajin rotan Cirebon, produk rotan unik, industri rotan Cirebon"
        />
        <meta
          name="description"
          content="Simply Creation is a Cirebon-based company specializing in high-quality rattan furniture. Our designs combine traditional craftsmanship with modern innovation, offering unique and sustainable furniture solutions for your home or business."
        />
      </Head>

      <IntroWithHorizontal />
      <AboutUs8 />
      <Services7 />
      <WorkWithoutFilter />
      <Video2 />
      <Team3 />
      <Testimonials1 bigTitle />
      <Blogs3 smallTitle />
    </MainLayout>
  );
};

export default Home7;

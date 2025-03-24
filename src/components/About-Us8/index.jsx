/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Company</h3>
            </div>
            <div className="box">
              <h2 className="fz-40 fw-600 ls1 mb-20">
                11 years <br /> of Experience
              </h2>
              <p>
                With 11 years of experience, Simply Creation specializes in
                crafting high-quality rattan furniture, including dining sets,
                accessories, occasional pieces, sofas, and stools. Blending
                traditional craftsmanship with modern design, we create durable
                and elegant pieces that bring warmth and style to any space.
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/about1.png" alt="" />

            <div className="feat mt-30">
              <div className="item">
                <div>
                  <h5>01</h5>
                  <h6>Innovative Design</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>02</h5>
                  <h6>Classic And Modern Design</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>03</h5>
                  <h6>Elegant And Unique Design</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;

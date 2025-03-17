/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs5 = () => {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="section-head">
          <h3>Our Certificate</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/assets/img/certif2.jpeg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a className="tag">
                      <span>Certified</span>
                    </a>
                  </div>
                  <h5>Indonesian Legal Wood</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/assets/img/certif1.png" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <a className="tag">
                      <span>Certified</span>
                    </a>
                  </div>
                  <h5>Sedex | Smeta</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs5;

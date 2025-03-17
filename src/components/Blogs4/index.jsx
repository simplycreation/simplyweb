/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs4 = () => {
  return (
    <section className="cls-blog section-padding position-re">
      <div className="container">
        <div className="main-header text-center">
          <h3>Our Certificate</h3>
          <div className="tex-bg">Blog</div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="item md-mb50">
              <div className="img">
                <img src="/assets/img/certif2.jpeg" alt="" />

                <div className="tag">
                  <h7>Certified</h7>
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <h6>Indonesian Legal Wood</h6>
                </div>
                <h5>
                  <Link href="/blog-details">
                    <a>Wood For Better Future</a>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item md-mb50">
              <div className="img"></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="img">
                <img src="/assets/img/certif1.png" alt="" />

                <div className="tag">
                  <h7>Certified</h7>
                </div>
              </div>
              <div className="cont">
                <div className="info">
                  <h6>Smeta | Sedex</h6>
                </div>
                <h5>Smeta the Sedex Members</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs4;

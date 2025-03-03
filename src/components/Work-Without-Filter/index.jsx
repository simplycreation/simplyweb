/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkWithoutFilter = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-md-6 items mt-0">
              <div className="main-header mb-0">
                <h3>Works.</h3>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dining.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/work2">Dinning</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/sofa.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/work2">Sofa</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/work2">Stool</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occasional.png" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/work2">Occasional</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 items">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className={`cont ${vis ? "vis" : ""}`}>
                  <span>Architecture</span>
                  <span>Modern</span>
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkWithoutFilter;

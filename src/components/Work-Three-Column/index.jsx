/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".sofa">Sofa</span>
              <span data-filter=".dinning">Dinning</span>
              <span data-filter=".occasional">Occasional</span>
              <span data-filter=".stool">Stool</span>
              <span data-filter=".accesroies">Accesories</span>
              <span data-filter=".others">Others</span>
              <span data-filter=".gdrive">Gdrive</span>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dining.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Dinning</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/sofa.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Sofa</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items stool">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Stool</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occasional.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Occasional</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            {/*<div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/4.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/6.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/5.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;

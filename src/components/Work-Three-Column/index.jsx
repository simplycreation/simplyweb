/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) {
        const iso = new window.Isotope(".gallery", {
          itemSelector: ".items",
          layoutMode: "fitRows",
          filter: ".sofa", // Filter default ke "sofa" ketika halaman pertama kali dimuat
        });

        // Menambahkan event listener untuk tombol filter
        const filterButtons = document.querySelectorAll(".filter span");
        filterButtons.forEach((button) => {
          button.addEventListener("click", (event) => {
            // Hapus class 'active' dari tombol filter yang sebelumnya aktif
            filterButtons.forEach((btn) => btn.classList.remove("active"));

            // Tambahkan class 'active' pada tombol yang dipilih
            event.target.classList.add("active");

            // Atur filter pada Isotope sesuai tombol yang dipilih
            const filterValue = event.target.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
          });
        });
      }
    }, 1000);
  }, []);

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter=".sofa" className="active">
                Sofa
              </span>
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
                  <img src="/assets/img/works/col/dinning1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Alexa Chair</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Reno Chair</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/sofa.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Sofa</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Shansi Chair A</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Shansi Chair B</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Miguel Chair</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items others">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/others1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Side Board</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items others">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/others2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Vanity Table</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items others">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/others3.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Vintage Shelf</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items others">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/others4.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Reno Shelf</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items stool">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool1.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Alexa Counter Stool</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items stool">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool2.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Luna Bar Stool</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;

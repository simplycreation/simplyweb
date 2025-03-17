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
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSftp8nuNsLz5V3-utt7xYlq7bKDM7DILlmQtxcNZlQgi63XHw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-600 hover:underline"
              >
                More Catalog
              </a>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning1.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Becca</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning2.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Boas</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning3.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Calamus</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning4.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Gardenia</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning5.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Gladys</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning6.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Kamila</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning7.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Lefco</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning8.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Merry</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning9.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Mila</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning10.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Plaid</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning11.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Regina</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning12.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Rosini</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning13.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Rotinki</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning14.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Row</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning15.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Rubis</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning16.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Sigma</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning17.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Slimit Grey</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning18.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Slimit Loreng</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning19.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Swastika Chair</h5> <span>Rattan</span>{" "}
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning20.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Syoda</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning21.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Syola</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning22.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Vale Manau</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning23.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Vale Rustik</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning24.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Vintage Rattan</h5> <span>Rattan</span>{" "}
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning25.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Zibo Slimit</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items dinning">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/dinning26.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Zibo Synthetic</h5> <span>Rattan</span>{" "}
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/sofa1.png" alt="Elena Sofa" />
                </div>
                <div className="cont">
                  <h5>Elena Sofa</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/col/sofa2.png"
                    alt="Orchardz Sofa"
                  />
                </div>
                <div className="cont">
                  <h5>Orchardz Sofa</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items sofa">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/col/sofa3.png"
                    alt="Sans Lounge Chair"
                  />
                </div>
                <div className="cont">
                  <h5>Sans Lounge Chair</h5> <span>Rattan</span>{" "}
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ1.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Ellie</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ2.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Miguel</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ3.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Shansi Plintir</h5> <span>Rattan</span>{" "}
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ4.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Shansi</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 items occasional">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/occ5.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Vale</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div> */}
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
                  <img src="/assets/img/works/col/others2.png" alt="" />
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
                  <img src="/assets/img/works/col/others4.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Elena Bench</h5> <span>Rattan</span> <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items others">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/others3.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Vintage Shelf</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items stool">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool1.png" alt="" />
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
                  <img src="/assets/img/works/col/stool2.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Luna Bar Stool</h5> <span>Rattan</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items stool">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/stool3.png" alt="" />
                </div>
                <div className="cont">
                  <h5>Slimit Grey Stool</h5> <span>Rattan</span>
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

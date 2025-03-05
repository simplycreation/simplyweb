/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("*");

  const allPhotos = [
    {
      src: "/assets/img/works/col/occ1.jpg",
      category: "occasional",
      title: "Shansi Chair A",
    },
    {
      src: "/assets/img/works/col/occ2.jpg",
      category: "occasional",
      title: "Shansi Chair B",
    },
    {
      src: "/assets/img/works/col/occ3.jpg",
      category: "occasional",
      title: "Miguel Chair",
    },
    { src: "/assets/img/works/col/sofa1.jpg", category: "sofa", title: "Sofa" },
    // {
    //   src: "/assets/img/works/col/stool.png",
    //   category: "stool",
    //   title: "Stool",
    // },
    // {
    //   src: "/assets/img/works/col/occasional.png",
    //   category: "occasional",
    //   title: "Occasional",
    // },
    {
      src: "/assets/img/works/col/others1.jpg",
      category: "others",
      title: "Side Board",
    },
    {
      src: "/assets/img/works/col/others2.jpg",
      category: "others",
      title: "Vanity Table",
    },
    {
      src: "/assets/img/works/col/others3.jpg",
      category: "others",
      title: "Vintage Shelf",
    },
    {
      src: "/assets/img/works/col/others4.jpg",
      category: "others",
      title: "Reno Shelf",
    },
  ];

  useEffect(() => {
    // Initially show only 9 photos
    setFilteredPhotos(allPhotos.slice(0, 9));

    // Initialize Isotope after component mount
    if (window.Isotope) {
      initIsotope();
    }
  }, []);

  const handleFilter = (category) => {
    let newPhotos;

    // Set active filter
    setActiveFilter(category);

    if (category === "*") {
      // Show all photos (limit to 9)
      newPhotos = allPhotos.slice(0, 9);
    } else {
      // Filter photos based on category and limit to 9
      newPhotos = allPhotos
        .filter((photo) => photo.category === category)
        .slice(0, 9);
    }

    // Update filtered photos state
    setFilteredPhotos(newPhotos);

    // Delay Isotope's arrange method to allow animation delay
    setTimeout(() => {
      const isotopeContainer = document.querySelector(".gallery");
      if (isotopeContainer && window.Isotope) {
        const isotopeInstance = window.Isotope.data(isotopeContainer);
        if (isotopeInstance) {
          // Reinitialize Isotope layout
          isotopeInstance.arrange();
        }
      }
    }, 500); // Adjust this timeout for the animation duration if necessary
  };

  useEffect(() => {
    // After filteredPhotos is updated, re-trigger Isotope layout
    const isotopeContainer = document.querySelector(".gallery");
    if (isotopeContainer && window.Isotope) {
      const isotopeInstance = window.Isotope.data(isotopeContainer);
      if (isotopeInstance) {
        // Reinitialize Isotope layout
        isotopeInstance.arrange();
      }
    }
  }, [filteredPhotos]); // Trigger layout update when filteredPhotos changes

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span
                data-filter="*"
                className={`filter-btn ${activeFilter === "*" ? "active" : ""}`}
                onClick={() => handleFilter("*")}
              >
                All
              </span>
              <span
                data-filter=".sofa"
                className={`filter-btn ${
                  activeFilter === "sofa" ? "active" : ""
                }`}
                onClick={() => handleFilter("sofa")}
              >
                Sofa
              </span>
              <span
                data-filter=".dinning"
                className={`filter-btn ${
                  activeFilter === "dinning" ? "active" : ""
                }`}
                onClick={() => handleFilter("dinning")}
              >
                Dinning
              </span>
              <span
                data-filter=".occasional"
                className={`filter-btn ${
                  activeFilter === "occasional" ? "active" : ""
                }`}
                onClick={() => handleFilter("occasional")}
              >
                Occasional
              </span>
              <span
                data-filter=".stool"
                className={`filter-btn ${
                  activeFilter === "stool" ? "active" : ""
                }`}
                onClick={() => handleFilter("stool")}
              >
                Stool
              </span>
              <span
                data-filter=".accesroies"
                className={`filter-btn ${
                  activeFilter === "accesroies" ? "active" : ""
                }`}
                onClick={() => handleFilter("accesroies")}
              >
                Accesories
              </span>
              <span
                data-filter=".others"
                className={`filter-btn ${
                  activeFilter === "others" ? "active" : ""
                }`}
                onClick={() => handleFilter("others")}
              >
                Others
              </span>
              <span
                data-filter=".gdrive"
                className={`filter-btn ${
                  activeFilter === "gdrive" ? "active" : ""
                }`}
                onClick={() => handleFilter("gdrive")}
              >
                Gdrive
              </span>
            </div>
          </div>
          <div className="row gallery">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 items ${photo.category}`}
              >
                <div className="item">
                  <div className="img">
                    <img src={photo.src} alt={photo.title} />
                  </div>
                  <div className="cont">
                    <h5>{photo.title}</h5>
                    <span>Architecture</span> <span>Modern</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;

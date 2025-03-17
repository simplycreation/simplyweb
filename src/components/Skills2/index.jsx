import React from "react";
import skillsProgress from "../../common/skillsProgress";
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>DELEVERY LEAD TIME</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>QC SYSTEM</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>PACKAGING</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>INCOTERMS</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>PAYMENT TERMS</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="100%"></div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">
                Product Lead Time & Other Terms
              </h4>

              <h5 className="mb-2 font-semibold">Product Lead Time</h5>
              <ul className="mb-4 list-disc list-inside">
                <li>
                  Initial order:
                  <ul className="list-inside ml-5">
                    <li className="before:content-['•'] before:mr-2">
                      - 90 to 120 days
                    </li>
                  </ul>
                </li>
                <li>
                  Repeat order:
                  <ul className="list-inside ml-5">
                    <li className="before:content-['•'] before:mr-2">
                      - 45 to 60 days
                    </li>
                  </ul>
                </li>
              </ul>

              <h5 className="mb-2 font-semibold">Incoterm</h5>
              <ul className="mb-4 list-disc list-inside">
                <li>
                  FOB:
                  <ul className="list-inside ml-5">
                    <li className="before:content-['•'] before:mr-2">
                      - Jakarta
                    </li>
                    <li className="before:content-['•'] before:mr-2">
                      - Semarang
                    </li>
                  </ul>
                </li>
              </ul>

              <h5 className="mb-2 font-semibold">QC System</h5>
              <p className="mb-4">
                The goods are checked 100% piece by piece during the production
                process and before loading the container.
              </p>

              <h5 className="mb-2 font-semibold">Packaging</h5>
              <p className="mb-4">
                5-ply corrugated carton or depends on customer request.
              </p>

              <h5 className="mb-2 font-semibold">Payment Terms</h5>
              <ul className="list-disc list-inside">
                <li className="mb-1">- 30 / 70</li>
                <li className="mb-1">- L/C</li>
                <li className="mb-1">- Negotiable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;

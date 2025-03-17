import React from "react";

const Process2 = () => {
  return (
    <section className="process section-padding">
      <div className="container">
        <div className="row">
          {/* Product Lead Time */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item">
              <h4 className="text-2xl font-semibold mb-2">01</h4>
              <h5 className="text-lg font-medium mb-2">Product Lead Time</h5>
              <ul className="list-disc list-inside">
                <li>Initial order: 90 to 120 days</li>
                <li>Repeat order: 45 to 60 days</li>
              </ul>
            </div>
          </div>

          {/* Incoterm */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item">
              <h4 className="text-2xl font-semibold mb-2">02</h4>
              <h5 className="text-lg font-medium mb-2">Incoterm</h5>
              <ul className="list-disc list-inside">
                <li>FOB Jakarta</li>
                <li>FOB Semarang</li>
              </ul>
            </div>
          </div>

          {/* QC System */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item">
              <h4 className="text-2xl font-semibold mb-2">03</h4>
              <h5 className="text-lg font-medium mb-2">QC System</h5>
              <p>
                The goods are checked 100% piece by piece during the production
                process and before loading the container.
              </p>
            </div>
          </div>

          {/* Packaging */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item">
              <h4 className="text-2xl font-semibold mb-2">04</h4>
              <h5 className="text-lg font-medium mb-2">Packaging</h5>
              <p>5-ply corrugated carton or depends on customer request.</p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="item">
              <h4 className="text-2xl font-semibold mb-2">05</h4>
              <h5 className="text-lg font-medium mb-2">Payment Terms</h5>
              <ul className="list-disc list-inside">
                <li>30 / 70</li>
                <li>L/C</li>
                <li>Negotiable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process2;

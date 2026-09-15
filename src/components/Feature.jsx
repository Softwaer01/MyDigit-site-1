// src/components/Feature.jsx
import React from "react";

const Feature = () => {
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="row g-4">

          {/* Feature 1 */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
              <h5 className="mb-3">Digital Marketing</h5>
              <p className="m-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-search text-primary mb-4"></i>
              <h5 className="mb-3">SEO & Backlinks</h5>
              <p className="m-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-item bg-light rounded text-center p-4">
              <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
              <h5 className="mb-3">Design & Development</h5>
              <p className="m-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Feature;
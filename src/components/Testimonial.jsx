// src/components/Testimonial.jsx
import React from "react";

import testimonialImg1 from "../assets/img/testimonial-1.jpg";
import testimonialImg2 from "../assets/img/testimonial-2.jpg";
import testimonialImg3 from "../assets/img/testimonial-3.jpg";


const Testimonial = () => {
  return (
    <>
    <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">

              <h1 className="text-white animated slideInDown">
                Testimonial us
              </h1>

              <hr
                className="bg-white mx-auto mt-0"
                style={{ width: "90px" }}
              />

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">

                  <li className="breadcrumb-item">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>

                  <li className="breadcrumb-item text-white active">
                    Testimonial
                  </li>

                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>

    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 px-lg-5">

        {/* Heading */}
        <p className="section-title text-secondary justify-content-center">
          <span></span>Testimonial<span></span>
        </p>

        <h1 className="text-center mb-5">
          What Say Our Clients!
        </h1>

        {/* Testimonials */}
        <div className="row g-4">

          {/* Testimonial 1 */}
          <div className="col-lg-4">
            <div className="testimonial-item bg-light rounded p-4">
              <p className="fs-5">
                <i className="fa fa-quote-left fa-2x text-primary me-3"></i>
                Diam dolor diam ipsum sit amet.
              </p>

              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={testimonialImg1}
                  alt=""
                  style={{ width: "65px", height: "65px" }}
                />
                <div className="ps-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-lg-4">
            <div className="testimonial-item bg-light rounded p-4">
              <p className="fs-5">
                <i className="fa fa-quote-left fa-2x text-primary me-3"></i>
                Diam dolor diam ipsum sit amet.
              </p>

              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={testimonialImg2}
                  alt=""
                  style={{ width: "65px", height: "65px" }}
                />
                <div className="ps-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-lg-4">
            <div className="testimonial-item bg-light rounded p-4">
              <p className="fs-5">
                <i className="fa fa-quote-left fa-2x text-primary me-3"></i>
                Diam dolor diam ipsum sit amet.
              </p>

              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={testimonialImg3}
                  alt=""
                  style={{ width: "65px", height: "65px" }}
                />
                <div className="ps-4">
                  <h5 className="mb-1">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
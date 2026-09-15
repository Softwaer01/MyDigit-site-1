// src/components/Service.jsx
import React, { useEffect, useState } from "react";

const Service = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Spinner */}
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          {/* Hero Section */}
          <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">

                  <h1 className="text-white animated slideInDown">
                    Service Us
                  </h1>

                  <hr
                    className="bg-white mx-auto mt-0"
                    style={{ width: "90px" }}
                  />

                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">

                      <li className="breadcrumb-item">
                        <a className="text-white" href="/">Home</a>
                      </li>

                      <li className="breadcrumb-item text-white active">
                        Service
                      </li>

                    </ol>
                  </nav>

                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">

              {/* Heading */}
              <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center">
                  <span></span>Our Services<span></span>
                </p>
                <h1 className="text-center mb-5">
                  What Solutions We Provide
                </h1>
              </div>

              <div className="row g-4">

                {/* Service 1 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fa fa-search fa-2x"></i>
                    </div>
                    <h5 className="mb-3">SEO Optimization</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fa fa-laptop-code fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Web Design</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fab fa-facebook-f fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Social Media Marketing</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fa fa-mail-bulk fa-2x"></i>
                    </div>
                    <h5 className="mb-3">Email Marketing</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fa fa-thumbs-up fa-2x"></i>
                    </div>
                    <h5 className="mb-3">PPC Advertising</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="service-item d-flex flex-column text-center rounded">
                    <div className="service-icon flex-shrink-0">
                      <i className="fab fa-android fa-2x"></i>
                    </div>
                    <h5 className="mb-3">App Development</h5>
                    <p className="m-0">Erat ipsum justo amet duo et elitr dolor.</p>
                    <a className="btn btn-square" href="#">
                      <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Service;
// src/components/Team.jsx
import React from "react";


import teamImg1 from "../assets/img/team-1.jpg";
import teamImg2 from "../assets/img/team-2.jpg";
import teamImg3 from "../assets/img/team-3.jpg";

const Team = () => {
  return (
    <>
    <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">

              <h1 className="text-white animated slideInDown">
                Team Us
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
                    Team
                  </li>

                </ol>
              </nav>

            </div>
          </div>
        </div>
      </div>

    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">

        {/* Heading */}
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Team<span></span>
          </p>
          <h1 className="text-center mb-5">
            Our Team Members
          </h1>
        </div>

        <div className="row g-4">

          {/* Member 1 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="team-item bg-light rounded">
              
              <div className="text-center border-bottom p-4">
                <img
                  className="img-fluid rounded-circle mb-4"
                  src={teamImg1}
                  alt=""
                />
                <h5>John Doe</h5>
                <span>CEO & Founder</span>
              </div>

              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>

            </div>
          </div>

          {/* Member 2 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="team-item bg-light rounded">
              
              <div className="text-center border-bottom p-4">
                <img
                  className="img-fluid rounded-circle mb-4"
                  src={teamImg2}
                  alt=""
                />
                <h5>Jessica Brown</h5>
                <span>Web Designer</span>
              </div>

              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>

            </div>
          </div>

          {/* Member 3 */}
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="team-item bg-light rounded">
              
              <div className="text-center border-bottom p-4">
                <img
                  className="img-fluid rounded-circle mb-4"
                  src={teamImg3}
                  alt=""
                />
                <h5>Tony Johnson</h5>
                <span>SEO Expert</span>
              </div>

              <div className="d-flex justify-content-center p-4">
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                <a className="btn btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
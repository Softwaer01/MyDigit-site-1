// src/components/About.jsx
import React from "react";

import aboutImg from "../assets/img/about.png";

const About = () => {
  return (
    <>

      {/* 🔥 TOP HEADER (About Page Hero) */}
      <div className="container-xxl py-5 bg-primary hero-header">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5">
            <div className="col-12 text-center">

              <h1 className="text-white animated slideInDown">
                About Us
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
                    About
                  </li>

                </ol>
              </nav>


              

            </div>
            
          </div>
        </div>
        
      </div>
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <p className="section-title text-secondary">
                About Us<span></span>
              </p>

              <h1 className="mb-5">
                #1 Digital solution with 10 years of experience
              </h1>

              <p className="mb-4">
                Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
              </p>

              {/* Skill 1 */}
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Digital Marketing</p>
                  <p className="mb-2">85%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              {/* Skill 2 */}
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">SEO & Backlinks</p>
                  <p className="mb-2">90%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              {/* Skill 3 */}
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Design & Development</p>
                  <p className="mb-2">95%</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <a href="#" className="btn btn-primary rounded-pill mt-3">
                Read More
              </a>
            </div>

            {/* Right Image */}
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={aboutImg}
                alt="about"
              />
            </div>

          </div>
        </div>
      </div>

      {/* 🔽 MAIN ABOUT SECTION */}
      

    </>
  );
};

export default About;
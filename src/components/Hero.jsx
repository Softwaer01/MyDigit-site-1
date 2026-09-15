
import React from "react";

import heroImg from "../assets/img/hero.png";

const Hero = () => {

  return (

    <>

    {/* Hero Start */}
      <div className="container-xxl bg-primary hero-header">
        <div className="container px-lg-5">
          <div className="row g-5 align-items-end">
            
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="text-white mb-4 animated slideInDown">
                A Digital Agency Of Inteligents & Creative People
              </h1>

              <p className="text-white pb-3 animated slideInDown">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd.
              </p>

              <a href="#" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">
                Read More
              </a>

              <a href="#" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>

            <div className="col-lg-6 text-center text-lg-start">
              <img
                className="img-fluid animated zoomIn"
                src={heroImg}
                alt="hero"
              />
            </div>

          </div>
        </div>
      </div>
      {/* Hero End */}




    </>


      );
};

export default Hero;
// src/components/NavbarHero.jsx

import React from "react";
import MYSITE from "../assets/img/mysite-removebg-preview.png";
import { Link } from "react-router-dom";

const NavbarHero = () => {
  return (
    <div className="container-xxl position-relative p-0">

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">

        <a href="/" className="navbar-brand p-0 d-flex align-items-center">
          
          <img 
            src={MYSITE} 
            alt="Logo" 
            style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover", marginRight: "10px" }} 
          />

          <h1 className="m-0">MYSITE S.D</h1>

        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <div className="navbar-nav mx-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/service" className="nav-item nav-link">Service</Link>
            <Link to="/project" className="nav-item nav-link">Project</Link>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                <Link to="/404" className="dropdown-item">404 Page</Link>
              </div>
            </div>

            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            <Link to="/login" className="nav-item nav-link text-primary fw-bold">Login</Link>
          </div>

          <Link to="/login" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
            Get Started
          </Link>

        </div>
      </nav>
      {/* Navbar End */}

    </div>
  );
};

export default NavbarHero;
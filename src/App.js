import { Routes, Route } from "react-router-dom";

import NavbarHero from "./components/NavbarHero";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <div>
      
       <NavbarHero />
       
       
      <Routes>
        

        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Feature />
            <About />
            <Facts />
            <Service />
            <Projects />
            <Testimonial />
            <Team />

            <Newsletter />
           

          </>
        } />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Service Page */}
        <Route path="/service" element={<Service />} />

        {/* Project Page */}
        <Route path="/project" element={<Projects />} />

        {/* Team Page */}
        <Route path="/team" element={<Team />} />

        {/* Testimonial Page */}
        <Route path="/testimonial" element={<Testimonial />} />


        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
import "./App.css";
import Hero from "./views/Hero";
import About from "./views/About";
import Projects from "./views/Projects";
import Extras from "./views/Extras";

import MarqueeBanners from "./layouts/MarqueeBanners";

import Header from "./layouts/Header";
import StickyNavbar from "./layouts/StickyNavbar";
import Footer from "./layouts/Footer";
import { useRef } from "react";

function App() {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const heroSectionRef = useRef(null);
  const extrasSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const handleClickHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClickAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickExtras = () => {
    extrasSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header />
      <StickyNavbar
        handleClickAbout={handleClickAbout}
        handleClickProjects={handleClickProjects}
        handleClickHero={handleClickHero}
        handleClickExtras={handleClickExtras}
        handleClickContact={handleClickContact}
      />
      <Hero heroSectionRef={heroSectionRef} />
      <About aboutSectionRef={aboutSectionRef} />
      <MarqueeBanners />
      <Projects projectsSectionRef={projectsSectionRef} />
      <Extras extrasSectionRef={extrasSectionRef} />
      <Footer contactSectionRef={contactSectionRef} />
    </div>
  );
}
// NICHOLE CRUZALEGUI
export default App;

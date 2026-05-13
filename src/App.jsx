import "./App.css";
import Hero from "./views/Hero";
import About from "./views/About";
import Projects from "./views/Projects";

import Header from "./layouts/Header";
import Navbar from "./layouts/StickyNavbar";
import Footer from "./layouts/Footer";
import { useRef } from "react";

function App() {
  const aboutSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const heroSectionRef = useRef(null);

  const handleClickHero = () => {
    heroSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClickProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      <Header />
      <Navbar
        handleClickAbout={handleClickAbout}
        handleClickProjects={handleClickProjects}
        handleClickHero={handleClickHero}
      />
      <Hero heroSectionRef={heroSectionRef} />
      <About aboutSectionRef={aboutSectionRef} />
      <Projects projectsSectionRef={projectsSectionRef} />
      <Footer />
    </div>
  );
}
// NICHOLE CRUZALEGUI
export default App;

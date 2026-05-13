import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

function StickyNavbar({
  handleClickAbout,
  handleClickProjects,
  handleClickHero,
}) {
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle transparency based on scroll position
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className="bg-transparent" sticky="top">
      {/* <Navbar expand="lg" className={isTransparent ? "bg-transparent" : "bg-dark"} sticky="top"></Navbar> */}
      <Container>
        <Navbar.Brand href="#home" onClick={handleClickHero}>
          nc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <div> */}

          <Nav
            className={`me-auto mx-auto sticky-container ${isTransparent ? "bg-transparent" : "navbar-bg-dark"}`}
          >
            <Nav.Link href="#about" onClick={handleClickAbout}>
              About
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleClickProjects}>
              Projects
            </Nav.Link>
          </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;

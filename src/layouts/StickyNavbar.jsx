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
      if (window.scrollY > 1) {
        setIsTransparent(false);
      } else {
        //else if at top of page, make transparent
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className="" sticky="top">
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home" onClick={handleClickHero}>
          <div className={`link-container ${isTransparent ? "" : "link-top"}`}>
            nc
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`me-auto mx-auto sticky-container ${isTransparent ? "bg-transparent" : "navbar-bg-dark"}`}
          >
            <Nav.Link href="#about" onClick={handleClickAbout}>
              <div
                className={`link-container ${isTransparent ? "" : "link-top"}`}
              >
                about
              </div>
            </Nav.Link>
            <Nav.Link href="#projects" onClick={handleClickProjects}>
              <div
                className={`link-container ${isTransparent ? "" : "link-top"}`}
              >
                projects
              </div>
            </Nav.Link>
          </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;

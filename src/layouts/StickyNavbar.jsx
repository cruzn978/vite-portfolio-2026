import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

function StickyNavbar({
  handleClickAbout,
  handleClickProjects,
  handleClickHero,
  handleClickExtras,
  handleClickContact,
}) {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (callback) => {
    callback();
    setIsMenuOpen(false);
  };

  return (
    <Navbar expand="lg" className="" sticky="top">
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home" onClick={handleClickHero}>
          <div className="link-container">nc</div>
        </Navbar.Brand>

        <button
          type="button"
          className={`navbar-toggler custom-mobile-toggle ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`mobile-menu-panel ${isMenuOpen ? "mobile-menu-panel-open" : ""}`}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(handleClickAbout);
            }}
          >
            about
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(handleClickProjects);
            }}
          >
            projects
          </a>
          <a
            href="#extras"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(handleClickExtras);
            }}
          >
            extras
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleMenuItemClick(handleClickContact);
            }}
          >
            contact
          </a>
        </div>

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

            <Nav.Link href="#extras" onClick={handleClickExtras}>
              <div
                className={`link-container ${isTransparent ? "" : "link-top"}`}
              >
                extras
              </div>
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleClickContact}>
              <div
                className={`link-container ${isTransparent ? "" : "link-top"}`}
              >
                contact
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNavbar;

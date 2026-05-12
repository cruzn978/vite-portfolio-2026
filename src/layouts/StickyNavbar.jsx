import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function StickyNavbar({
  handleClickAbout,
  handleClickProjects,
  handleClickHero,
}) {
  return (
    <Navbar expand="lg" className="bg-transparent" sticky="top">
      <Container>
        <Navbar.Brand href="#home" onClick={handleClickHero}>
          nc
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <div> */}
          <Nav className="me-auto mx-auto sticky-container">
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

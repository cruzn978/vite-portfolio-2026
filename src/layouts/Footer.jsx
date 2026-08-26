import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer({ contactSectionRef }) {
  return (
    <Container
      fluid
      className="footer-container position-relative"
      id="footer-section"
      ref={contactSectionRef}
    >
      <Container>
        <Row>
          <Col>
            <h2
              id="footer-title"
              className="hero-title text-align-left mt-5 pt-3 mobile-non-hero-title"
            >
              contact
            </h2>
            <a href="mailto:cruzalegui.nichole@gmail.com" aria-label="Email">
              <h3 className="contact-options">email</h3>
            </a>
            <a
              href="https://www.linkedin.com/in/cruzn978/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <h3 className="contact-options">linkedin</h3>
            </a>

            <a
              href="/Nichole_Resume_download.pdf"
              download
              aria-label="Download Resume"
            >
              <h3 className="contact-options">resume</h3>
            </a>

            <a
              href="https://github.com/cruzn978"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <h3 className="contact-options">github</h3>
            </a>
          </Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
        <div>
          <p className="footer-text text-align-left mt-5 pt-3">
            &copy; 2026 Nichole Cruzalegui. All rights reserved.
          </p>
        </div>
      </Container>
    </Container>
  );
}

export default Footer;

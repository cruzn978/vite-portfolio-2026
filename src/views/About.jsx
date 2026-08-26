import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About({ aboutSectionRef }) {
  return (
    <Container
      ref={aboutSectionRef}
      className="hero-container"
      id="about-section"
    >
      <Row>
        <Col>
          <h2
            id="about-title"
            className="hero-title text-navy-dark text-align-left mt-5 pt-2 mobile-non-hero-title"
          >
            ABOUT
          </h2>
          <p className="text-navy-dark mt-3">
            I've always been drawn to the intersection of creativity and
            technology. I built my first website in middle school, then went on
            to study jazz guitar at The New School. While working in an IT lab
            at college, I rediscovered web development and found myself spending
            more time building small applications.
          </p>
          <p className="text-navy-dark">
            I decided to see where coding would take me and it led me to the
            Grace Hopper Program, where I formalized my software engineering
            skills and launched my career as a developer. In 2021, I joined
            Omnicom Production, where I've spent the last five years creating
            digital experiences for brands like Meta, Morgan Stanley, Dunkin',
            and Hilton. My work has ranged from HTML5 advertising campaigns and
            interactive experiences to high-performance microsites and web
            applications.
          </p>
          <p className="text-navy-dark">
            These days, I enjoy working with JavaScript, React, Webflow, and
            exploring new AI-powered workflows. I'm particularly interested in
            projects that blend technology, design, and good and clear
            storytelling—and I'm always looking for opportunities to learn
            something new while building something useful.
          </p>
          <p className="text-navy-dark">Here is a quick banner showcase!</p>
        </Col>
      </Row>
    </Container>
  );
}

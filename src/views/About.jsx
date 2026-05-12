import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About({ aboutSectionRef }) {
  return (
    <Container
      fluid
      ref={aboutSectionRef}
      className="hero-container justify-content-center"
    >
      <Row>
        <Col>
          <h1 className="hero-title text-navy-dark justify-content-center">
            <span className="text-navy-dark">ABOUT</span> <br />
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

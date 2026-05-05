import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero() {
  return (
    <Container
      fluid
      className="hero-container d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col>
          {/* <div className="profileImgContainer">
            <img
              className="circle"
              src="src/assets/Nichole.jpg"
              alt="Nichole Cruzalegui"
            />
          </div> */}
        </Col>
        <Col>
          <h1 className="hero-title text-navy-dark">NICHOLE</h1>
          <h1 className="hero-title text-navy-dark bottom-title">CRUZALEGUI</h1>
        </Col>
      </Row>
    </Container>
  );
}

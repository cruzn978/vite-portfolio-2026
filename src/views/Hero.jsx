import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Marquee from "../layouts/Marquee";

export default function Hero({ heroSectionRef }) {
  return (
    <Container
      fluid
      className="hero-container justify-content-center"
      ref={heroSectionRef}
    >
      <Row className="hero-row">
        <Col className="">
          <h1 className="hero-title text-navy-dark justify-content-center">
            <span className="text-navy-dark">NICHOLE</span> <br />
            <span className="text-navy-dark">CRUZALEGUI</span>
          </h1>
        </Col>
      </Row>
      <Marquee />
      <Row className="d-flex">
        <Col className="d-flex align-items-center justify-content-center">
          <div className="profileImgContainer">
            <img
              className="circle"
              src="src/assets/Nichole.jpg"
              alt="Nichole Cruzalegui"
            />
          </div>
          <div className="creative-title position-relative">
            Digital Developer
            <span className="add-on-titles add-on-three position-absolute">
              {" "}
              + matcha enthusiast
            </span>
            <span className="add-on-titles add-on-two position-absolute">
              {" "}
              + music producer
            </span>
            <span className="add-on-titles position-absolute">
              {" "}
              + rock climber
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

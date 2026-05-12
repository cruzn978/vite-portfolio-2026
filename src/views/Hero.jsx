import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Hero({ heroSectionRef }) {
  return (
    <Container
      fluid
      className="hero-container justify-content-center"
      ref={heroSectionRef}
    >
      <Row>
        {/* <Col>
          <div className="profileImgContainer">
            <img
              className="circle"
              src="src/assets/Nichole.jpg"
              alt="Nichole Cruzalegui"
            />
          </div>
        </Col> */}
        <Col className="">
          <h1 className="hero-title text-navy-dark justify-content-center">
            <span className="text-navy-dark">NICHOLE</span> <br />
            <span className="text-navy-dark">CRUZALEGUI</span>
            {/* NICHOLE <br /> CRUZALEGUI */}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

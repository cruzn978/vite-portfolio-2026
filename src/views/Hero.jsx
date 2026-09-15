import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "motion/react";

export default function Hero({ heroSectionRef }) {
  return (
    <Container
      fluid
      className="hero-container justify-content-center"
      id="hero-section"
      ref={heroSectionRef}
    >
      <Row className="hero-row">
        <Col className="">
          <h1 className="hero-title text-navy-dark justify-content-center">
            <div style={{ overflow: "hidden" }}>
              <motion.span
                className="text-navy-dark"
                style={{ display: "inline-block" }}
                // start 100% below the viewport and animate to 0% (original position)
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                NICHOLE
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="text-navy-dark"
                style={{ display: "inline-block" }}
                // start 100% below the viewport and animate to 0% (original position)
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                viewport={{ once: true }}
              >
                CRUZALEGUI
              </motion.span>
            </div>
          </h1>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col className="d-flex align-items-center justify-content-center">
          <div className="profileImgContainer-mobile">
            <img
              className="circle"
              src="/assets/Nichole.jpg"
              alt="Nichole Cruzalegui"
            />
          </div>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col className="d-flex align-items-center justify-content-center">
          <div className="profileImgContainer">
            <img
              className="circle"
              src="/assets/Nichole.jpg"
              alt="Nichole Cruzalegui"
            />
          </div>

          <div className="creative-title">
            Digital Developer
            <div className="span-container position-relative">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
}

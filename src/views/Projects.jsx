import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects({ projectsSectionRef }) {
  return (
    <Container
      ref={projectsSectionRef}
      className="hero-container projects-container"
    >
      <h2
        id="projects-title"
        className="hero-title text-navy-dark mt-5 pt-2 mobile-non-hero-title"
      >
        PROJECTS
      </h2>

      {/* PROJECT 1 */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} className="project-col">
          <h3 className="project-name ">
            Project 1: <span className="project-subtitle">The PSAi</span>
          </h3>
          <a
            href="https://thepsai.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-container">
              <img
                src="website-media/thepsai1280.gif"
                alt="Project 1"
                className="banner-gif"
              />
            </div>
          </a>
          <h4 className="project-description ">
            A high-impact, media-literacy landing page for the Columbia
            Journalism Review (CJR) to train users on identifying AI-generated
            misinformation.
          </h4>
          <h5 className="project-description italic">
            Ad Age Creativity Awards: Winner for "Best Use of AI". Cresta
            Awards: Won Bronze in the category of Creative Use of AI and other
            digital/social campaigns. The One Show: Recognized for its viral
            impact and external outreach.
          </h5>
        </Col>
      </Row>
      {/* PROJECT 2 */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} className="project-col">
          <h3 className="project-name ">
            Project 2:
            <span className="project-subtitle">
              Quaker Invisible Workouts Site
            </span>
          </h3>
          <a
            href="https://quakerinvisibleworkouts.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-container">
              <img
                src="website-media/quaker1280.gif"
                alt="Project 2"
                className="banner-gif"
              />
            </div>
          </a>
          <h4 className="project-description ">
            An interactive landing page for Quaker’s "The Invisible Workout"
            campaign that rallies support for tracking the physical labor of
            parenting and promotes protein products to fuel those daily
            routines.
          </h4>
          <h5 className="project-description italic">
            - Built entirely in Webflow
          </h5>
        </Col>
      </Row>

      {/* PROJECT 3 */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} className="project-col">
          <h3 className="project-name ">
            Project 3:
            <span className="project-subtitle">BBDO Studios Site</span>
          </h3>
          <a
            href="https://cruzn978.github.io/bbdo-studios-site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-container">
              <img
                src="website-media/BBDO1280.gif"
                alt="Project 3"
                className="banner-gif"
              />
            </div>
          </a>
          <h4 className="project-description ">
            Architected a React app that pulled in live data from a WordPress
            backend via REST API to showcase project work dynamically and
            demonstrated full-stack integration skills by fetching and rendering
            content from a headless CMS
          </h4>
          <h5 className="project-description italic">
            Note: Backend API is no longer active; this serves as a partial demo
            of past work
          </h5>
        </Col>
      </Row>

      {/* PROJECT 4 */}
      <Row className="justify-content-center">
        <Col xs={12} md={10} className="project-col text-dark">
          <h3 className="project-name ">
            Project 4:
            <span className="project-subtitle">
              Haiku Generator App "Haicoo"
            </span>
          </h3>
          <a
            href="https://cruzn978.github.io/haicoo-demo/#app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-container">
              <img
                src="website-media/Haicoo1280.gif"
                alt="Project 4"
                className="banner-gif"
              />
            </div>
          </a>
          <h4 className="project-description">
            Progressive Web App that generates haikus from user-uploaded images
            using TensorFlow's MobileNet for image classification and DataMuse
            API for word suggestions. Built with React, Bootstrap, and Shards
            for a responsive, interactive UI. Implemented PWA functionality with
            Workbox for offline-first capabilities
          </h4>
          <h5 className="project-description italic">
            Stack: TensorFlow, DatamuseAPI, Workbox, Bootstrap, Shards, React
          </h5>
          <h5 className="project-description italic">
            <a
              href="https://github.com/cruzn978/haicoo-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <img
                src="/github.svg"
                alt="GitHub"
                className="social-icon github-link"
              />
            </a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

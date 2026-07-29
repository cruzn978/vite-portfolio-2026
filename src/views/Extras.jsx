import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Extras({ extrasSectionRef }) {
  return (
    <Container
      ref={extrasSectionRef}
      className="hero-container"
      id="extras-section"
    >
      <Row>
        <Col>
          <h2
            id="extras-title"
            className="hero-title text-navy-dark text-align-left mt-5 pt-3"
          >
            extras
          </h2>
          <p className="text-navy-dark mt-3">
            Like many people nowadays, I climb plastic rocks for fitness! I also
            climb real rocks outside.
          </p>
          <p className="text-navy-dark mt-3">
            I've been studying the Japanese tea ceremony for a few years now
            with tea master Souheki Mori from the tea school Dai Nihon Sado
            Gakkai. I enjoy learning about the history and philosophy of tea and
            how every movement in the tea ceremony is deliberate and
            intentional.
          </p>
          <p className="text-navy-dark mt-4">
            I also make <span className="text-accent">music</span>! Here's my
            current (unmixed) music project, which I describe as "sad girl indie
            jazz".
          </p>
          <div className="audio-player-container">
            <audio src="/audio/UnmixedKissMe.mp3" controls />
          </div>
          <p className="text-navy-dark mt-4">
            Here's a cool old music project:
          </p>
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/track/7MiFphFpjJ3CxMTFumGaWw?utm_source=generator&si=2d1e61a677804212"
            width="50%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

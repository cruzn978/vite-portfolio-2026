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
            className="hero-title text-navy-dark text-align-left mt-5 pt-3 mobile-non-hero-title"
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
          <div className="spotify-embed-container">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/7MiFphFpjJ3CxMTFumGaWw?utm_source=generator&si=2d1e61a677804212"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://open.spotify.com/track/7MiFphFpjJ3CxMTFumGaWw?si=2c22c506f0b4462e"
            target="_blank"
            rel="noopener noreferrer"
            class="spotify-badge"
          >
            {/* <!-- Official Spotify Icon SVG --> */}
            <svg class="spotify-icon" viewBox="0 0 24 24" xmlns="http://w3.org">
              <path
                fill="#1DB954"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.075-.336.135-.668.47-.743 3.856-.88 7.15-.502 9.822 1.132.295.178.387.563.205.856zm1.224-2.722c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.114 8.243-.574 11.35 1.34.366.226.486.707.258 1.074zm.105-2.834C14.383 8.8 8.417 8.602 4.966 9.65c-.53.16-1.09-.142-1.25-.672-.16-.53.142-1.09.672-1.25 3.963-1.202 10.556-.975 14.648 1.455.477.283.633.9.35 1.377-.283.477-.9.633-1.377.35z"
              />
            </svg>
            <div class="spotify-text">
              <span class="spotify-subtext">Listen on</span>
              <span class="spotify-maintext">Spotify</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

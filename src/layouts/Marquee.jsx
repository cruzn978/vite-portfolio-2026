// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export default function Marquee() {
  return (
    <div className="wrapper">
      <div className="marquee-text fadeout-horizontal">
        <div className="marquee-text-track">
          <p>1 laptop</p>
          <p>2 matcha</p>
          <p>3 music note</p>
          <p>4 rock climbing shoe</p>
          <p>5 a server</p>
          <p>6 a server</p>
          <p>7 a server</p>

          <p aria-hidden="true">1 laptop</p>
          <p aria-hidden="true">2 matcha</p>
          <p aria-hidden="true">3 music note</p>
          <p aria-hidden="true">4 rock climbing shoe</p>
          <p aria-hidden="true">5 a server</p>
          <p aria-hidden="true">6 a server</p>
          <p aria-hidden="true">7 a server</p>
        </div>
      </div>
    </div>
  );
}

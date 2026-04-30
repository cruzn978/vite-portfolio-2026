import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Nichole Cruzalegui</h1>
        <p>digital developer</p>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of what you built</p>
          <a href="#">View Live</a>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of what you built</p>
          <a href="#">GitHub</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <a href="mailto:your@email.com">Email Me</a>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </section>
    </div>
  );
}

export default App;

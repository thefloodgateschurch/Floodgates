export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero-bg" />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-location">Newport News, Virginia</p>

        <h1 className="hero-title">
          Welcome to
          <br />
          The Floodgates Church
        </h1>

        <div className="hero-divider" />

        <p className="hero-tagline">Loving God. Loving People.</p>

        <p className="hero-time">Sundays at 10:00 AM</p>

        {/* FIXED BUTTON */}
        <a
          href="https://maps.google.com/?q=28+Harpersville+Rd+Newport+News+VA"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Get Directions
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        className="hero-scroll"
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{ cursor: "pointer", padding: "12px" }}
      >
        <div className="scroll-line" />
      </div>
    </section>
  );
}

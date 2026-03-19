export default function Prayer() {
  return (
    <>
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{
            backgroundImage: "url('/church.jpg')",
            backgroundPosition: "center 70%",
            filter: "saturate(0.5) brightness(0.75)",
          }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Prayer</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      <section className="beliefs-intro section-dark">
        <div className="beliefs-intro-inner">
          <p className="beliefs-intro-text">
            If you need prayer, submit your request below. Your requests are
            confidential and shared only with The Floodgates Church Prayer Team.
            We're here for you.
          </p>
        </div>
      </section>

      <section
        className="section-dark"
        style={{
          padding: "var(--space-2xl) var(--space-md)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--text-muted)",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            letterSpacing: "0.08em",
          }}
        >
          Prayer form coming soon.
        </p>
      </section>
    </>
  );
}

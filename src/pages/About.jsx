export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">About Us</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Mission */}
      <section className="about-section section-dark">
        <div className="about-block">
          <p className="about-eyebrow">Our Mission</p>
          <h2 className="about-statement">
            Loving God.
            <br />
            Loving People.
          </h2>
          <p className="about-body">
            The word of God is the foundation on which The Floodgates is based.
            Our core values support and guide the vision and ministries of this
            church — rooted in love, shaped by truth, and expressed through
            community.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="about-rule">
        <span className="about-rule-line" />
        <span className="about-rule-dot" />
        <span className="about-rule-line" />
      </div>

      {/* Vision */}
      <section className="about-section section-dark">
        <div className="about-block">
          <p className="about-eyebrow">Our Vision</p>
          <h2 className="about-statement">
            A community
            <br />
            looking up.
          </h2>
          <p className="about-body">
            The Floodgates desires to be a community of loving disciples who are
            looking up, drawing near to God, and reaching out to those both far
            and near. We desire to provide a loving environment for personal
            growth, spiritual focus, and global awareness.
          </p>
        </div>
      </section>
    </>
  );
}

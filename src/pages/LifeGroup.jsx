export default function LifeGroup() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg lifegroup-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Life Groups</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Status Banner */}
      <div className="lifegroup-banner">
        <div className="lifegroup-banner-inner">
          <span className="lifegroup-banner-dot" />
          <p className="lifegroup-banner-text">
            Life Groups are currently on hold — check back for updates
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="beliefs-intro section-dark">
        <div className="beliefs-intro-inner">
          <p className="beliefs-intro-text">
            The Floodgates Church understands that one purpose must be implicit
            within all its various ministries, no matter their overt function —
            to bring all people into a proper relationship with God.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="lifegroup-section section-dark">
        <div className="lifegroup-container">
          {/* Purpose block */}
          <div className="lifegroup-block">
            <div className="lifegroup-block-number">01</div>
            <div className="lifegroup-block-content">
              <h3 className="lifegroup-block-title">Our Purpose</h3>
              <p className="lifegroup-block-body">
                One vital part of building relationships with God is providing
                the means for establishing connections between partners and
                their communities. The life group system is the most potent
                climate for providing a context for Godly social relationships
                and a sense of belonging at The Floodgates.
              </p>
            </div>
          </div>

          <div className="lifegroup-divider" />

          {/* What we do */}
          <div className="lifegroup-block">
            <div className="lifegroup-block-number">02</div>
            <div className="lifegroup-block-content">
              <h3 className="lifegroup-block-title">What We Do</h3>
              <p className="lifegroup-block-body">
                Life groups are avenues where individuals are evangelized,
                nurtured, equipped, and enabled to serve one another. The goal
                of life groups is to release the spiritual gifts of individuals,
                which enhances Godly growth, and ultimately stimulates
                evangelism within the many communities where groups are located.
              </p>
            </div>
          </div>

          <div className="lifegroup-divider" />

          {/* Where & When */}
          <div className="lifegroup-block">
            <div className="lifegroup-block-number">03</div>
            <div className="lifegroup-block-content">
              <h3 className="lifegroup-block-title">Where & When</h3>
              <p className="lifegroup-block-body">
                Life groups meet on Wednesday nights at 7:00 PM across the
                Newport News, Gloucester, Hampton, and Williamsburg areas.
              </p>
              <div className="lifegroup-locations">
                {["Newport News", "Gloucester", "Hampton", "Williamsburg"].map(
                  (city) => (
                    <span key={city} className="lifegroup-location-chip">
                      {city}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="lifegroup-divider" />

          {/* On Hold */}
          <div className="lifegroup-hold-card">
            <div className="lifegroup-hold-icon">⏸</div>
            <div>
              <h3 className="lifegroup-hold-title">Currently on Hold</h3>
              <p className="lifegroup-hold-body">
                Life Groups are temporarily paused. We do not have a return date
                at this time. Please continue to check back here or connect with
                us on Sunday for the latest updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

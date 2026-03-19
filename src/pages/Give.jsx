export default function Give() {
  const amounts = ["25", "50", "100", "250"];

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg give-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Give</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Scripture */}
      <section className="give-scripture-section section-dark">
        <div className="give-scripture-wrap">
          <div className="give-scripture-mark">"</div>
          <blockquote className="give-scripture-text">
            Give generously and generous gifts will be given back to you, shaken
            down to make room for more. Abundant gifts will pour out upon you
            with such an overflowing measure that it will run over the top! The
            measurement of your generosity becomes the measurement of your
            return.
          </blockquote>
          <p className="give-scripture-ref">Luke 6:38</p>
        </div>
      </section>

      {/* Content */}
      <section className="give-section section-dark">
        <div className="give-container">
          {/* Left */}
          <div className="give-text">
            <p className="about-eyebrow">Faithful Stewardship</p>
            <h2 className="give-heading">
              Your generosity
              <br />
              makes a difference.
            </h2>
            <p className="give-body">
              Giving is an act of love and is a principle that is taught
              throughout the entire Bible. We are grateful for the many that
              support the Floodgates Church through their tithes and offerings.
            </p>
            <p className="give-body">
              By giving to the Floodgates Church, you're investing in fulfilling
              the great commission from Jesus Christ and our vision in Loving
              God and Loving People!
            </p>
          </div>

          {/* Right */}
          <div className="give-card">
            <div className="give-card-header">
              <p className="give-card-eyebrow">Online Giving</p>
              <h3 className="give-card-title">Give Securely</h3>
              <p className="give-card-sub">
                All transactions are processed securely through PayPal.
              </p>
            </div>

            <div className="give-card-body">
              <div className="give-amount-label">Select an amount</div>

              <div className="give-amounts">
                {amounts.map((amt) => (
                  <a
                    key={amt}
                    href={`https://www.paypal.com/donate/?business=info%40thefloodgateschurch.com&amount=${amt}&currency_code=USD`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="give-amount-chip"
                  >
                    ${amt}
                  </a>
                ))}

                <a
                  href="https://www.paypal.com/donate/?business=info%40thefloodgateschurch.com&currency_code=USD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="give-amount-chip"
                >
                  Other
                </a>
              </div>

              {/* PayPal Button */}
              <a
                href="https://www.paypal.com/donate/?business=info%40thefloodgateschurch.com&currency_code=USD"
                target="_blank"
                rel="noopener noreferrer"
                className="give-paypal-btn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z" />
                </svg>
                Give with PayPal
              </a>

              <p className="give-secure-note">
                🔒 Secure · Encrypted · No account required
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

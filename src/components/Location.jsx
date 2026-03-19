export default function Location() {
  return (
    <section id="location" className="section-dark">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-label">Find Us</p>
          <h2 className="section-heading">Our Location</h2>
          <div className="section-divider" />
        </div>

        <div className="location-grid">
          {/* Info */}
          <div className="location-info">
            <h3 className="location-name">The Floodgates Church</h3>

            <p className="location-address">
              28 Harpersville Rd
              <br />
              Newport News, VA
            </p>

            <div className="location-times">
              {[
                { label: "Prayer", time: "7:45 AM" },
                { label: "Sunday School", time: "8:15 AM" },
                { label: "Main Service", time: "10:00 AM" },
              ].map((item) => (
                <div key={item.label} className="time-row">
                  <span className="time-label">{item.label}</span>
                  <span className="time-value">{item.time}</span>
                </div>
              ))}
            </div>

            {/* FIXED BUTTON */}
            <a
              href="https://maps.google.com/?q=28+Harpersville+Rd+Newport+News+VA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="location-map">
            <iframe
              title="The Floodgates Church Location"
              src="https://www.google.com/maps?q=28+Harpersville+Rd+Newport+News+VA&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

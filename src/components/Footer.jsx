import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Our Beliefs", to: "/beliefs" },
    { label: "Ministries", to: "/ministries/womens" },
    { label: "Prayer", to: "/prayer" },
    { label: "Give", to: "/give" },
  ];

  return (
    <footer
      style={{
        background: "var(--primary-black)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="The Floodgates Church"
              style={{ height: "52px", marginBottom: "16px" }}
            />
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: "1.7",
                maxWidth: "240px",
              }}
            >
              Loving God. Loving People.
              <br />A welcoming community in Newport News, Virginia.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 style={footerHeadingStyle}>Location</h4>
            <p style={footerTextStyle}>
              28 Harpersville Rd
              <br />
              Newport News, VA
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h4 style={footerHeadingStyle}>Service Times</h4>
            <p style={footerTextStyle}>
              Prayer — 7:45 AM
              <br />
              Sunday School — 8:15 AM
              <br />
              Main Service — 10:00 AM
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={footerHeadingStyle}>Quick Links</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = "var(--blue-mid)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            © {year} The Floodgates Church. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
            28 Harpersville Rd, Newport News, VA
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerHeadingStyle = {
  fontFamily: "Montserrat, sans-serif",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "var(--blue-mid)",
  marginBottom: "14px",
};

const footerTextStyle = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.5)",
  lineHeight: "1.9",
};

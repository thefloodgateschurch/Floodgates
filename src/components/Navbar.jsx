import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ministryItems = [
  { label: "Women's Ministry", href: "/ministries/womens" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Beliefs", href: "/beliefs" },
  { label: "Leadership", href: "/leadership" },
  { label: "Prayer", href: "/prayer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMinistryOpen, setMobileMinistryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    setMobileMinistryOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "0 32px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(15,15,15,0.97)" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <img
            src="/logo.png"
            alt="The Floodgates Church"
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Desktop links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              style={desktopLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = "var(--blue-mid)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--white)")}
              onClick={closeAll}
            >
              {link.label}
            </Link>
          ))}

          {/* Ministries dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => {
              clearTimeout(window._dropdownTimer);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              window._dropdownTimer = setTimeout(
                () => setDropdownOpen(false),
                300,
              );
            }}
          >
            <span style={{ ...desktopLinkStyle, cursor: "default" }}>
              Ministries ▾
            </span>
            {dropdownOpen && (
              <div
                style={dropdownStyle}
                onMouseEnter={() => {
                  clearTimeout(window._dropdownTimer);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  window._dropdownTimer = setTimeout(
                    () => setDropdownOpen(false),
                    300,
                  );
                }}
              >
                {ministryItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    style={dropdownItemStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--blue-mid)";
                      e.currentTarget.style.background =
                        "rgba(111,168,220,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--white)";
                      e.currentTarget.style.background = "transparent";
                    }}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Life Group */}
          <Link
            to="/life-group"
            style={desktopLinkStyle}
            onMouseEnter={(e) => (e.target.style.color = "var(--blue-mid)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--white)")}
            onClick={closeAll}
          >
            Life Group
          </Link>

          {/* Give button */}
          <Link
            to="/give"
            style={giveButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.background = "var(--blue-deep)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--blue-mid)";
              e.target.style.transform = "translateY(0)";
            }}
            onClick={closeAll}
          >
            Give
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          style={hamburgerStyle}
          className="hamburger-btn"
          aria-label="Open menu"
        >
          <span style={barStyle} />
          <span style={barStyle} />
          <span style={barStyle} />
        </button>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1500,
          background: "rgba(0,0,0,0.6)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
          backdropFilter: mobileOpen ? "blur(2px)" : "none",
        }}
      />

      {/* Slide-out Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "min(360px, 85vw)",
          zIndex: 2000,
          background: "var(--dark-gray)",
          borderLeft: "1px solid rgba(111,168,220,0.12)",
          display: "flex",
          flexDirection: "column",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)",
          boxShadow: mobileOpen ? "-8px 0 40px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <Link to="/" onClick={closeAll}>
            <img
              src="/logo.png"
              alt="The Floodgates Church"
              style={{ height: "40px", width: "auto" }}
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--white)",
              fontSize: "24px",
              cursor: "pointer",
              lineHeight: 1,
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={closeAll}
              style={mobileLinkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--blue-mid)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--white)")
              }
            >
              {link.label}
            </Link>
          ))}

          {/* Ministries Accordion */}
          <div>
            <button
              onClick={() => setMobileMinistryOpen(!mobileMinistryOpen)}
              style={{
                ...mobileLinkStyle,
                background: "transparent",
                border: "none",
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingRight: "28px",
                cursor: "pointer",
              }}
            >
              <span>Ministries</span>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--blue-mid)",
                  transition: "transform 0.25s ease",
                  transform: mobileMinistryOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  display: "inline-block",
                }}
              >
                ▼
              </span>
            </button>

            {/* Accordion content */}
            <div
              style={{
                maxHeight: mobileMinistryOpen ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              {ministryItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeAll}
                  style={{
                    display: "block",
                    padding: "14px 28px 14px 40px",
                    color: "var(--blue-light)",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "500",
                    fontSize: "15px",
                    letterSpacing: "0.03em",
                    borderLeft: "2px solid var(--blue-mid)",
                    marginLeft: "28px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--white)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--blue-light)")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/life-group"
            onClick={closeAll}
            style={mobileLinkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--blue-mid)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white)")}
          >
            Life Group
          </Link>

          {/* Give */}
          <div style={{ padding: "16px 28px 8px", marginTop: "8px" }}>
            <Link
              to="/give"
              onClick={closeAll}
              style={{
                display: "block",
                background: "var(--blue-mid)",
                color: "var(--white)",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "15px 24px",
                borderRadius: "6px",
                textAlign: "center",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--blue-deep)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--blue-mid)")
              }
            >
              Give
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-nav { display: flex; }
        .hamburger-btn { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const desktopLinkStyle = {
  color: "var(--white)",
  fontSize: "14px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "500",
  letterSpacing: "0.04em",
  transition: "color 0.2s ease",
  whiteSpace: "nowrap",
};

const giveButtonStyle = {
  color: "var(--white)",
  background: "var(--blue-mid)",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
  fontSize: "13px",
  letterSpacing: "0.08em",
  padding: "9px 22px",
  borderRadius: "6px",
  transition: "background 0.2s ease, transform 0.2s ease",
  whiteSpace: "nowrap",
  display: "inline-block",
};

const dropdownStyle = {
  position: "absolute",
  top: "calc(100% + 12px)",
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(20,20,20,0.98)",
  border: "1px solid rgba(111,168,220,0.15)",
  borderRadius: "8px",
  minWidth: "200px",
  overflow: "hidden",
  boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
};

const dropdownItemStyle = {
  display: "block",
  padding: "12px 20px",
  color: "var(--white)",
  fontFamily: "Montserrat, sans-serif",
  fontSize: "13px",
  fontWeight: "500",
  letterSpacing: "0.03em",
  transition: "color 0.2s ease, background 0.2s ease",
};

const mobileLinkStyle = {
  display: "block",
  padding: "16px 28px",
  color: "var(--white)",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "600",
  fontSize: "18px",
  letterSpacing: "0.03em",
  transition: "color 0.2s ease",
  borderBottom: "1px solid rgba(255,255,255,0.04)",
};

const hamburgerStyle = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  flexDirection: "column",
  gap: "5px",
  padding: "4px",
};

const barStyle = {
  display: "block",
  width: "26px",
  height: "2px",
  background: "var(--white)",
  borderRadius: "2px",
};

import { useState } from "react";
import { churchImg } from "../assets/images";

const API_KEY = "46BobXnlGEI9rjiQAs4BT";
const BIBLE_ID = "78a9f6124f344018-01";

const scriptureWeeks = [
  {
    week: "March 2–6",
    scriptures: [
      "JHN.3.30",
      "PSA.37.3-6",
      "PSA.51.10-12",
      "PSA.115.1-3",
      "PSA.139.23-24",
    ],
    labels: [
      "John 3:30",
      "Psalm 37:3-6",
      "Psalm 51:10-12",
      "Psalm 115:1-3",
      "Psalm 139:23-24",
    ],
  },
  {
    week: "March 9–13",
    scriptures: [
      "PRO.3.5-6",
      "PRO.16.1-3",
      "MIC.6.8",
      "MAT.16.24-27",
      "MAT.23.11-12",
    ],
    labels: [
      "Proverbs 3:5-6",
      "Proverbs 16:1-3",
      "Micah 6:8",
      "Matthew 16:24-27",
      "Matthew 23:11-12",
    ],
  },
  {
    week: "March 16–20",
    scriptures: [
      "LUK.9.23-24",
      "JHN.15.4-5",
      "ROM.8.13-14",
      "ROM.12.1-2",
      "2CO.12.9-10",
    ],
    labels: [
      "Luke 9:23-24",
      "John 15:4-5",
      "Romans 8:13-14",
      "Romans 12:1-2",
      "2 Corinthians 12:9-10",
    ],
  },
  {
    week: "March 23–27",
    scriptures: [
      "GAL.2.20-21",
      "GAL.5.22-26",
      "EPH.4.2-6",
      "PHP.2.3-4",
      "COL.3.1-4",
    ],
    labels: [
      "Galatians 2:20-21",
      "Galatians 5:22-26",
      "Ephesians 4:2-6",
      "Philippians 2:3-4",
      "Colossians 3:1-4",
    ],
  },
  {
    week: "March 30 – April 3",
    scriptures: [
      "COL.3.12-13",
      "COL.3.23-24",
      "HEB.12.1-3",
      "JAS.4.6",
      "JHN.3.30",
    ],
    labels: [
      "Colossians 3:12-13",
      "Colossians 3:23-24",
      "Hebrews 12:1-3",
      "James 4:6, 10",
      "John 3:30",
    ],
  },
];

export default function WomensMinistry() {
  const [activeVerse, setActiveVerse] = useState(null);
  const [verseText, setVerseText] = useState("");
  const [verseRef, setVerseRef] = useState("");
  const [loading, setLoading] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  const fetchVerse = async (passageId, label) => {
    setLoading(true);
    setPanelOpen(true);
    setActiveVerse(label);
    setVerseText("");
    setVerseRef(label);

    try {
      const res = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/passages/${passageId}?content-type=text&include-verse-numbers=false`,
        { headers: { "api-key": API_KEY } },
      );
      const data = await res.json();
      const text = data?.data?.content?.replace(/\s+/g, " ").trim();
      setVerseText(text || "Verse not found.");
    } catch {
      setVerseText("Unable to load verse. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closePanel = () => {
    setPanelOpen(false);
    setTimeout(() => {
      setActiveVerse(null);
      setVerseText("");
    }, 400);
  };

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div
          className="about-hero-bg womens-hero-bg"
          style={{ backgroundImage: `url(${churchImg})` }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">Ministries</p>
          <h1 className="about-hero-title">Women's Ministry</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Welcome */}
      <section className="beliefs-intro section-dark">
        <div className="beliefs-intro-inner">
          <p className="beliefs-intro-text">
            Welcome to the Women's Ministry of The Floodgates Church. Whether
            you're a covenant partner with us or just "looking around," we're
            glad you stopped by.
          </p>
        </div>
      </section>

      {/* Monthly Letter */}
      <section className="womens-section section-dark">
        <div className="womens-container">
          <div className="womens-letter-wrap">
            <div className="womens-letter-header">
              <p className="about-eyebrow">Monthly Word</p>
              <h2 className="womens-theme">Less of Me, More of Him</h2>
              <p className="womens-month">March 2026</p>
            </div>

            <div className="womens-letter-body">
              <p>Greetings ladies.</p>
              <p>
                There are times when hearing and listening boil down to putting
                down self. I'm not talking about your self-esteem, I'm talking
                about your rights. This month's scripture writing theme is{" "}
                <em>Less of Me, More of Him.</em>
              </p>
              <p>
                We live in a time when "it's all about me" seems to be the norm:
                my rights, my privileges, me, me, me. The more you focus on
                yourself, the farther you move away from Christ. There can't be
                this half of me for me and this half of me for Jesus. Scripture
                tells us that a house divided against itself cannot stand.
                (Matthew 6:24)
              </p>
              <p>
                Matthew 16:24 talks about taking up our cross and denying self.
                How do you deny self? You reverse the way you think and act.
                Christ must be the center of it all. There must be less concern
                about how others see you and more concern about whether they're
                seeing Jesus in you. There must be less focus on what you
                deserve and more on what you can do for Christ.
              </p>
              <p>
                It's all about laying it all down and being a servant of God. It
                all comes down to less and more — less of self, more of Christ.
                As you write these scriptures, meditate on them, use them as
                prayers, and ask yourself how you can apply them to your daily
                living.
              </p>
              <p className="womens-signature">Blessings, Jamie</p>
            </div>
          </div>

          {/* Scripture Plan */}
          <div className="womens-plan-wrap">
            <div className="womens-plan-header">
              <p className="about-eyebrow">Scripture Writing Plan</p>
              <h2
                className="about-statement"
                style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
              >
                March 2026
              </h2>
              <div className="section-divider" style={{ margin: "16px 0 0" }} />
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginTop: "12px",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                Tap any verse to read it in NIV
              </p>
            </div>

            <div className="womens-weeks">
              {scriptureWeeks.map((week, i) => (
                <div key={i} className="womens-week-row">
                  <div className="womens-week-label">{week.week}</div>
                  <div className="womens-week-scriptures">
                    {week.scriptures.map((id, j) => (
                      <button
                        key={j}
                        className={`womens-scripture-chip ${activeVerse === week.labels[j] ? "active" : ""}`}
                        onClick={() => fetchVerse(id, week.labels[j])}
                      >
                        {week.labels[j]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overlay */}
      <div
        className={`verse-overlay ${panelOpen ? "open" : ""}`}
        onClick={closePanel}
      />

      {/* Slide-up Panel */}
      <div className={`verse-panel ${panelOpen ? "open" : ""}`}>
        <div className="verse-panel-handle" />
        <div className="verse-panel-inner">
          <div className="verse-panel-header">
            <div>
              <p className="verse-panel-eyebrow">NIV · Scripture</p>
              <h3 className="verse-panel-ref">{verseRef}</h3>
            </div>
            <button className="verse-panel-close" onClick={closePanel}>
              ✕
            </button>
          </div>

          <div className="verse-panel-body">
            {loading ? (
              <div className="verse-loading">
                <div className="verse-loading-dot" />
                <div className="verse-loading-dot" />
                <div className="verse-loading-dot" />
              </div>
            ) : (
              <p className="verse-text">{verseText}</p>
            )}
          </div>

          <div className="verse-panel-footer">
            <span className="verse-panel-tag">New International Version</span>
          </div>
        </div>
      </div>
    </>
  );
}

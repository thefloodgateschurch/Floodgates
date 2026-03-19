const beliefs = [
  {
    title: "The Bible",
    body: "We believe the Bible to be divinely inspired, undivided, infallible, authoritative Word of God.",
    refs: "Matthew 4:4 · 1 Thessalonians 2:13 · Hebrews 4:12 · Romans 15:4 · 1 Peter 1:23 · 2 Peter 1:20-21 · 2 Timothy 3:14-17",
  },
  {
    title: "God",
    body: "We believe that there is one God eternally existent in three persons: Father, Son, and Holy Spirit.",
    refs: "Matthew 28:19 · Luke 3:22 · Matthew 11:27 · John 10:37-38 · John 14:8-11 · 1 John 5:7",
  },
  {
    title: "Jesus Christ",
    body: "We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and redemptive death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father and His personal return in power and glory.",
    refs: "John 1:1 · John 20:28 · Matthew 1:23 · 1 Peter 1:18-19 · Romans 5:8 · Ephesians 2:13 · Acts 4:33 · Luke 24:50-53 · Acts 1:11",
  },
  {
    title: "Holy Spirit",
    body: "We believe in the present ministry of the Holy Spirit by whose indwelling and empowerment the Christian is enabled to live a Godly life. Through Him, the Spiritual enablements are operational in the Church today. Furthermore, we believe that God has provided desiring believers with an enduement of Spiritual power for the evangelization of the lost.",
    refs: "John 7:39 · John 14:15-18 · John 16:7-15 · Joel 2:28-29 · Acts 2:17-21 · Romans 12:6-8 · Acts 1:4-5, 8 · 1 Corinthians 12:1-11",
  },
  {
    title: "Salvation",
    body: "We believe that for the salvation of lost and sinful man, regeneration by the Holy Spirit is biblically essential.",
    refs: "John 3:3-8 · Hebrews 7:25 · 1 Peter 1:18-23 · Titus 3:5 · James 1:18 · 1 John 1:7-9 · 1 John 5:1-4",
  },
  {
    title: "Resurrection",
    body: "We believe in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the resurrection of damnation.",
    refs: "Matthew 25:31-33 · Mark 9:43-47 · John 5:25-29 · Acts 17:30-31 · 2 Thessalonians 1:5-10 · Revelation 20:4-6, 11-15",
  },
  {
    title: "Unity",
    body: "We believe in the spiritual unity of believers in our Lord Jesus Christ.",
    refs: "Romans 15:5 · Ephesians 4:3 · Philippians 2:1-5 · 1 Corinthians 12:14-27 · John 17:22-26 · Colossians 3:12-15 · Hebrews 10:23-25",
  },
  {
    title: "Marriage",
    body: "We believe that God has established marriage as a lifelong, exclusive relationship between one natural-born man and one natural-born woman and that all intimate sexual activity outside the marriage relationship, whether heterosexual, homosexual, or otherwise, is immoral and therefore sin.",
    refs: "Genesis 2:24 · Exodus 2:14, 17 · Leviticus 18:22-23 · Matthew 19:4-6, 9 · Romans 1:18-31 · 1 Corinthians 6:9-10, 15-20",
  },
  {
    title: "Gender",
    body: "We believe that God created the human race male and female and that all conduct with the intent to adopt a gender other than one's birth gender is immoral and therefore sin.",
    refs: "Genesis 1:27 · Deuteronomy 22:5 · Psalm 139:13-16 · 1 Corinthians 6:19",
  },
];

export default function Beliefs() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero beliefs-hero">
        <div className="about-hero-bg beliefs-hero-bg" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Our Beliefs</h1>
          <div className="about-hero-line" />
        </div>
      </section>

      {/* Intro */}
      <section className="beliefs-intro section-dark">
        <div className="beliefs-intro-inner">
          <p className="beliefs-intro-text">
            The word of God is the foundation on which The Floodgates is based.
            These core convictions support and guide the vision and ministries
            of this church.
          </p>
        </div>
      </section>

      {/* Beliefs List */}
      <section className="beliefs-list section-dark">
        <div className="beliefs-container">
          {beliefs.map((belief, i) => (
            <div key={i} className="belief-row">
              <div className="belief-number">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="belief-content">
                <h3 className="belief-title">{belief.title}</h3>
                <p className="belief-body">{belief.body}</p>
                <p className="belief-refs">{belief.refs}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import { Users } from "lucide-react";
import { churchImg } from "../assets/images";

export default function Prayer() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div
          className="about-hero-bg"
          style={{
            backgroundImage: `url(${churchImg})`,
            backgroundPosition: "center 70%",
            filter: "saturate(0.5) brightness(0.75)",
          }}
        />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="about-hero-label">The Floodgates Church</p>
          <h1 className="about-hero-title">Prayer Ministry</h1>
          <div className="about-hero-line" />
          <p className="prayer-hero-tagline">
            A lifestyle of intimately experiencing and knowing Jesus
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="prayer-content-section section-dark">
        <div className="prayer-block-container">
          <div className="prayer-block">
            <div className="prayer-block-left">
              <p className="about-eyebrow">Our Vision</p>
              <h2 className="prayer-block-title">Vision</h2>
            </div>
            <div className="prayer-block-right">
              <p className="prayer-block-body">
                The vision, passion and purpose of the Prayer Ministry is to
                bring the church into a deeper experience in their personal
                lives through personal and corporate prayer. Then from that
                place, reflecting His likeness in our daily lives at home, the
                church, our jobs and in public.
              </p>
              <p className="prayer-block-body">
                Through prayer, we pursue bringing the exact reality Jesus had
                on the earth while in communion and total submission to the
                Father which is to <em>Know</em> <strong>Him</strong>,{" "}
                <em>Love</em> <strong>Him</strong>, <em>Host</em>{" "}
                <strong>Him</strong>, <em>Grow</em> in <strong>Him</strong> and
                then <em>Share</em> <strong>Him</strong>.
              </p>
            </div>
          </div>

          <div className="prayer-rule" />

          {/* Personal Prayer */}
          <div className="prayer-block">
            <div className="prayer-block-left">
              <p className="about-eyebrow">Individual</p>
              <h2 className="prayer-block-title">Personal Prayer</h2>
            </div>
            <div className="prayer-block-right">
              <p className="prayer-block-body">
                Prayer can be summed up in{" "}
                <em>
                  the enjoyment of fellowshipping with Jesus by way of the Holy
                  Spirit within us!
                </em>{" "}
                We must never let means of prayer eclipse the object of prayer.
                Meaning, never let "praying" — your list of things to accomplish
                and concerns and worries presented to God — eclipse the person
                who you are actually praying to!
              </p>
              <p className="prayer-block-body">
                We must love Him for His loveliness. It is a harlot's love to
                love the portion more than the person. We must love being with
                Him more than what He can do for us. The foundation of prayer
                must be enjoyment of God through our union with Jesus Christ by
                way of Holy Spirit!
              </p>
            </div>
          </div>

          <div className="prayer-rule" />

          {/* Corporate Prayer */}
          <div className="prayer-block">
            <div className="prayer-block-left">
              <p className="about-eyebrow">Together</p>
              <h2 className="prayer-block-title">Corporate Prayer</h2>
            </div>
            <div className="prayer-block-right">
              <p className="prayer-block-body">
                As we gather in adoration, prayer is expressed through
                thanksgiving, praise, intercession, declaring His promises,
                creativity, and other means that focus our hearts on
                encountering Jesus. We believe that as we corporately pray and
                behold Him, we will be transformed by His Presence and more into
                His likeness.
              </p>
              <p className="prayer-block-body">
                Through hearing His voice, declaring His Word, and praying His
                heart, Heaven on Earth realities grow in our lives,
                circumstances, cities, and nations.
              </p>
            </div>
          </div>

          <div className="prayer-rule" />

          {/* 24/7 Prayer */}
          <div className="prayer-block">
            <div className="prayer-block-left">
              <p className="about-eyebrow">Always</p>
              <h2 className="prayer-block-title">24/7 Prayer</h2>
            </div>
            <div className="prayer-block-right">
              <p className="prayer-block-body">
                We desire to have a lifestyle of prayer as a church body at
                Floodgates. For that to be a reality, we seek to have 24/7
                prayer by everyone involved within the church filling out one
                hour or multiple hour slots throughout the whole day, every week
                for the whole year.
              </p>
              <p className="prayer-block-body">
                If we are to have the fulfillment of the promise of{" "}
                <em>"On Earth as it is in Heaven"</em> then we must do on earth
                as they do in Heaven, which is prayer and adoration unto our
                King!
              </p>
              <a
                href="#"
                className="prayer-timeslot-btn"
                onClick={(e) => e.preventDefault()}
                title="Time slot link coming soon"
              >
                Sign Up for a Time Slot
              </a>
            </div>
          </div>

          <div className="prayer-rule" />

          {/* Prayer Request */}
          <div className="prayer-request-card">
            <div className="prayer-request-left">
              <p className="about-eyebrow">Confidential</p>
              <h2 className="prayer-block-title">Prayer Request</h2>
              <p className="prayer-block-body" style={{ marginTop: "16px" }}>
                Your burdens and concerns are ours. We would love to support and
                encourage you through prayer and intercession.
              </p>
              <p className="prayer-block-body">
                Fill out our digital prayer card. Your prayer requests are
                confidential and are only shared with The Floodgates Church
                Prayer Team. We value your privacy when you share prayer
                requests.
              </p>
            </div>
            <div className="prayer-request-right">
              <div className="prayer-coming-soon">
                <div className="prayer-coming-icon">
                  <Users size={40} strokeWidth={1.2} color="var(--blue-mid)" />
                </div>
                <p className="prayer-coming-title">Prayer Form Coming Soon</p>
                <p className="prayer-coming-sub">
                  Our online prayer request form is being set up. In the
                  meantime, please speak with any member of our prayer team on
                  Sunday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

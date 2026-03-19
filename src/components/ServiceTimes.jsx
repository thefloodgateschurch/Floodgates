import { Users, BookOpen, Mic2 } from "lucide-react";

const GatherIcon = () => <Users size={26} strokeWidth={1.5} />;
const ReadIcon = () => <BookOpen size={26} strokeWidth={1.5} />;
const WorshipIcon = () => <Mic2 size={26} strokeWidth={1.5} />;

const services = [
  {
    Icon: GatherIcon,
    title: "Prayer",
    time: "7:45 AM",
    desc: "Begin your Sunday in the presence of God. All are welcome to join us in prayer.",
  },
  {
    Icon: ReadIcon,
    title: "Sunday School",
    time: "8:15 AM",
    desc: "Grow deeper in the Word. Classes available for all ages.",
  },
  {
    Icon: WorshipIcon,
    title: "Main Service",
    time: "10:00 AM",
    desc: "Worship together as one body — singing, preaching, and community.",
  },
];

export default function ServiceTimes() {
  return (
    <section id="services" className="section-light">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Every Sunday</p>
          <h2 className="section-heading">Service Times</h2>
          <div className="section-divider" />
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card">
              <div className="service-icon-wrap">
                <svc.Icon />
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-time">{svc.time}</p>
              <p className="service-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

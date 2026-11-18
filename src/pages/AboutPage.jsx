import { ArrowDown, ArrowUpRight, Plus, Phone, Clock3, HeartHandshake, BedDouble, Pill, ScanLine, Activity, Stethoscope } from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import ArrowButton from "../components/ui/ArrowButton.jsx";
import SiteLink from "../components/ui/SiteLink.jsx";
import { ABOUT } from "../data/about.js";
import { CONTACT } from "../data/content.js";
import "./about.css";

const icons = { HeartHandshake, BedDouble, Pill, ScanLine, Activity, Stethoscope };

export default function AboutPage() {
  return (
    <main className="about-page" id="main-content">
      <section className="about-hero px-site" data-theme="dark" aria-labelledby="about-heading">
        <div className="about-orbits" aria-hidden="true"><i /><i /><i /><Plus /></div>
        <div className="about-hero-content">
          <div>
            <p className="about-kicker"><span />{ABOUT.eyebrow}</p>
            <h1 id="about-heading">{ABOUT.title[0]}<br /><span>{ABOUT.title[1]}</span></h1>
          </div>
          <div className="about-hero-aside">
            <p>{ABOUT.introduction}</p>
            <ArrowButton href="#our-care" variant="white">Discover our care</ArrowButton>
          </div>
        </div>
        <div className="about-hero-bottom">
          <span>Bone Care Trauma Centre</span>
          <span>Caring. Healing. Leading.</span>
          <a href="#our-care" aria-label="Scroll to our care"><ArrowDown size={20} /></a>
        </div>
      </section>

      <section id="our-care" className="about-intro px-site about-section" aria-labelledby="care-heading">
        <Reveal><p className="about-kicker about-muted">01 / Care, centred on you</p></Reveal>
        <div className="about-intro-grid">
          <Reveal><h2 id="care-heading">Expert care.<br />A human touch.</h2></Reveal>
          <Reveal delay={0.1} className="about-intro-copy">
            <p className="about-lead">{ABOUT.care}</p>
            <p>{ABOUT.emergency}</p>
            <SiteLink href="/our-facilities/" className="about-text-link">Explore our facilities <ArrowUpRight size={20} /></SiteLink>
          </Reveal>
        </div>
        <div className="about-care-strip">
          <div><HeartHandshake aria-hidden="true" /><span>Compassionate patient care</span></div>
          <div><ScanLine aria-hidden="true" /><span>Advanced medical facilities</span></div>
          <div><Clock3 aria-hidden="true" /><span>Round-the-clock emergency care</span></div>
        </div>
      </section>

      <section className="about-services px-site about-section" aria-labelledby="facilities-heading">
        <div className="about-section-top">
          <Reveal><p className="about-kicker about-muted">02 / Our facilities</p><h2 id="facilities-heading">Care for every step<br />of your journey.</h2></Reveal>
          <Reveal><p className="about-section-note">Comprehensive healthcare facilities,<br />with your well-being at the centre.</p></Reveal>
        </div>
        <div className="about-service-grid">
          {ABOUT.facilities.map((item, index) => {
            const Icon = icons[item.icon];
            return <Reveal key={item.title} delay={(index % 3) * 0.06} className="about-service-card">
              <div className="about-card-top"><Icon size={27} strokeWidth={1.4} aria-hidden="true" /><span>0{index + 1}</span></div>
              <p className="about-card-category">{item.category}</p>
              <h3>{item.title}</h3><p className="about-card-description">{item.text}</p>
            </Reveal>;
          })}
        </div>
      </section>

      <section id="contact" className="about-contact px-site about-section" data-theme="dark" aria-labelledby="contact-heading">
        <div className="about-contact-grid">
          <Reveal>
            <p className="about-kicker"><span />03 / Here when you need us</p>
            <h2 id="contact-heading">Let's take care<br />of your health.</h2>
            <p className="about-contact-copy">{ABOUT.emergency}</p>
            <div className="about-contact-actions"><ArrowButton href={CONTACT.mobileHref}>Call our team</ArrowButton><a href={CONTACT.emailHref} className="about-email">Email us <ArrowUpRight size={18} /></a></div>
          </Reveal>
          <Reveal delay={0.1} className="about-hours">
            <div className="about-hours-title"><Clock3 size={23} aria-hidden="true" /><h3>Opening hours</h3></div>
            <dl>{ABOUT.hours.map(row => <div key={row.day}><dt>{row.day}</dt><dd>{row.time}</dd></div>)}</dl>
            <div className="about-emergency"><span>Emergency enquiries</span><a href={CONTACT.mobileHref}><Phone size={20} aria-hidden="true" />{CONTACT.mobile}</a></div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

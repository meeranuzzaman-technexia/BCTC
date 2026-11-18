import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus, ScanLine, Activity, Stethoscope, ShoppingBag, Pill, FlaskConical, Wind, Zap, BedDouble, Sun, Droplets, HeartPulse, Cross, ShieldCheck, Phone } from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import ArrowButton from "../components/ui/ArrowButton.jsx";
import SiteLink from "../components/ui/SiteLink.jsx";
import { CONTACT } from "../data/content.js";
import { FACILITY_CATEGORIES, FACILITY_ITEMS, FACILITY_HIGHLIGHTS } from "../data/facilities.js";
import "./about.css";
import "./facilities.css";

const icons = { ScanLine, Activity, Stethoscope, ShoppingBag, Pill, FlaskConical, Wind, Zap, BedDouble, Sun, Droplets, HeartPulse, Cross, ShieldCheck };

export default function FacilitiesPage() {
  const [category, setCategory] = useState("all");
  const visible = category === "all" ? FACILITY_ITEMS : FACILITY_ITEMS.filter(item => item.category === category);
  return (
    <main className="about-page facilities-page" id="main-content">
      <section className="about-hero facilities-hero px-site" data-theme="dark" aria-labelledby="facilities-title">
        <div className="about-orbits" aria-hidden="true"><i /><i /><i /><Plus /></div>
        <div className="about-hero-content">
          <div>
            <p className="about-kicker"><span />Our facilities</p>
            <h1 id="facilities-title">Care starts<br />with <span>confidence.</span></h1>
          </div>
          <div className="about-hero-aside">
            <p>Comprehensive healthcare facilities, brought together around patient care.</p>
            <ArrowButton href="#facility-directory" variant="white">Explore facilities</ArrowButton>
          </div>
        </div>
        <div className="about-hero-bottom"><span>Bone Care Trauma Centre</span><span>Caring. Healing. Leading.</span><a href="#facility-directory" aria-label="Scroll to facilities directory"><ArrowDown size={20} /></a></div>
      </section>

      <section className="facilities-highlights px-site" aria-label="Hospital facilities at a glance">
        {FACILITY_HIGHLIGHTS.map((item, index) => <Reveal key={item.label} delay={index * 0.08} className="facility-highlight">
          <p className="facility-highlight-number">{item.number}</p>
          <h2>{item.label}</h2><p className="facility-highlight-detail">{item.detail}</p>
        </Reveal>)}
      </section>

      <section className="facilities-directory about-section px-site" id="facility-directory" aria-labelledby="directory-heading">
        <div className="about-section-top">
          <Reveal><p className="about-kicker about-muted">01 / Designed around your care</p><h2 id="directory-heading">The right facilities.<br />All in one place.</h2></Reveal>
          <Reveal><p className="about-section-note">From diagnostics to recovery,<br />explore our hospital facilities.</p></Reveal>
        </div>
        <div className="facilities-filters" role="group" aria-label="Filter facilities by category">
          {FACILITY_CATEGORIES.map(tab => {
            const count = tab.id === "all" ? FACILITY_ITEMS.length : FACILITY_ITEMS.filter(item => item.category === tab.id).length;
            return <button key={tab.id} type="button" aria-pressed={category === tab.id} onClick={() => setCategory(tab.id)}>{tab.label}<span>{String(count).padStart(2, "0")}</span></button>;
          })}
        </div>
        <p className="facilities-result-count" role="status" aria-live="polite">Showing {visible.length} of {FACILITY_ITEMS.length} facilities</p>
        <div className="facilities-grid" id="facility-results">
          {visible.map(item => {
            const Icon = icons[item.icon];
            const label = FACILITY_CATEGORIES.find(cat => cat.id === item.category).label;
            return <article className="facility-card" key={item.number}>
              <div className="facility-card-top"><span className="facility-icon"><Icon size={26} strokeWidth={1.4} aria-hidden="true" /></span><span className="facility-card-number">{item.number}</span></div>
              <p className="about-card-category">{label}</p>
              <h3>{item.title}</h3>
              {item.detail && <p className="facility-card-detail">{item.detail}</p>}
            </article>;
          })}
        </div>
      </section>

      <section className="facilities-surgery px-site about-section" aria-labelledby="surgery-heading">
        <Reveal className="facilities-surgery-mark"><Activity strokeWidth={1} aria-hidden="true" /><span>Orthopaedic care</span></Reveal>
        <Reveal className="facilities-surgery-copy"><p className="about-kicker about-muted">02 / Special knee replacement surgery</p><h2 id="surgery-heading">Every Thursday.<br />A step towards care.</h2><p>For enquiries about special knee replacement surgery, contact our team.</p><ArrowButton href={CONTACT.mobileHref}>Enquire by phone</ArrowButton></Reveal>
      </section>

      <section id="contact" className="about-contact facilities-contact px-site about-section" data-theme="dark" aria-labelledby="facilities-contact-heading">
        <div className="about-contact-grid">
          <Reveal><p className="about-kicker"><span />03 / Get in touch</p><h2 id="facilities-contact-heading">Here to help.<br />Ready to care.</h2><p className="about-contact-copy">For information about our hospital facilities and patient care, get in touch with Bone Care Trauma Centre.</p><div className="about-contact-actions"><ArrowButton href="/contact-us/">Contact our team</ArrowButton><SiteLink href="/about-us/" className="about-email">About Bone Care <ArrowUpRight size={18} /></SiteLink></div></Reveal>
          <Reveal className="facilities-contact-details" delay={0.1}><span className="about-kicker">Speak to our team</span><a href={CONTACT.mobileHref} className="facilities-phone"><Phone size={23} aria-hidden="true" />{CONTACT.mobile}</a><a href={CONTACT.emailHref} className="facilities-email">{CONTACT.email}<ArrowUpRight size={18} aria-hidden="true" /></a><p>{CONTACT.address}</p></Reveal>
        </div>
      </section>
    </main>
  );
}

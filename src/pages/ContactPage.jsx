import { useState } from "react";
import { ArrowDown, ArrowUpRight, Plus, Phone, Mail, MapPin, Clock3, Send, ExternalLink } from "lucide-react";
import Reveal from "../components/ui/Reveal.jsx";
import ArrowButton from "../components/ui/ArrowButton.jsx";
import { CONTACT } from "../data/content.js";
import { ABOUT } from "../data/about.js";
import { CONTACT_PAGE } from "../data/contact.js";
import { sendContactEnquiry } from "../lib/contact-api.js";
import "./about.css";
import "./contact.css";

const initialFields = { name: "", email: "", phone: "", topic: "General enquiry", message: "" };

export default function ContactPage() {
  const [fields, setFields] = useState(initialFields);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const update = (event) => {
    setFields(current => ({ ...current, [event.target.name]: event.target.value }));
    if (status.type !== "sending") setStatus({ type: "idle", message: "" });
  };
  const sendMessage = async (event) => {
    event.preventDefault();
    if (status.type === "sending") return;
    if (!fields.name.trim() || !fields.message.trim()) {
      setStatus({ type: "error", message: "Please enter your name and message." });
      return;
    }
    setStatus({ type: "sending", message: "Sending your enquiry…" });
    try {
      await sendContactEnquiry(fields);
      setStatus({ type: "success", message: "Your enquiry has been sent. Thank you for contacting Bone Care. Appointment requests still require confirmation from our team." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  };

  return (
    <main className="about-page contact-page" id="main-content">
      <section className="about-hero contact-hero px-site" data-theme="dark" aria-labelledby="contact-title">
        <div className="about-orbits" aria-hidden="true"><i /><i /><i /><Plus /></div>
        <div className="about-hero-content">
          <div><p className="about-kicker"><span />Contact Bone Care</p><h1 id="contact-title">{CONTACT_PAGE.title[0]}<br /><span>{CONTACT_PAGE.title[1]}</span></h1></div>
          <div className="about-hero-aside"><p>{CONTACT_PAGE.introduction}</p><ArrowButton href={CONTACT.mobileHref}>Call our team</ArrowButton></div>
        </div>
        <div className="about-hero-bottom"><span>Hyderabad, Sindh, Pakistan</span><span>Caring. Healing. Leading.</span><a href="#contact-details" aria-label="Scroll to contact details"><ArrowDown size={20} /></a></div>
      </section>

      <section className="contact-options px-site" id="contact-details" aria-label="Contact details">
        <Reveal className="contact-option"><div className="contact-option-top"><Phone aria-hidden="true" size={25} strokeWidth={1.4} /><span>01 / Call us</span></div><h2>Speak to our team.</h2><a href={CONTACT.mobileHref} className="contact-primary-link">{CONTACT.mobile}<ArrowUpRight size={22} aria-hidden="true" /></a><p>For hospital information and general enquiries.</p></Reveal>
        <Reveal className="contact-option" delay={0.08}><div className="contact-option-top"><Mail aria-hidden="true" size={25} strokeWidth={1.4} /><span>02 / Email us</span></div><h2>Start a conversation.</h2><a href={CONTACT.emailHref} className="contact-primary-link contact-email-link">{CONTACT.email}<ArrowUpRight size={22} aria-hidden="true" /></a><p>Send your non-urgent enquiry by email.</p></Reveal>
        <Reveal className="contact-option" delay={0.16}><div className="contact-option-top"><MapPin aria-hidden="true" size={25} strokeWidth={1.4} /><span>03 / Find us</span></div><h2>Visit Bone Care.</h2><a href={CONTACT_PAGE.mapsUrl} target="_blank" rel="noopener noreferrer" className="contact-primary-link">Hyderabad, Sindh<ArrowUpRight size={22} aria-hidden="true" /></a><p>Open our location in Google Maps.</p></Reveal>
      </section>

      <section className="contact-enquiry about-section px-site" id="send-enquiry" aria-labelledby="enquiry-heading">
        <div className="contact-enquiry-grid">
          <aside className="contact-enquiry-intro"><Reveal><p className="about-kicker about-muted">01 / Get in touch</p><h2 id="enquiry-heading">A conversation<br />starts here.</h2><p>Have a question about our hospital or facilities? Send an enquiry to our team.</p></Reveal></aside>
          <Reveal delay={0.1}>
            <form className="contact-form" onSubmit={sendMessage} aria-label="Contact enquiry" aria-busy={status.type === "sending"}>
              <div className="contact-form-row"><label htmlFor="enquiry-name">Full name <span>(required)</span><input id="enquiry-name" name="name" autoComplete="name" value={fields.name} onChange={update} required maxLength={100} pattern={".*\\S.*"} placeholder="Your full name" /></label><label htmlFor="enquiry-email">Email address <span>(required)</span><input id="enquiry-email" type="email" name="email" autoComplete="email" value={fields.email} onChange={update} required maxLength={150} placeholder="you@example.com" /></label></div>
              <div className="contact-form-row"><label htmlFor="enquiry-phone">Phone number <span>(optional)</span><input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={update} maxLength={40} placeholder="Your contact number" /></label><label htmlFor="enquiry-topic">Enquiry type<select id="enquiry-topic" name="topic" value={fields.topic} onChange={update}>{CONTACT_PAGE.topics.map(topic => <option key={topic}>{topic}</option>)}</select></label></div>
              <label htmlFor="enquiry-message">Your message <span>(required)</span><textarea id="enquiry-message" name="message" value={fields.message} onChange={update} required rows={5} maxLength={1200} placeholder="How can our team help?" aria-describedby="enquiry-privacy" /></label>
              <p id="enquiry-privacy" className="contact-privacy">Please do not include medical records, CNIC details or other sensitive information. Appointment enquiries are not confirmed bookings.</p>
              <button type="submit" className="contact-submit" disabled={status.type === "sending"}>{status.type === "sending" ? "Sending…" : "Send message"}<Send size={18} aria-hidden="true" /></button>
              {status.message && <p className={`contact-form-status contact-form-status--${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="contact-location about-section px-site" id="find-us" aria-labelledby="location-heading">
        <div className="contact-location-grid">
          <Reveal className="contact-map-card">
            <iframe
              className="contact-map-frame"
              src={CONTACT_PAGE.mapsEmbedUrl}
              title="Google Map — Bone Care Trauma Centre, Hyderabad"
              width="600"
              height="460"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map-footer"><span>Bone Care Trauma Centre · Hyderabad</span><a href={CONTACT_PAGE.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps<ExternalLink size={16} aria-hidden="true" /></a></div>
          </Reveal>
          <Reveal className="contact-visit-info" delay={0.1}><p className="about-kicker about-muted">02 / Plan your visit</p><h2 id="location-heading">Here when<br />you need us.</h2><address><strong>{CONTACT_PAGE.location}</strong><span>{CONTACT_PAGE.locality}</span></address><div className="contact-opening-title"><Clock3 size={20} aria-hidden="true" /><h3>Opening hours</h3></div><dl className="contact-opening-hours">{ABOUT.hours.map(row => <div key={row.day}><dt>{row.day}</dt><dd>{row.time}</dd></div>)}</dl><p className="contact-hours-note">Please call ahead for department availability and appointments.</p></Reveal>
        </div>
      </section>
      <section className="contact-final px-site" data-theme="dark" aria-labelledby="contact-final-heading"><div><p className="about-kicker"><span />Let's connect</p><h2 id="contact-final-heading">Your health. Our priority.</h2></div><ArrowButton href={CONTACT.mobileHref}>Call Bone Care</ArrowButton></section>
    </main>
  );
}

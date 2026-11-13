/* ==========================================================================
   Bone Care Trauma Centre — Home page content
   Source: Bone_Care_Trauma_Centre_Website_Content_Maven.pdf (Page 01: HOME)
   Media assets (images / video) intentionally kept from the previous build.
   ========================================================================== */

/* ==========================================================================
   NOTE: Sections that existed in the previous MyHealthPrac build but are not
   in the Bone Care content document (WhatIf, HealthHub, Conditions, CareModes,
   Timeline, FAQ, Waitlist) have been commented out in App.jsx. Their content
   exports live in the git history (see the initial commit) and can be restored
   from there if ever needed.
   ========================================================================== */

export const MEDIA = {
  heroVideo:
    "https://videos.pexels.com/video-files/3971197/3971197-hd_1920_1080_24fps.mp4",
  // heroPoster removed: remote "abstract texture" poster used to flash before the
  // local hero video (5.mp4) loaded. Hero now shows a clean near-black bg until the video plays.
  sideImage:
    "https://images.pexels.com/photos/14996421/pexels-photo-14996421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
  careModes:
    "https://images.pexels.com/photos/5700035/pexels-photo-5700035.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1900",
  faqImage:
    "https://images.pexels.com/photos/31507195/pexels-photo-31507195.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1000",
  ctaImage:
    "https://images.pexels.com/photos/3776451/pexels-photo-3776451.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1900",
};

/* SECTION 1 — Header / Navigation
   Logo: Bone Care Trauma Centre · Nav: Home | About Us | Facilities | Contact Us · CTA: Contact Us */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact Us", href: "#contact" },
];

export const MOBILE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact Us", href: "#contact" },
];

export const CONTACT = {
  address: "Bone Care Trauma Centre, Hyderabad, Sindh, Pakistan",
  phone1: "022-2113610",
  phone2: "022-2113611",
  mobile: "+92 333 2311761",
  phone1Href: "tel:+92222113610",
  phone2Href: "tel:+92222113611",
  mobileHref: "tel:+923332311761",
  email: "info@bonecare.com.pk",
  emailHref: "mailto:info@bonecare.com.pk",
};

/* SECTION 2 — Hero Banner */
export const HERO = {
  label: "BONE CARE TRAUMA CENTRE · HYDERABAD",
  title: "Comprehensive Healthcare, Rooted in Care.",
  sub: "A modern multi-specialty hospital dedicated to patient care, trauma management and orthopaedic services. Serving the community with accessible emergency and elective healthcare since 2001.",
  primary: "Explore Our Facilities",
  secondary: "Contact Us",
};

/* SECTION 3 — Introduction / Hospital Overview
   (light split editorial: copy + real photo; facts sourced from the content document) */
export const INTRO = {
  label: "Who We Are",
  title: "Healthcare that puts people first",
  sub: "Expertise in trauma care, orthopaedics and healing",
  emphasis: "Trusted care, built on experience.",
  image: "/media/building-night.jpg",
  imageAlt: "Bone Care Trauma Centre — hospital building illuminated at night, Hyderabad",
  badge: "First hospital in Hyderabad licensed by SHCC",
  stats: [
    { value: "2001", label: "Year of establishment" },
    { value: "89", label: "Beds as of 2023" },
    { value: "SHCC", label: "Regular licensing recognition" },
  ],
  cta: "See Our Journey",
};

/* SECTION 4 — Core Areas of Care (three image cards + surgical care) */
export const CORE_AREAS = {
  title: "Core Areas of Care",
  tagline: "Comprehensive facilities and support for every stage of your care.",
  cards: [
    {
      n: "01",
      title: "Trauma & Emergency",
      sub: "Round-the-Clock Care",
      desc: "Round-the-clock emergency services to support patients requiring immediate medical attention.",
      image:
        "/media/1.jpg",    },
    {
      n: "02",
      title: "Orthopaedic Surgery",
      sub: "Knee Replacement",
      desc: "Specialized orthopaedic care and surgical procedures, including knee replacement surgery.",
      image:
        "/media/2.jpg",    },
    {
      n: "03",
      title: "Diagnostic Services",
      sub: "CT · X-Ray · Ultrasound · Lab",
      desc: "Diagnostic facilities including CT Scan, X-Ray, ultrasound and laboratory services to support patient assessment and treatment.",
      image:
        "/media/3.jpg",    },
    {
      n: "04",
      title: "Surgical Care",
      sub: "OT · Endoscopy · Laparoscopy",
      desc: "Surgical facilities including modular operation theatres, endoscopy and laparoscopy.",
      image:
        "/media/4.jpg",    },
  ],
  additional: [
    {
      title: "Surgical Facilities",
      desc: "Modern modular operation theatres supported by endoscopy, laparoscopy and C-Arm facilities.",
    },
    {
      title: "Physiotherapy & Rehabilitation",
      desc: "Rehabilitation and physiotherapy services to support recovery and mobility.",
    },
    {
      title: "Patient Care & Support",
      desc: "In-house pharmacy, patient rooms, wards and counseling services.",
    },
  ],
  cta: "View All Facilities",
};

/* SECTION 5 — Hospital History / Credibility (visual storytelling) */
export const JOURNEY = {
  label: "OUR JOURNEY",
  title: ["Growing Through Experience.", "Serving Through Care."],
  text: "Established in 2001 with 12 beds, Bone Care Trauma Centre has grown into a multi-specialty healthcare facility. The hospital expanded from a single-specialty orthopaedics hospital into a broader medical and surgical care institution. Bone Care Trauma Centre is the first hospital in Hyderabad, Sindh, licensed by the Sindh Healthcare Commission (SHCC).",
  stats: [
    { value: "2001", label: "Year of establishment" },
    { value: "12 Beds", label: "Initial hospital capacity" },
    { value: "89 Beds", label: "Hospital capacity as of 2023" },
    { value: "SHCC", label: "Regular licensing recognition" },
  ],
  cta: "Discover Our Story",
};

/* SECTION 6 — Facilities Preview (light image-card grid) */
export const FACILITIES = {
  title: "Facilities Designed Around Patient Care",
  sub: "Our hospital brings together essential medical, diagnostic, surgical and patient-care facilities to support treatment and recovery.",
  cards: [
    {
      n: "01",
      title: "Emergency & Critical Care",
      desc: "24/7 Emergency, ICU and HDU facilities.",
      image:
        "https://images.pexels.com/photos/4749898/pexels-photo-4749898.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=760",
    },
    {
      n: "02",
      title: "Diagnostic Facilities",
      desc: "CT Scan, X-Ray, Ultrasound and In-House Laboratory.",
      image:
        "https://images.pexels.com/photos/7506046/pexels-photo-7506046.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=760",
    },
    {
      n: "03",
      title: "Surgical Facilities",
      desc: "Modular Operation Theatres, Endoscopy, Laparoscopy and C-Arm.",
      image:
        "https://images.pexels.com/photos/29061547/pexels-photo-29061547.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=760",
    },
    {
      n: "04",
      title: "Patient Support",
      desc: "Physiotherapy, Rehabilitation, Pharmacy, Private Rooms and Wards.",
      image:
        "https://images.pexels.com/photos/7599030/pexels-photo-7599030.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=760",
    },
  ],
  cta: "Explore All Facilities",
};

/* SECTION 7 — Licensing / Recognition (centered banner replacing the logo strip) */
export const RECOGNITION = {
  label: "SHCC Regular License",
  title: "A Milestone in Healthcare for Hyderabad",
  text: "Bone Care Trauma Centre is the first hospital in Hyderabad, Sindh, licensed by the Sindh Healthcare Commission (SHCC).",
};

/* SECTION 8 — Final Call to Action (gradient / full-bleed CTA) */
export const CTA = {
  title: "Your Health Deserves Dedicated Care.",
  text: "For healthcare inquiries, emergency assistance or information about our hospital facilities, get in touch with Bone Care Trauma Centre.",
  primary: "Contact Us",
  secondary: "Call Now",
};

/* SECTION 9 — Footer */
export const FOOTER = {
  logo: "Bone Care Trauma Centre",
  tagline: "Caring • Healing • Leading",
  since: "Serving the community with excellence since 2001.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Facilities", href: "#facilities" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Our Facilities",
      links: [
        { label: "Emergency Care", href: "#facilities" },
        { label: "Orthopaedic Services", href: "#facilities" },
        { label: "Diagnostic Services", href: "#facilities" },
        { label: "ICU & HDU", href: "#facilities" },
        { label: "Operation Theatres", href: "#facilities" },
      ],
    },
    {
      title: "Contact Information",
      links: [
        { label: "Bone Care Trauma Centre, Hyderabad, Sindh, Pakistan", href: "#contact" },
        { label: "Phone: 022-2113610 / 022-2113611", href: "tel:+92222113610" },
        { label: "Mobile: +92 333 2311761", href: "tel:+923332311761" },
        { label: "info@bonecare.com.pk", href: "mailto:info@bonecare.com.pk" },
      ],
    },
  ],
  bottom: "© Bone Care Trauma Centre. All Rights Reserved.",
};

/* Footer social icons — ⚠️ PLACEHOLDER hrefs.
   Bone Care ke real social URLs available nahi hain; inhe real links se replace
   karein (ya poora array hata den, Footer automatically row hide kar deta hai). */
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

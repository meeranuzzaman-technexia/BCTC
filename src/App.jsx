import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FacilitiesPage from "./pages/FacilitiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SiteLink from "./components/ui/SiteLink.jsx";

function PageEffects() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();
  useEffect(() => {
    const pagePath = pathname.replace(/\/$/, "");
    const metadata = {
      "/about-us": {
        title: "About Us | Bone Care Trauma Centre",
        description: "Discover Bone Care Trauma Centre: patient care, medical facilities, opening hours and emergency enquiries. Your health, our priority.",
      },
      "/our-facilities": {
        title: "Our Facilities | Bone Care Trauma Centre",
        description: "Explore Bone Care Trauma Centre facilities: diagnostics, operation theatres, ICU and HDU, patient rooms, wards and hospital support services.",
      },
      "/contact-us": {
        title: "Contact Us | Bone Care Trauma Centre",
        description: "Contact Bone Care Trauma Centre in Hyderabad, Sindh. Find our phone number, email, opening hours and Google Maps location, or prepare a general enquiry.",
      },
    };
    const page = metadata[pagePath] || {
      title: "Bone Care Trauma Centre — Comprehensive Healthcare, Rooted in Care | Hyderabad",
      description: "Bone Care Trauma Centre — a modern multi-specialty hospital in Hyderabad, Sindh, dedicated to patient care, trauma management and orthopaedic services.",
    };
    document.title = page.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = page.description;
    const frame = requestAnimationFrame(() => {
      let target = null;
      try { target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null; } catch { /* malformed hash */ }
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(target || 0, { immediate: true, force: true });
      } else if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, lenis]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-grey text-ink antialiased">
      <PageEffects />
      <Header key={pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-facilities" element={<FacilitiesPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="*" element={<main className="px-site pt-40 pb-24 min-h-[70vh]"><h1 className="t-h2">Page not found</h1><p className="t-base my-8">This page is not available.</p><SiteLink href="/" className="underline">Return home</SiteLink></main>} />
      </Routes>
      <Footer />
    </div>
  );
}

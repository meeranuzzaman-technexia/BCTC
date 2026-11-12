// ---------------------------------------------------------------------------
// Bone Care Trauma Centre — Home page
// Content source: Bone_Care_Trauma_Centre_Website_Content_Maven.pdf (Page 01)
//
// Sections from the previous site that do NOT exist in the document have been
// commented out (not deleted) — re-enable by uncommenting the import and the
// matching <Component /> line below.
// ---------------------------------------------------------------------------

// import { WaitlistProvider } from "./context/WaitlistContext.jsx"; // waitlist flow not in document
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Overview from "./components/Overview.jsx";
import CoreAreas from "./components/CoreAreas.jsx";
// import WhatIf from "./components/WhatIf.jsx";           // not in document — removed
import Sides from "./components/Sides.jsx";
// import HealthHub from "./components/HealthHub.jsx";     // dashboard not in document — removed
// import Conditions from "./components/Conditions.jsx";   // health-conditions grid not in document — removed
// import CareModes from "./components/CareModes.jsx";     // not in document — removed
import FacilitiesOrbit from "./components/FacilitiesOrbit.jsx";
// import Timeline from "./components/Timeline.jsx";       // not in document — removed
import Recognition from "./components/Recognition.jsx";
// import FAQ from "./components/FAQ.jsx";                 // FAQ not in document — removed
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
// import WaitlistModal from "./components/WaitlistModal.jsx"; // waitlist flow not in document — removed

export default function App() {
  return (
    // <WaitlistProvider> // waitlist flow not in document
    <div className="min-h-screen bg-grey text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Overview />
        <CoreAreas />
        <Sides />

        {/* Facilities: sticky, apne file mein -mb-[100svh] hai */}
        <FacilitiesOrbit />

        {/* Recognition: Facilities ke upar aata hai, phir khud pin hoke CTA ko neeche se aane deta hai */}
        <div className="relative z-20 -mb-[100svh] pb-[100svh]">
          <div className="sticky top-0 min-h-[100svh] bg-paper shadow-[0_-30px_60px_rgba(0,0,0,0.35)]">
            <Recognition />
          </div>
        </div>

        {/* CTA: Recognition ke upar overlay */}
        <CTA />
      </main>
      <Footer />
      {/* <WaitlistModal /> */}
    </div>
    // </WaitlistProvider>
  );
}

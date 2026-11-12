import { WaitlistProvider } from "./context/WaitlistContext.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Overview from "./components/Overview.jsx";
import WhatIf from "./components/WhatIf.jsx";
import Sides from "./components/Sides.jsx";
import HealthHub from "./components/HealthHub.jsx";
import Conditions from "./components/Conditions.jsx";
import CareModes from "./components/CareModes.jsx";
import Tables from "./components/Tables.jsx";
import Timeline from "./components/Timeline.jsx";
import FAQ from "./components/FAQ.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import WaitlistModal from "./components/WaitlistModal.jsx";

export default function App() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-grey text-ink antialiased">
        <Header />
        <main>
          <Hero />
          <Overview />
          <WhatIf />
          <Sides />
          <HealthHub />
          <Conditions />
          <CareModes />
          <Tables />
          <Timeline />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <WaitlistModal />
      </div>
    </WaitlistProvider>
  );
}

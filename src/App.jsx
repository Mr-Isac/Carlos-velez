import React, { useState } from "react";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { PopupModal } from "react-calendly";

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div>
      <Navbar onOpenCalendly={() => setIsCalendlyOpen(true)} />
      <main>
        <Hero onOpenCalendly={() => setIsCalendlyOpen(true)} />
        <Services />
      </main>
      {/* Calendly Popup Modal */}
      <PopupModal
        url="https://calendly.com/ixaacm10/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
}

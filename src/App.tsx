import React, { useState } from "react";
import { WhatsAppProvider } from "./config/whatsapp";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { MethodologySection } from "./components/MethodologySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FooterSection } from "./components/FooterSection";
import {
  PrivacyPolicyModal,
  WhatsAppFloatingButton,
} from "./components/WhatsAppWidgets";

export function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <WhatsAppProvider>
      <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">
        <Navbar />

        <main>
          <HeroSection />
          <ServicesSection />
          <MethodologySection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>

        <FooterSection onOpenPrivacy={() => setPrivacyOpen(true)} />

        <WhatsAppFloatingButton />
        <PrivacyPolicyModal
          open={privacyOpen}
          onClose={() => setPrivacyOpen(false)}
        />
      </div>
    </WhatsAppProvider>
  );
}

export default App;

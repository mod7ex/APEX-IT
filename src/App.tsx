/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Initialize i18n
import "./lib/i18n";

import { useSEO } from "./hooks/useSEO";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { About } from "./sections/About";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { Industries } from "./sections/Industries";
import { Technologies } from "./sections/Technologies";
import { Portfolio } from "./sections/Portfolio";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  // Initialize dynamic SEO parameters, headers, and localized titles
  useSEO();

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#1434CB] selection:text-white antialiased">
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Structured Enterprise Sections Layout */}
      <main className="relative">
        {/* Landing Hero Screen with Dynamic Connecting Grid particles */}
        <Hero />

        {/* Services Grouping categorised layout with elegant hover indicators */}
        <Services />

        {/* Global corporate partner About presentation */}
        <About />

        {/* Stats and Metrics of Success */}
        <WhyChooseUs />

        {/* Served Verticals Industries */}
        <Industries />

        {/* Technologies Grid of the global tech stack */}
        <Technologies />

        {/* Case-study Projects Mockups Portfolio */}
        <Portfolio />

        {/* Client reviews slider carousel */}
        <Testimonials />

        {/* Secure Message and coordinates maps details Contact */}
        <Contact />
      </main>

      {/* Nav links and legal Copyrights footer footer */}
      <Footer />
    </div>
  );
}

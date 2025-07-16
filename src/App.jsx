import { useState } from "react";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Contact from "./componets/Conact";
import SectionWrapper from "./componets/SectionWrapper";
import BubbleTransition from "./componets/HeroModels/BubbleTransition";
import InteractiveStars from "./componets/HeroModels/Stars.jsx";
import About from "./sections/About";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavigateToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white shadow z-50 flex items-center justify-between px-6 py-3">
        <div className="font-bold text-lg tracking-wide">Kevin Jijon</div>
        <div className="flex gap-6 text-base font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>
      {/* Spacer for nav bar */}
      <div className="h-14"></div>
      {/*  Space Background static- always visible */}
      <div className="fixed top-0 left-0 w-full h-full z-10">
        <InteractiveStars isInteractive={activeSection === "contact"} />
      </div>
      


      {/* BubbleTransition only shows when not in contact */}
      <BubbleTransition 
        isActive={activeSection !== "contact"} 
        onNavigateToContact={handleNavigateToContact}
      />

      <SectionWrapper id="hero" onVisible={setActiveSection}>
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about" onVisible={setActiveSection}>
        <About />
      </SectionWrapper>

      <SectionWrapper id="experience" onVisible={setActiveSection}>
        <Experience />
      </SectionWrapper>

      <SectionWrapper id="projects" onVisible={setActiveSection}>
        <div className="min-h-screen text-white flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects</h2>
            <p className="text-xl md:text-2xl text-gray-300">Coming Soon...</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" onVisible={setActiveSection}>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default App;


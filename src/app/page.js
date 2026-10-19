import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutSection from "./components/AboutSection";
import CVSection from "./components/CVSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#10110f] font-sans text-white" id="top">
      <Nav />
      <Hero />
      <Marquee />
      <AboutSection />
      <CVSection />
      <Footer />
    </div>
  );
}

import Sidebar from "../components/layout/Sidebar";
import HeroSection from "../components/sections/HeroSection";
import TechMarquee from "../components/sections/TechMarquee";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";
import "../styles/portfolio.css";
// import MobileNavBar from "../components/layout/MobileNavBar";

export default function PortfolioPage() {
  return (
    <div className="bg-background-light font-display text-slate-800 antialiased">
      <Sidebar />
      {/* <MobileNavBar /> */}
      <main className="sm:ml-20 md:ml-24 min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechMarquee />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

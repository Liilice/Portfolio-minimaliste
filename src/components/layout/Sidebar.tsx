import { useState } from "react";

type activeSection = "Home" | "Experience" | "Projects" | "Stack" | "Contact";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<activeSection>("Home");

  function NavIcon({
    href,
    icon,
    label,
  }: {
    href: string;
    icon: string;
    label: activeSection;
  }) {
    return (
      <a
        className="group relative flex items-center justify-center"
        href={href}
        onClick={() => setActiveSection(label)}
      >
        <span
          className={[
            "material-icons transition-colors",
            activeSection === label
              ? "text-primary group-hover:scale-110 transition-transform"
              : "text-slate-400 hover:text-primary",
            "hover:text-primary group-hover:scale-110 transition-transform",
          ].join(" ")}
        >
          {icon}
        </span>
        <span className="absolute left-16 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      </a>
    );
  }

  return (
    <aside className="hidden fixed top-0 left-0 h-screen w-20 md:w-24 border-r border-primary/10 bg-white/80 backdrop-blur-md sm:flex flex-col justify-between items-center py-10 z-50">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl mb-12">
          EL
        </div>

        <nav className="flex flex-col gap-8">
          <NavIcon href="#home" icon="home" label="Home" />
          <NavIcon href="#experience" icon="work_outline" label="Experience" />
          <NavIcon href="#projects" icon="grid_view" label="Projects" />{" "}
          <NavIcon href="#tech" icon="layers" label="Stack" />
          <NavIcon href="#contact" icon="mail_outline" label="Contact" />
        </nav>
      </div>
    </aside>
  );
}

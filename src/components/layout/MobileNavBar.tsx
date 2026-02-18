import { useState } from "react";

type activeSection = "Home" | "Experience" | "Projects" | "Stack" | "Contact";

export default function MobileNavBar() {
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
              ? "text-primary group-hover:scale-110 transition-transform border-b-3 border-b-black"
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
    <nav className="flex flex-row justify-around items-center sm:hidden gap-8 bg-white fixed bottom-0 w-full h-16 border-t border-slate-200 z-[1000]">
      <NavIcon href="#home" icon="home" label="Home" />
      <NavIcon href="#experience" icon="work_outline" label="Experience" />
      <NavIcon href="#projects" icon="grid_view" label="Projects" />{" "}
      <NavIcon href="#tech" icon="layers" label="Stack" />
      <NavIcon href="#contact" icon="mail_outline" label="Contact" />
    </nav>
  );
}

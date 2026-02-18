import {useState } from "react";
import ProjectCard from "../ui/ProjectCard";
import PROJECTS from "../../data/projects";

type Filter = "All" | "Mobile" | "Web" | "Design";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="px-6 py-10 md:px-20 lg:px-10 xl:px-32 sm:py-20" id="projects">
      <header className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-4">Projets Phares</h2>
          <p className="text-slate-500">
            Une sélection de projets dans des domaines variés :
          </p>
        </div>

        <div className="flex gap-4">
          <FilterButton
            active={filter === "All"}
            onClick={() => setFilter("All")}
          >
            Tout
          </FilterButton>
          <FilterButton
            active={filter === "Mobile"}
            onClick={() => setFilter("Mobile")}
          >
            Mobile
          </FilterButton>
          <FilterButton
            active={filter === "Web"}
            onClick={() => setFilter("Web")}
          >
            Web App
          </FilterButton>
          <FilterButton
            active={filter === "Design"}
            onClick={() => setFilter("Design")}
          >
            Design
          </FilterButton>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        {visible.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "text-sm font-semibold pb-1 transition-colors",
        active
          ? "text-primary border-b-2 border-primary"
          : "text-slate-400 hover:text-slate-600",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

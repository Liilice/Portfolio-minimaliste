import ExperienceCard, { type Experience } from "../ui/ExperienceCard";

const EXPERIENCE: Experience[] = [
  {
    title: "Développeure Web - Freelance",
    company: "Whitecoats",
    date: "11/2026 — PRESENT",
    description: `Refonte & optimisation produit
Pilotage de la refonte complète du site web (UX/UI, performance)
Amélioration de la vitesse de chargement des vidéos de +45 %
Mise en place d’un processus d’amélioration continue basé sur l’analyse des données utilisateurs (Google Analytics)`,
    tags: ["Web Site"],
  },
  {
    title: "Développeure Web - Freelance",
    company: "F CONNECTION",
    date: "01/2026 — PRESENT",
    description: `Maintenance & optimisation no-code
Implémentation d’améliorations fonctionnelles ayant généré +18 % d’engagement utilisateur
Optimisation SEO (+25 % de trafic organique)`,
    tags: ["Web Site", "No-code"],
  },
  {
    title: "Alternante Développeuse Full Stack",
    company: "FABLIFE",
    date: "10/2024 - 11/2025",
    description: `Refonte & optimisation produit 
Amélioration continue du produit BeMum, avec optimisation des performances et correction de bugs
Optimisation SEO technique (balises, structure, performance, accessibilité) ayant contribué à une augmentation du trafic%
Refonte de l’application mobile (UI/UX et optimisation des performances), entraînant une augmentation du taux d’engagement utilisateur`,
    tags: ["Web Site", "Mobile"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-6 py-10 md:px-20 lg:px-10 xl:px-32 sm:py-20 border-y border-slate-200  bg-slate-50" id="experience">
      <h2 className="text-4xl font-bold mb-10">Expériences</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {EXPERIENCE.map((e) => (
          <ExperienceCard key={`${e.title}-${e.company}`} item={e} />
        ))}
      </div>
    </section>
  );
}
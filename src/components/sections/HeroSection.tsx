import ArchitectureTerminal from "./DeveloperTerminal";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center px-6 py-10 md:px-20 lg:px-10 xl:px-32 sm:py-20 overflow-hidden "
      id="home"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="order-1  lg:order-1">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Développeuse Junior Full-Stack web &amp; mobile
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 sm:mb-8">
            Créer des expériences numériques fluides.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-10 leading-relaxed ">
            Ce qui me motive ? Découvrir de nouveaux projets, m'investir
            pleinement et grandir à chaque challenge. J'adore l'idée que mon
            code puisse faciliter la vie des utilisateurs.
          </p>

          <div className="flex items-center gap-6 mb-5">
            <a
              className="bg-primary rounded hover:bg-primary/90 transition-all font-medium items-center gap-2 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="#projects"
            >
              Voir mes projets{" "}
            </a>{" "}
            <span className="material-icons text-sm">arrow_forward</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              className="bg-primary rounded hover:bg-primary/90 transition-all font-medium items-center gap-2 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="#projects"
            >
              Discutons ensemble
            </a>{" "}
            <span className="material-icons text-sm">arrow_forward</span>
          </div>
        </div>

        <div className="order-2 lg:order-2 relative">
          <ArchitectureTerminal />
        </div>
      </div>
    </section>
  );
}

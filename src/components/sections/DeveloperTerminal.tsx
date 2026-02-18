export default function DeveloperTerminal() {
  return (
    <div className="w-full bg-[#F8FAFC] border border-slate-200 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-300" />
        <div className="w-3 h-3 rounded-full bg-slate-300" />
        <div className="w-3 h-3 rounded-full bg-green-300" />
        <span className="ml-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          terminal — developer.js
        </span>
      </div>

      <div className="p-4 sm:p-8 space-y-2">
        <div className="flex gap-4">
          <span className="text-slate-300 select-none">01</span>
          <span>const profile = {"{"}</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">02</span>
          <span className="pl-4">nom_prenom : "Alice Zheng",</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">03</span>
          <span className="pl-4">telephone : "+33 6 52 42 21 42",</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">04</span>
          <span className="pl-4">email : "alice.zheng@epitech.eu",</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">05</span>
          <span className="pl-4">location : "Île-de-France",</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">06</span>
          <span className="pl-4">
            ma_valeur_ajoutee : "J'aime particulièrement travailler en équipe,
            où je peux apprendre des autres tout en contribuant mes idées. Ma
            curiosité me pousse à découvrir constamment de nouvelles
            technologies, et je m'investis pleinement dans chaque projet pour
            grandir professionnellement.",
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">07</span>
          <span className="pl-4">
            mon_etat_d_esprit: "Toujours en apprentissage, je transforme les
            défis en opportunités de progression.",
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">08</span>
          <span className="pl-4">
            objectif: "Continuer à évoluer dans un environnement stimulant et
            innovant."
          </span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">09</span>
          <span>{"};"}</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">10</span>
          <span />
        </div>

        <div className="flex gap-4 sm:pt-4 border-t border-slate-100 sm:mt-4">
          <span className="text-slate-300 select-none">$</span>
          <span className="text-slate-600">
            node developer.js<span className="animate-pulse">_</span>
          </span>
        </div>
      </div>
    </div>
  );
}

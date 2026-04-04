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

      <div className="p-4 sm:p-8 space-y-2 bg-[#1F1F1F]">
        <div className="flex gap-4">
          <span className="text-slate-300 select-none">01</span>
          <p>
            <span className="text-[#569CD6]">const</span>{" "}
            <span className="text-[#4FC1FF]">profile </span>
            <span className="text-white"> = </span>
            <span className="text-[#FFD602]">{"{"}</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">02</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">nom_prenom:</span>
            <span className="text-[#CE9178]"> "Alice Zheng"</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">03</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">telephone:</span>
            <span className="text-[#CE9178]"> "+33 6 52 42 21 42"</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">04</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">email:</span>
            <span className="text-[#CE9178]"> "alice.zheng@epitech.eu"</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">05</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">titre:</span>
            <span className="text-[#CE9178]">
              {" "}
              "Développeuse Fullstack Web & Mobile"
            </span>
            <span className="text-white">,</span>
          </p>
        </div>

        {/* <div className="flex gap-4">
          <span className="text-slate-300 select-none">06</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">recherche:</span>
            <span className="text-[#CE9178]"> "Alternance web/mobile"</span>
            <span className="text-white">,</span>
          </p>
        </div> */}

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">06</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">disponibilite:</span>
            <span className="text-[#CE9178]"> "Immédiate"</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">07</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">location:</span>
            <span className="text-[#CE9178]"> "Île-de-France"</span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">08</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">ma_valeur_ajoutee:</span>
            <span className="text-[#CE9178]">
              {" "}
              "Je conçois et développe des applications web et mobiles
              performantes, avec une attention particulière à la qualité du code
              et à l’expérience utilisateur."
            </span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">09</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">stack:</span>
            <span className="text-[#CE9178]">
              {" "}
              ["React", "TypeScript", "React Native", "NestJS", "PostgreSQL"]
            </span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">10</span>
          <p>
            <span className="pl-4 text-[#9CDCFE]">experience:</span>
            <span className="text-[#CE9178]">
              {" "}
              "Projets web et mobiles (front, back, API)"
            </span>
            <span className="text-white">,</span>
          </p>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">11</span>
          <span className="text-[#FFD602]">{"};"}</span>
        </div>

        <div className="flex gap-4">
          <span className="text-slate-300 select-none">12</span>
          <span />
        </div>

        <div className="flex gap-4 sm:pt-4 border-t border-slate-100 sm:mt-4">
          <span className="text-slate-300 select-none">$</span>
          <span className="text-white">
            node developer.js<span className="animate-pulse">_</span>
          </span>
        </div>
      </div>
    </div>
  );
}

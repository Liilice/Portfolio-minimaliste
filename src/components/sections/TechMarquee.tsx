import APISvg from "../../assets/tech/api.svg";
import ComputerSvg from "../../assets/tech/computer.svg";
import DatabaseSvg from "../../assets/tech/database.svg";
import ToolsSvg from "../../assets/tech/tools.svg";
import MobileSvg from "../../assets/tech/mobile.svg";

const TECHNOLOGIES = {
  frontend: {
    img: ComputerSvg,
    alt: "Frontend",
    items: ["React", "Angular", "Tailwind"],
    color: "#3B82F6",
  },
  mobile: {
    img: MobileSvg,
    alt: "Mobile",
    items: ["React Native"],
    color: "#10B981",
  },
  backend: {
    img: APISvg,
    alt: "Backend",
    items: ["NestJS", "Express", "Django", "Spring Boot", "PHP"],
    color: "#8B5CF6",
  },
  database: {
    img: DatabaseSvg,
    alt: "Base de données",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
    color: "#F59E0B",
  },
  realtime: {
    img: ToolsSvg,
    alt: "Outils",
    items: ["Socket.io"],
    color: "#64748B",
  },
};

export default function TechMarquee() {
  return (
    <section
      className="px-6 py-10 md:px-20 lg:px-10 xl:px-32 sm:py-20 border-y border-slate-200  bg-slate-50"
      id="tech"
    >
      {/* <h2 className=" ext-4xl font-bold mb-6 uppercase tracking-[0.3em] text-slate-400">
        Core Technologies
      </h2> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 overflow-x-auto py-4">
        {Object.entries(TECHNOLOGIES).map(
          ([key, { img, alt, items, color }]) => (
            <div
              key={key}
              className={`rounded-lg p-3 flex flex-col items-center sm:items-start gap-4 border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${color}`}
              style={{ borderBottomColor: color }}
            >
              <div className="flex items-center">
                <img src={img} alt={alt} className="w-6 h-6 mr-2" />
                <h3 className="text-lg font-bold">{alt}</h3>
              </div>
              <ul className="text-md text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full inline-block`}
                      style={{ backgroundColor: color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
}

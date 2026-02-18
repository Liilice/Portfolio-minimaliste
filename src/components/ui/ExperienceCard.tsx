export type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  tags: string[];
};

export default function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="p-4 sm:p-8 bg-white border border-slate-200 rounded-lg hover:border-primary/50 transition-colors hover:shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-primary font-medium">{item.company}</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-slate-100  rounded-2xl">
          {item.date}
        </span>
      </div>

      <p className="text-slate-600  text-sm leading-relaxed mb-6 whitespace-pre-line">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-slate-200  px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

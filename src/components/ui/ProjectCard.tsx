import { useState } from "react";
import GithubSvg from "../../assets/social/github.svg";

export type Project = {
  category: string;
  title: string;
  description: string;
  stack: string[];
  images: { url: string; alt: string }[];
  onlineLink?: string;
  githubLink?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const lengthImages = project.images.length;
  return (
    <div className="break-inside-avoid mb-14 group relative lg:h-[600px] flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
        <ul>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="inline-block bg-slate-200 text-xs px-2.5 py-1 rounded-full mr-2 mb-2 "
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="w-full h-[350px] py-5 sm:p-5 flex flex-col items-center justify-center border-[1px] border-slate-300 rounded-lg cursor-pointer transition-transform duration-300 hover:shadow-lg mb-4">
          <img
            src={project.images[currentImageIndex].url}
            alt={project.images[currentImageIndex].alt}
            className="w-full h-full object-contain"
          />
          <ul className="flex justify-center items-center gap-2 mt-4">
            {[...Array(lengthImages)].map((_, index: number) => (
              <li
                className={`w-3 h-3 rounded-full bg-slate-300 ${
                  currentImageIndex === index ? "bg-slate-800" : ""
                } cursor-pointer`}
                key={index}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </ul>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        {project.githubLink && (
          <img
            src={GithubSvg}
            alt="Github"
            className="w-6 h-6 inline-block mr-2 items-start cursor-pointer hover:scale-[1.05]"
          />
        )}
        {project.onlineLink && (
          <a
            href={project.onlineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto italic text-slate-500 cursor-pointer hover:scale-[1.01] underline"
          >
            {project.onlineLink}
          </a>
        )}
      </div>
    </div>
  );
}

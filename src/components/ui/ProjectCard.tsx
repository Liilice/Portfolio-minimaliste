import { useState } from "react";
import Modal from "react-modal";
import GithubSvg from "../../assets/social/github.svg";

export type Project = {
  category: string;
  title: string;
  description: string;
  more?: { title: String; content: string }[];
  stack: string[];
  images: { url: string; alt: string }[];
  onlineLink?: string;
  githubLink?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const lengthImages = project.images.length;

  return (
    <div className="break-inside-avoid group relative flex flex-col justify-between border-[1px] border-slate-300 rounded-lg cursor-pointer transition-transform duration-300 hover:shadow-lg">
      <div className="w-full h-[310px] relative">
        <span className="font-bold text-black-500 uppercase px-4 py-1 bg-gray-300 rounded-full absolute top-4 left-4 text-sm z-10">
          {project.category}
        </span>
        <img
          src={project.images[currentImageIndex].url}
          alt={project.images[currentImageIndex].alt}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative">
        <button
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === 0 ? lengthImages - 1 : currentImageIndex - 1
            )
          }
          className="absolute left-2 bottom-2 bg-white/70 hover:bg-white rounded-full shadow transition opacity-0 group-hover:opacity-100"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <ul className="flex justify-center items-center gap-2 my-4">
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
        <button
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === lengthImages - 1 ? 0 : currentImageIndex + 1
            )
          }
          className="absolute right-2 bottom-2 bg-white/70 hover:bg-white  rounded-full shadow transition opacity-0 group-hover:opacity-100"
        >
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <div className="border-t border-slate-300 p-4">
        <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
        <p className="mb-4">{project.description}</p>
        <ul>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="inline-block bg-slate-200 text-xs px-2.5 py-1 mr-2 mb-2 font-bold"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p
          className="mt-4 bg-primary rounded hover:bg-primary/90 transition-all relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center w-fit font-bold"
          onClick={() => setIsOpen(true)}
        >
          DÉTAILS DE RÉFLEXION{" "}
          <span className="material-icons text-sm">arrow_forward</span>
        </p>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className="w-[90%] max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-xl outline-none"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 text-gray-500 hover:text-black z-20"
            aria-label="Fermer la modale"
          >
            ✕
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT */}
            <div className="hidden md:block md:w-1/2 w-full">
              <div className="relative bg-slate-50 rounded-lg p-4">
                <img
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].alt}
                  className="w-full h-[50vh] object-contain rounded-lg"
                />

                {lengthImages > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0
                            ? lengthImages - 1
                            : currentImageIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 transition"
                      aria-label="Image précédente"
                    >
                      <span className="material-icons">chevron_left</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === lengthImages - 1
                            ? 0
                            : currentImageIndex + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow p-2 transition"
                      aria-label="Image suivante"
                    >
                      <span className="material-icons">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              {lengthImages > 1 && (
                <ul className="flex justify-center items-center gap-2 mt-4">
                  {[...Array(lengthImages)].map((_, index: number) => (
                    <li
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition ${
                        currentImageIndex === index
                          ? "bg-slate-800"
                          : "bg-slate-300"
                      }`}
                    />
                  ))}
                </ul>
              )}
            </div>

            {/* RIGHT */}
            <div className="md:w-1/2 w-full space-y-4">
              <h3 className="text-2xl font-bold pr-8">{project.title}</h3>

              {project.more?.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold uppercase text-sm text-gray-500 mb-1">
                    {item.title}
                  </h4>
                  <p>{item.content}</p>
                </div>
              ))}

              <div>
                <h4 className="font-semibold uppercase text-sm text-gray-500 mb-2">
                  Stack technique
                </h4>
                <ul>
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="inline-block bg-slate-200 text-xs px-2.5 py-1 mr-2 mb-2 font-bold rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-sm hover:underline"
                  >
                    <img src={GithubSvg} alt="GitHub" className="w-5 h-5" />
                    Voir le code sur GitHub
                  </a>
                )}

                {project.onlineLink && (
                  <a
                    href={project.onlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm hover:underline"
                  >
                    Voir le projet en ligne
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

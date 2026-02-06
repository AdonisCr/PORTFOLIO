import { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ExternalLink, Github, Globe, Smartphone, Code } from "lucide-react";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const listRef = useRef<HTMLDivElement | null>(null);
  const [showGradient, setShowGradient] = useState(false);

  const categories = [
    { id: "all", name: "Tous", icon: Code },
    { id: "web", name: "Web Apps", icon: Globe },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "website", name: "Sites Web", icon: Code },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme de commerce électronique complète avec gestion des stocks, paiements Stripe et analytics.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Application de gestion de tâches collaborative avec notifications en temps réel et intégration Slack.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker Pro",
      description:
        "Application mobile de fitness avec GPS, suivi des activités et coaching personnalisé.",
      image:
        "https://images.pexels.com/photos/4148816/pexels-photo-4148816.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Redux", "Maps API"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Le Gourmet",
      description:
        "Site web moderne pour restaurant avec menu interactif et système de réservation.",
      image:
        "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Food Delivery App",
      description:
        "Application de livraison de repas avec géolocalisation et paiements intégrés.",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Photographe",
      description:
        "Site portfolio créatif avec galerie photo et boutique en ligne.",
      image:
        "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Gatsby", "GraphQL", "Shopify"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#",
    },
    // {
    //   title: "Portfolio Photographe",
    //   description:
    //     "Site portfolio créatif avec galerie photo et boutique en ligne.",
    //   image:
    //     "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["Gatsby", "GraphQL", "Shopify"],
    //   category: "website",
    //   demoUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);
  const shouldScroll = filteredProjects.length > 6;

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const check = () => {
      setShowGradient(
        el.scrollHeight > el.clientHeight &&
          el.scrollTop + el.clientHeight < el.scrollHeight - 10,
      );
    };

    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [filteredProjects]);

  return (
    <section
      id="projects"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Éléments décoratifs en arrière-plan - INVERSÉS par rapport à Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-center mb-4 ${
              isDarkMode ? "text-slate-300" : "text-gray-600"
            }`}
          >
            Mes Projets
          </h2>
          <div
            className={`w-24 sm:w-28 h-1 mx-auto rounded-full mb-6 sm:mb-8 ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            }`}
          ></div>

          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Découvrez mes réalisations récentes qui démontrent mes compétences
            techniques et ma créativité
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? isDarkMode
                      ? "bg-purple-800 text-white shadow-lg"
                      : "bg-purple-600 text-white shadow-lg"
                    : isDarkMode
                      ? "bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-purple-400 border border-slate-700"
                      : "bg-white text-gray-700 hover:bg-gray-50 hover:text-purple-600 border border-gray-200"
                }`}
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Custom Scrollbar */}
        <div className="relative">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: ${isDarkMode ? "rgba(30, 41, 59, 0.3)" : "rgba(226, 232, 240, 0.5)"};
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: ${
                isDarkMode
                  ? "linear-gradient(180deg, rgb(168, 85, 247) 0%, rgb(236, 72, 153) 100%)"
                  : "linear-gradient(180deg, rgb(147, 51, 234) 0%, rgb(219, 39, 119) 100%)"
              };
              border-radius: 10px;
              border: 2px solid ${isDarkMode ? "rgba(30, 41, 59, 0.3)" : "rgba(226, 232, 240, 0.5)"};
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: ${
                isDarkMode
                  ? "linear-gradient(180deg, rgb(192, 132, 252) 0%, rgb(244, 114, 182) 100%)"
                  : "linear-gradient(180deg, rgb(126, 34, 206) 0%, rgb(190, 24, 93) 100%)"
              };
            }
            /* Firefox */
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: ${
                isDarkMode
                  ? "rgb(168, 85, 247) rgba(30, 41, 59, 0.3)"
                  : "rgb(147, 51, 234) rgba(226, 232, 240, 0.5)"
              };
            }
          `}</style>

          <div
            ref={listRef}
            role="region"
            aria-label="Liste des projets"
            tabIndex={0}
            className={`custom-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${
              shouldScroll
                ? "max-h-[450px] sm:max-h-[520px] overflow-y-auto pr-2 sm:pr-4"
                : ""
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 group ${
                  isDarkMode
                    ? "bg-slate-800/50 border-slate-700 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/10"
                    : "bg-white/50 border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-600/10"
                }`}
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3
                    className={`text-lg sm:text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-0.5 sm:py-1 rounded text-xs ${
                          isDarkMode
                            ? "bg-blue-500/20 text-blue-300"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <a
                      href={
                        project.demoUrl !== "#" ? project.demoUrl : undefined
                      }
                      className={`flex items-center space-x-1.5 sm:space-x-2 transition-colors ${
                        isDarkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-500"
                      }`}
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className={`flex items-center space-x-1.5 sm:space-x-2 transition-colors ${
                        isDarkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-600 hover:text-gray-500"
                      }`}
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* overlay dégradé */}
          {shouldScroll && showGradient && (
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 right-0 bottom-0 h-12 sm:h-16 ${
                isDarkMode
                  ? "bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"
                  : "bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent"
              }`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

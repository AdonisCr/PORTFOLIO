import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Globe, Smartphone, Code } from "lucide-react";
import { motion, useInView } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import { cardVariants, staggerContainer } from "../lib/animations";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const listRef = useRef<HTMLDivElement>(null);
  const [showGradient, setShowGradient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { id: "all", name: "Tous", icon: Code },
    { id: "web", name: "Web Apps", icon: Globe },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "website", name: "Sites Web", icon: Code },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme de commerce électronique complète avec gestion des stocks, paiements Stripe et analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec notifications en temps réel et intégration Slack.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker Pro",
      description: "Application mobile de fitness avec GPS, suivi des activités et coaching personnalisé.",
      image: "https://images.pexels.com/photos/4148816/pexels-photo-4148816.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Redux", "Maps API"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Le Gourmet",
      description: "Site web moderne pour restaurant avec menu interactif et système de réservation.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Food Delivery App",
      description: "Application de livraison de repas avec géolocalisation et paiements intégrés.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Photographe",
      description: "Site portfolio créatif avec galerie photo et boutique en ligne.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Gatsby", "GraphQL", "Shopify"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);
  const shouldScroll = filteredProjects.length > 6;

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const check = () => {
      setShowGradient(el.scrollHeight > el.clientHeight && el.scrollTop + el.clientHeight < el.scrollHeight - 10);
    };

    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);

    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [filteredProjects]);

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base" aria-labelledby="projects-heading">
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            isInView={isInView}
            title="Mes"
            highlight="Projets"
            headingId="projects-heading"
            subtitle="Découvrez mes réalisations récentes qui démontrent mes compétences techniques et ma créativité"
          />

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  custom={i}
                  variants={filterVariants}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${
                    activeCategory === category.id
                      ? "bg-accent text-text-1 shadow-lg scale-105"
                      : "bg-surface/50 text-text-2 hover:bg-surface hover:text-accent border border-border"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <div className="relative">
            <style>{`
              .custom-scrollbar::-webkit-scrollbar { width: 8px; }
              .custom-scrollbar::-webkit-scrollbar-track { background: rgba(30, 41, 59, 0.3); border-radius: 10px; }
              .custom-scrollbar::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #3b82f6 0%, #60a5fa 100%); border-radius: 10px; border: 2px solid rgba(30, 41, 59, 0.3); }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #60a5fa 0%, #93bbfc 100%); }
              .custom-scrollbar { scrollbar-width: thin; scrollbar-color: #3b82f6 rgba(30, 41, 59, 0.3); }
            `}</style>

            <motion.div
              ref={listRef}
              role="region"
              aria-label="Liste des projets"
              tabIndex={0}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className={`custom-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${shouldScroll ? "max-h-[450px] sm:max-h-[520px] overflow-y-auto pr-2 sm:pr-4" : ""}`}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  className="backdrop-blur-sm rounded-2xl overflow-hidden border bg-surface/50 border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:scale-[1.03] group"
                  whileHover={{ y: -4 }}
                >
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} loading="lazy" width={800} height={450} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-text-1">{project.title}</h3>
                    <p className="mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 text-text-2">{project.description}</p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 rounded text-xs bg-accent/20 text-accent">{tech}</span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                      {project.demoUrl !== "#" && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 sm:space-x-2 transition-colors text-accent hover:text-accent-lt">
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Demo</span>
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 sm:space-x-2 transition-colors text-text-3 hover:text-text-2">
                          <Github size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {shouldScroll && showGradient && (
              <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-base via-base/80 to-transparent" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

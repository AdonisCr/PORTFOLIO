import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Code,
  Layers,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import SEO from "./SEO";
import { cardVariants, staggerContainer } from "../lib/animations";
import { projectsData, ProjectCategory } from "../lib/projectsData";

const categories: { id: ProjectCategory; name: string; icon: React.ElementType }[] = [
  { id: "all", name: "Tous les projets", icon: Layers },
  { id: "production", name: "En Production & Clients", icon: Globe },
  { id: "saas", name: "Applications SaaS & Outils", icon: Code },
  { id: "mobile", name: "Mobile & FinTech", icon: Smartphone },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen pt-28 pb-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base"
      aria-labelledby="projects-heading"
    >
      <SEO
        title="Projets & Études de cas"
        description="Découvrez les projets web, SaaS, PWA et mobiles réalisés par Adonis OUSSOU : SafeHer, Alliance Actions Afrique, Joie Enseignante, TimePro, TransPay et Link-o."
        path="/projets"
      />
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto relative z-10" ref={sectionRef}>
        <SectionHeader
          isInView={isInView}
          title="Mes"
          highlight="Projets"
          headingId="projects-heading"
          subtitle="Cliquez sur une carte pour ouvrir l'étude de cas complète : besoin initial, architecture, captures réelles et détail de mes contributions."
        />

        {/* Filtres de catégories */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-accent-solid text-white border-accent shadow-lg shadow-accent/20"
                    : "bg-surface/40 text-text-2 border-border/60 hover:border-accent/40 hover:text-text-1"
                }`}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grille contractée de cartes cliquables */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border/60 bg-surface/35 hover:bg-surface/55 hover:border-accent/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Aperçu visuel compact (Capture réelle ou Schéma d'architecture) */}
                <Link
                  to={`/projets/${project.slug}`}
                  className="block relative h-48 sm:h-52 overflow-hidden bg-base border-b border-border/50"
                >
                  {project.desktopImage ? (
                    <>
                      <img
                        src={project.desktopImage}
                        alt={`Aperçu de ${project.title}`}
                        loading="lazy"
                        width={720}
                        height={450}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    </>
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-surface via-base to-elevated/60">
                      <span className="text-xs font-mono text-accent">
                        {project.contextType}
                      </span>

                      <div className="my-auto">
                        <p className="text-lg font-bold text-text-1 leading-snug">
                          {project.title}
                        </p>
                        <p className="text-xs text-text-2 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Titre discret du contexte en haut à gauche sur les images */}
                  {project.desktopImage && (
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-surface/90 text-text-1 border border-border/60 backdrop-blur-sm">
                        {project.contextType}
                      </span>
                    </div>
                  )}
                </Link>

                {/* Corps de la carte */}
                <div className="p-5 sm:p-6">
                  <Link to={`/projets/${project.slug}`} className="block">
                    <h3 className="text-xl font-bold text-text-1 group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-text-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tags technos principaux */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-elevated/70 text-text-2 border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pied de carte : Bouton "Voir l'étude de cas" + Liens rapides */}
              <div className="px-5 sm:px-6 py-4 border-t border-border/40 bg-base/30 flex items-center justify-between gap-3">
                <Link
                  to={`/projets/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent group-hover:text-accent-light transition-colors"
                >
                  <span>Voir les détails</span>
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-3 hover:text-accent transition-colors"
                      title="Ouvrir le site en ligne"
                      aria-label={`Ouvrir ${project.title} en ligne`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-3 hover:text-text-1 transition-colors"
                      title="Voir le code sur GitHub"
                      aria-label={`Code source GitHub de ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Appel à l'action bas de page vers Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/35 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Collaboration &amp; Missions
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
              Vous avez un projet web ou mobile à concrétiser ?
            </h3>
            <p className="text-xs sm:text-sm text-text-3 mt-1">
              Discutons de votre besoin, de l'architecture technique et de la mise en production.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-solid text-white text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            <span>Me contacter</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

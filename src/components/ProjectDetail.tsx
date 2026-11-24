import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Globe,
  ShieldAlert,
  Terminal,
  Lock,
  CheckCircle2,
  Maximize2,
  X,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SEO from "./SEO";
import { projectsData } from "../lib/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <section className="min-h-screen pt-28 pb-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base">
      <SEO
        title={`${project.title} — Étude de cas`}
        description={project.shortDescription}
        path={`/projets/${project.slug}`}
      />
      <BackgroundBlobs />

      <div className="max-w-6xl mx-auto relative z-10">
          {/* Retour & Catégorie sobre */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-surface/50 text-text-2 hover:text-text-1 hover:border-accent/50 text-xs sm:text-sm font-semibold transition-all"
          >
            <ArrowLeft size={16} />
            <span>Retour à tous les projets</span>
          </Link>

          <span className="text-xs font-mono uppercase tracking-wider text-accent">
            {project.contextType}
          </span>
        </motion.div>

        {/* En-tête de l'étude de cas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="rounded-3xl border border-border/70 bg-surface/40 p-6 sm:p-10 mb-10"
        >
          <p className="text-xs sm:text-sm font-mono text-text-3 mb-2">
            {project.statusLabel}
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-text-1 leading-tight mb-3">
            {project.title}
          </h1>
          <p className="text-base sm:text-xl text-text-2 font-medium max-w-3xl mb-6">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-elevated/80 text-text-2 border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-solid text-white text-xs sm:text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20"
                >
                  <ExternalLink size={16} />
                  <span>Ouvrir l'application en ligne</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-base/70 text-text-2 hover:text-text-1 hover:border-accent/50 text-xs sm:text-sm font-semibold transition-all"
                >
                  <Github size={16} />
                  <span>Code source (GitHub)</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Galerie / Visuel principal fidèle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mb-12"
        >
          {project.visualType === "dual-safeher" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Vue Desktop */}
              <div className="lg:col-span-8 rounded-2xl border border-border/80 bg-base overflow-hidden shadow-2xl flex flex-col">
                <div className="px-4 py-3 bg-elevated/80 border-b border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                  </div>
                  <span className="text-xs font-mono text-text-3 truncate">
                    safeher.newworldong.org/admin — Centre de supervision
                  </span>
                  <ShieldAlert size={14} className="text-accent" />
                </div>
                <div
                  className="relative group cursor-pointer overflow-hidden flex-1"
                  onClick={() =>
                    project.desktopImage &&
                    setLightboxImage({
                      src: project.desktopImage,
                      alt: `Tableau de bord ${project.title}`,
                    })
                  }
                >
                  <img
                    src={project.desktopImage}
                    alt={`Capture réelle du tableau de bord ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-base/85 border border-border text-xs text-text-1 flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                    <Maximize2 size={13} className="text-accent" />
                    <span>Agrandir</span>
                  </div>
                </div>
              </div>

              {/* Vue Mobile SOS */}
              <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-surface/35 p-5 flex flex-col justify-between">
                <div
                  className="relative group cursor-pointer max-w-[230px] mx-auto rounded-2xl border border-border/80 overflow-hidden shadow-xl bg-base"
                  onClick={() =>
                    project.mobileImage &&
                    setLightboxImage({
                      src: project.mobileImage,
                      alt: `Interface mobile SOS ${project.title}`,
                    })
                  }
                >
                  <img
                    src={project.mobileImage}
                    alt="Capture mobile réelle du bouton SOS SafeHer"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 p-2 rounded-lg bg-base/85 border border-border text-text-1">
                    <Maximize2 size={13} className="text-accent" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent">
                    Interface Mobile PWA — /alerte
                  </span>
                  <h3 className="text-sm font-bold text-text-1 mt-0.5">
                    Déclenchement SOS &amp; Fallback SMS
                  </h3>
                  <p className="text-xs text-text-3 mt-1 leading-relaxed">
                    Maintien de 2 secondes sur le bouton d'alerte pour transmettre la position GPS ou basculer sur le canal SMS hors-ligne.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "desktop-browser" && project.desktopImage && (
            <div className="rounded-2xl border border-border/80 bg-base overflow-hidden shadow-2xl">
              <div className="px-4 py-3 bg-elevated/80 border-b border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-text-3/40" />
                </div>
                <span className="text-xs font-mono text-text-3 truncate">
                  https://{project.browserUrl}
                </span>
                <Globe size={14} className="text-accent" />
              </div>
              <div
                className="relative group cursor-pointer overflow-hidden"
                onClick={() =>
                  setLightboxImage({
                    src: project.desktopImage!,
                    alt: `Capture d'écran réelle ${project.title}`,
                  })
                }
              >
                <img
                  src={project.desktopImage}
                  alt={`Capture d'écran réelle du projet ${project.title}`}
                  className="w-full max-h-[540px] object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-base/85 border border-border text-xs font-medium text-text-1 flex items-center gap-2 shadow-lg">
                  <Maximize2 size={14} className="text-accent" />
                  <span>Cliquer pour agrandir la capture réelle</span>
                </div>
              </div>
            </div>
          )}

          {project.visualType === "architecture-preview" &&
            project.architectureNotes && (
              <div className="rounded-2xl border border-border/80 bg-surface/35 p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-2.5">
                    <Terminal size={20} className="text-accent" />
                    <span className="text-sm font-mono font-bold text-text-1">
                      {project.architectureNotes.label}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.architectureNotes.components.map((comp) => (
                    <div
                      key={comp.name}
                      className="p-5 rounded-xl border border-border/60 bg-base/60 space-y-2"
                    >
                      <p className="text-sm font-bold text-text-1">{comp.name}</p>
                      <p className="text-xs font-mono text-accent">{comp.stack}</p>
                      <p className="text-xs sm:text-sm text-text-3 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-base/50 border border-border/50 flex items-center gap-3 text-xs sm:text-sm text-text-2">
                  <Lock size={16} className="text-accent flex-shrink-0" />
                  <span>
                    Architecture technique vérifiée — Cet emplacement accueillera les captures d'écran de l'interface dès leur export.
                  </span>
                </div>
              </div>
            )}
        </motion.div>

        {/* Contenu détaillé de l'étude de cas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Colonne gauche : Problématique, Solution & Contributions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-border/60 bg-surface/35">
                <p className="text-xs font-mono uppercase tracking-wider text-text-3 mb-2">
                  01. Besoin &amp; Problématique
                </p>
                <p className="text-sm text-text-2 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/60 bg-surface/35">
                <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                  02. Objectif de la solution
                </p>
                <p className="text-sm text-text-2 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Contributions détaillées d'Adonis */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/35 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent">
                  03. Rôle &amp; Interventions
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
                  Ma contribution personnelle sur ce projet
                </h2>
              </div>

              <div className="space-y-3">
                {project.contributions.map((contrib, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-border/50 bg-base/50 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4"
                  >
                    <span className="text-xs font-bold text-accent whitespace-nowrap min-w-[175px]">
                      {contrib.area}
                    </span>
                    <span className="text-xs sm:text-sm text-text-2 leading-relaxed">
                      {contrib.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : Fonctionnalités principales & Résumé technique */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/35 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent">
                  04. Livrables fonctionnels
                </span>
                <h2 className="text-xl font-bold text-text-1 mt-1">
                  Fonctionnalités principales
                </h2>
              </div>

              <ul className="space-y-3">
                {project.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-base/50 border border-border/40 text-xs sm:text-sm text-text-2"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Encadré Contact rapide autour de ce projet */}
            <div className="p-6 rounded-2xl border border-accent/30 bg-accent/5 space-y-4">
              <h3 className="text-base font-bold text-text-1">
                Un besoin similaire à {project.title} ?
              </h3>
              <p className="text-xs sm:text-sm text-text-2 leading-relaxed">
                Je peux vous accompagner sur la conception, le développement frontend/backend ou la mise en production de votre plateforme.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-solid text-white text-xs sm:text-sm font-semibold hover:bg-accent-solid-hover transition-all"
              >
                <span>Discuter de votre projet</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Projet Précédent / Projet Suivant */}
        <div className="mt-14 pt-8 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              to={`/projets/${prevProject.slug}`}
              className="group p-5 rounded-2xl border border-border/60 bg-surface/30 hover:border-accent/50 transition-all flex items-center gap-4"
            >
              <ArrowLeft
                size={20}
                className="text-text-3 group-hover:text-accent group-hover:-translate-x-1 transition-all flex-shrink-0"
              />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-3">
                  Étude de cas précédente
                </span>
                <p className="text-base font-bold text-text-1 group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projets/${nextProject.slug}`}
              className="group p-5 rounded-2xl border border-border/60 bg-surface/30 hover:border-accent/50 transition-all flex items-center justify-end gap-4 text-right"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-3">
                  Étude de cas suivante
                </span>
                <p className="text-base font-bold text-text-1 group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight
                size={20}
                className="text-text-3 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Lightbox plein écran pour inspecter la capture réelle */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-base/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-surface border border-border text-text-1 hover:text-accent cursor-pointer"
              aria-label="Fermer l'aperçu"
            >
              <X size={22} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[90vh] rounded-2xl border border-border shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetail;

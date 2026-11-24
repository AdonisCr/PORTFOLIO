import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";
import SEO from "./SEO";

type ExperienceCategory = "all" | "experience" | "hackathon" | "formation";

interface ExperienceEntry {
  id: string;
  category: Exclude<ExperienceCategory, "all">;
  typeLabel: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  icon: React.ElementType;
}

const entries: ExperienceEntry[] = [
  {
    id: "raynis-2025",
    category: "experience",
    typeLabel: "Stage académique",
    period: "Octobre 2025 – Décembre 2025",
    role: "Développeur Full Stack Web",
    organization: "RAYNIS",
    location: "Cotonou, Bénin",
    summary:
      "Développement frontend et backend au sein d'une équipe Agile sur des projets web en production et des applications métiers.",
    responsibilities: [
      "Réalisation d'interfaces utilisateurs modernes et responsives avec Vue.js et Tailwind CSS.",
      "Développement de fonctionnalités backend et d'APIs avec PHP / Laravel et intégration de bases de données MySQL.",
      "Collaboration quotidienne en méthodologie Agile avec gestion de versions sous Git et GitHub.",
    ],
    achievements: [
      "Refonte complète et mise en ligne du site courir54.fr dans le respect des spécifications techniques et des délais.",
    ],
    technologies: ["Vue.js", "Tailwind CSS", "PHP", "Laravel", "MySQL", "Git/GitHub", "Agile"],
    icon: Briefcase,
  },
  {
    id: "nerdx-2025",
    category: "experience",
    typeLabel: "Stage académique",
    period: "Janvier 2025 – Mai 2025",
    role: "Développeur Full Stack JavaScript",
    organization: "NerdX Digital",
    location: "Abomey-Calavi, Bénin",
    summary:
      "Conception et développement d'applications web full stack en équipe et en autonomie sur la stack MERN.",
    responsibilities: [
      "Développement d'interfaces utilisateurs dynamiques avec React.js et Tailwind CSS.",
      "Conception de services backend RESTful avec Node.js et Express.js.",
      "Modélisation et intégration de bases de données NoSQL avec MongoDB.",
    ],
    achievements: [
      "Mise en ligne de projets web fonctionnels et respect des livrables techniques en cycle Agile.",
    ],
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Git/GitHub", "Agile"],
    icon: Briefcase,
  },
  {
    id: "blochallenge-2025",
    category: "hackathon",
    typeLabel: "Hackathon & Innovation",
    period: "Avril 2025",
    role: "Développeur Web — Projet « Ako Towe »",
    organization: "BloChallenge 2025 (BLOLAB / UNIPOD)",
    location: "Abomey-Calavi, Bénin",
    summary:
      "Hackathon intensif autour du thème « Numérique et patrimoine : Innover pour valoriser la culture » après immersion à l'exposition Patrimoine 2.0.",
    responsibilities: [
      "Conception et développement frontend d'une plateforme numérique dédiée à la valorisation du patrimoine culturel béninois (« Ako Towe »).",
      "Travail en équipe pluridisciplinaire dans un cadre de prototypage rapide.",
    ],
    achievements: [
      "Livraison d'un prototype web interactif (React / Tailwind) et présentation finale devant le jury.",
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "UI/UX", "Prototypage rapide"],
    icon: Award,
  },
  {
    id: "ecole229-dev",
    category: "formation",
    typeLabel: "Formation intensive",
    period: "Mars 2024 – Novembre 2025",
    role: "Développement Web & Mobile (Parcours Classique)",
    organization: "École 229",
    location: "Cotonou, Bénin",
    summary:
      "Formation professionnelle par la pratique axée sur l'ingénierie logicielle, les architectures web modernes et le développement mobile multiplateforme.",
    responsibilities: [
      "Développement d'applications frontend et full stack avec React.js, Vue.js, Node.js/Express et PHP/Laravel.",
      "Développement d'applications mobiles cross-platform avec Flutter et Dart.",
      "Conception de bases de données relationnelles (MySQL, PostgreSQL) et NoSQL (MongoDB, Firebase) et déploiement (Docker, Linux, Vercel).",
    ],
    achievements: [
      "Réalisation de multiples projets individuels et collectifs couvrant tout le cycle de vie logiciel.",
    ],
    technologies: ["React.js", "Vue.js", "Laravel", "Node.js", "Flutter", "MySQL", "MongoDB", "Docker"],
    icon: GraduationCap,
  },
  {
    id: "blochallenge-2024",
    category: "hackathon",
    typeLabel: "Hackathon & Innovation",
    period: "25 Mars – 30 Mars 2024",
    role: "Développeur Web — Projet « Wa Minipke »",
    organization: "BloChallenge 2024 (BLOLAB)",
    location: "Cotonou, Bénin",
    summary:
      "Hackathon dédié au développement de solutions numériques innovantes pour l'aménagement durable de nos villes.",
    responsibilities: [
      "Idéation, maquettage et développement en équipe d'un prototype fonctionnel répondant à une problématique urbaine locale.",
    ],
    achievements: [
      "Présentation de la solution « Wa Minipke » devant le jury de sélection.",
    ],
    technologies: ["Développement Web", "Prototypage", "Travail d'équipe", "Pitch"],
    icon: Award,
  },
  {
    id: "qct-group-2024",
    category: "experience",
    typeLabel: "Stage académique",
    period: "Janvier 2024 – Mars 2024",
    role: "Développeur Web No-Code & UI/UX Designer",
    organization: "QCT-Group",
    location: "Cotonou, Bénin",
    summary:
      "Initiation professionnelle à la conception d'interfaces utilisateurs, à l'identité visuelle et à l'intégration de plateformes web.",
    responsibilities: [
      "Conception des maquettes haute fidélité de l'application mobile « Sendivo » sur Figma.",
      "Élaboration d'une charte graphique complète adaptée aux objectifs du produit.",
      "Intégration et configuration d'une marketplace web sous WordPress en équipe.",
    ],
    achievements: [
      "Livraison du kit UI mobile Sendivo et mise en place de la plateforme e-commerce WordPress.",
    ],
    technologies: ["Figma", "UI/UX Design", "WordPress", "Charte graphique"],
    icon: Briefcase,
  },
  {
    id: "ecole229-fondamentaux",
    category: "formation",
    typeLabel: "Formation initiale",
    period: "Août 2023 – Janvier 2024",
    role: "Compétences Numériques Fondamentales",
    organization: "École 229",
    location: "Cotonou, Bénin",
    summary:
      "Socle fondamental en algorithmique, logique de programmation et bases du développement web.",
    responsibilities: [
      "Apprentissage de l'algorithmique, de la programmation structurée (langage C) et des standards HTML5 / CSS3 / JavaScript.",
    ],
    achievements: [
      "Validation du tronc commun et admission au parcours spécialisé Développement Web & Mobile.",
    ],
    technologies: ["Algorithmique", "Langage C", "HTML5", "CSS3", "JavaScript", "Git"],
    icon: GraduationCap,
  },
];

const filters: { id: ExperienceCategory; label: string }[] = [
  { id: "all", label: "Tout le parcours" },
  { id: "experience", label: "Expériences en entreprise" },
  { id: "hackathon", label: "Hackathons" },
  { id: "formation", label: "Formations" },
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>("all");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filteredEntries =
    activeFilter === "all"
      ? entries
      : entries.filter((e) => e.category === activeFilter);

  return (
    <section
      id="experience"
      className="min-h-screen pt-28 pb-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base"
      ref={sectionRef}
      aria-labelledby="experience-heading"
    >
      <SEO
        title="Parcours & Expériences"
        description="Chronologie professionnelle d'Adonis OUSSOU : stages chez RAYNIS, NerdX Digital, QCT-Group, hackathons BLOLAB et formation École 229."
        path="/experiences"
      />
      <BackgroundBlobs />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          isInView={isInView}
          title="Parcours &"
          highlight="Expériences"
          headingId="experience-heading"
          subtitle="Une progression constante à travers des stages en entreprise, des formations intensives et des compétitions d'innovation technologique."
        />

        {/* Filtres sobres */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-accent-solid text-white border-accent shadow-lg shadow-accent/20"
                    : "bg-surface/40 text-text-2 border-border/60 hover:border-accent/40 hover:text-text-1"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Chronologie éditoriale verticale */}
        <div className="relative">
          {/* Ligne directrice verticale */}
          <div
            className="hidden md:block absolute left-[240px] lg:left-[280px] top-2 bottom-2 w-px bg-border/70"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {filteredEntries.map((entry, idx) => {
              const EntryIcon = entry.icon;
              return (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-4 md:gap-10 items-start group"
                >
                  {/* Colonne Gauche : Repères temporels & Organisation */}
                  <div className="md:text-right md:pr-4 pt-1 flex md:flex-col items-start md:items-end justify-between gap-2">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent">
                        <Calendar size={13} />
                        {entry.period}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-text-1 mt-1">
                        {entry.organization}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs text-text-3 mt-0.5">
                        <MapPin size={12} />
                        {entry.location}
                      </span>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-surface/80 text-text-2 border border-border/70">
                      {entry.typeLabel}
                    </span>
                  </div>

                  {/* Point de repère sur la ligne verticale (Desktop) */}
                  <div
                    className="hidden md:flex absolute left-[240px] lg:left-[280px] top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-base border-2 border-border group-hover:border-accent text-text-3 group-hover:text-accent items-center justify-center transition-colors duration-300 z-10"
                    aria-hidden="true"
                  >
                    <EntryIcon size={14} />
                  </div>

                  {/* Colonne Droite : Fiche éditoriale détaillée */}
                  <div className="rounded-2xl p-6 sm:p-7 border border-border/60 bg-surface/35 group-hover:bg-surface/50 group-hover:border-accent/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-border/40">
                      <h4 className="text-lg sm:text-xl font-bold text-text-1">
                        {entry.role}
                      </h4>
                    </div>

                    <p className="text-sm text-text-2 leading-relaxed mb-5">
                      {entry.summary}
                    </p>

                    {/* Responsabilités */}
                    <div className="space-y-2 mb-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-3">
                        Responsabilités principales
                      </p>
                      <ul className="space-y-2">
                        {entry.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Réalisations clés */}
                    {entry.achievements.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-base/50 border border-border/50 mb-5">
                        {entry.achievements.map((ach, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-1 font-medium"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-accent flex-shrink-0 mt-0.5"
                            />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies associées */}
                    <div className="flex flex-wrap gap-2">
                      {entry.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-elevated/70 text-text-2 border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Synthèse chiffrée sobre */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-border/50 bg-surface/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 3, suffix: "", label: "Stages en entreprise" },
              { value: 2, suffix: "", label: "Hackathons BLOLAB" },
              { value: 10, suffix: "+", label: "Projets web & mobiles livrés" },
              { value: 3, suffix: " ans", label: "D'immersion technique" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-text-1 mb-1">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    animate={isInView}
                  />
                </div>
                <div className="text-xs sm:text-sm text-text-3 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lien vers la page suivante : Projets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/35 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Étape suivante
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
              Explorer mes projets et études de cas détaillées
            </h3>
            <p className="text-xs sm:text-sm text-text-3 mt-1">
              SafeHer, Alliance Actions Afrique (3A), Joie Enseignante, TimePro, TransPay, Link-o...
            </p>
          </div>
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-solid text-white text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            <span>Voir les projets</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

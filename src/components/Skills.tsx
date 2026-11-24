import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Palette,
  Wrench,
  Layers,
  Smartphone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import SEO from "./SEO";
import { cardVariants, staggerContainer } from "../lib/animations";
import {
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiPrisma,
  SiRedis,
  SiFigma,
  SiWordpress,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiLinux,
} from "react-icons/si";

interface TechItem {
  name: string;
  role: string;
  icon: React.ReactNode;
  featured?: boolean;
}

interface SkillDomain {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  spanClass: string;
  technologies: TechItem[];
}

const domains: SkillDomain[] = [
  {
    index: "01",
    title: "Frontend Development",
    subtitle: "Spécialisation principale — Web, PWA & Mobile",
    description:
      "Conception d'interfaces réactives, accessibles et orientées performance. Architecture de composants modulaires, gestion d'état complexe, mode Offline-First (PWA) et rendu hybride (SSR / Prerendering).",
    icon: Code2,
    spanClass: "lg:col-span-7",
    technologies: [
      { name: "React.js", role: "SPA & Architecture UI", icon: <SiReact />, featured: true },
      { name: "Next.js", role: "App Router, SSR & PWA", icon: <SiNextdotjs />, featured: true },
      { name: "TypeScript", role: "Typage strict & fiabilité", icon: <SiTypescript />, featured: true },
      { name: "Vue.js", role: "Interfaces & Back-offices", icon: <SiVuedotjs />, featured: true },
      { name: "Tailwind CSS", role: "Design Systems & UI", icon: <SiTailwindcss />, featured: true },
      { name: "JavaScript (ES6+)", role: "DOM, Async & Web APIs", icon: <SiJavascript /> },
      { name: "HTML5 / CSS3", role: "Sémantique & WCAG", icon: <SiHtml5 /> },
      { name: "Flutter & Dart", role: "Mobile Cross-Platform", icon: <SiFlutter /> },
    ],
  },
  {
    index: "02",
    title: "UI/UX & Interface Design",
    subtitle: "Du concept à l'intégration pixel-perfect",
    description:
      "Traduction des besoins métiers en parcours utilisateurs fluides. Maquettage haute fidélité, création de chartes graphiques et souci du détail typographique.",
    icon: Palette,
    spanClass: "lg:col-span-5",
    technologies: [
      { name: "Figma", role: "Maquettes & Prototypes interactifs", icon: <SiFigma />, featured: true },
      { name: "Design Systems", role: "Tokens, composants & cohérence", icon: <Layers size={16} />, featured: true },
      { name: "Bootstrap", role: "Grilles & composants UI", icon: <SiBootstrap /> },
      { name: "Responsive & Mobile-First", role: "Adaptabilité multi-écrans", icon: <Smartphone size={16} /> },
      { name: "Micro-interactions", role: "Framer Motion & transitions sobres", icon: <Sparkles size={16} /> },
      { name: "WordPress / Headless", role: "Intégration CMS & sur-mesure", icon: <SiWordpress /> },
    ],
  },
  {
    index: "03",
    title: "Backend Development",
    subtitle: "APIs robustes, logique métier & sécurité",
    description:
      "Développement de serveurs d'applications, conception d'APIs RESTful et GraphQL, authentification sécurisée (JWT, Sanctum, contrôle d'accès par rôles) et architectures transactionnelles.",
    icon: Server,
    spanClass: "lg:col-span-6",
    technologies: [
      { name: "Node.js", role: "Runtime & Services API", icon: <SiNodedotjs />, featured: true },
      { name: "Laravel", role: "API REST, Sanctum & Eloquent", icon: <SiLaravel />, featured: true },
      { name: "Express.js", role: "Middlewares & REST APIs", icon: <SiExpress /> },
      { name: "NestJS", role: "Architecture modulaire & DI", icon: <SiNestjs /> },
      { name: "PHP 8+", role: "Architecture MVC & Backend", icon: <SiPhp /> },
      { name: "GraphQL / REST", role: "Contrats d'API & Intégration", icon: <SiGraphql /> },
      { name: "Sécurité Web", role: "CSRF, XSS, CSP, Rate-Limiting", icon: <ShieldCheck size={16} /> },
    ],
  },
  {
    index: "04",
    title: "Databases & Data Management",
    subtitle: "Modélisation relationnelle, NoSQL & persistance",
    description:
      "Structuration de schémas de données, migrations contrôlées, requêtes optimisées, stockage local chiffré (IndexedDB) et gestion du cache.",
    icon: Database,
    spanClass: "lg:col-span-6",
    technologies: [
      { name: "PostgreSQL", role: "Relationnel & Transactions", icon: <SiPostgresql />, featured: true },
      { name: "MySQL", role: "Modélisation & Requêtes SQL", icon: <SiMysql />, featured: true },
      { name: "MongoDB", role: "Documents NoSQL & Agrégations", icon: <SiMongodb />, featured: true },
      { name: "Prisma ORM", role: "Schémas typés & Migrations", icon: <SiPrisma /> },
      { name: "Firebase", role: "BaaS, Auth & Temps réel", icon: <SiFirebase /> },
      { name: "Redis", role: "Verrouillage, Cache & Idempotence", icon: <SiRedis /> },
    ],
  },
  {
    index: "05",
    title: "Tools & Development Environment",
    subtitle: "Workflow collaboratif, qualité de code & mise en production",
    description:
      "Gestion de versions en équipe Agile, automatisation des builds, déploiement continu sur cloud et serveurs dédiés/mutualisés (Vercel, Railway, OVHcloud, cPanel).",
    icon: Wrench,
    spanClass: "lg:col-span-12",
    technologies: [
      { name: "Git & GitHub", role: "Branches, PRs & GitHub Actions", icon: <SiGit />, featured: true },
      { name: "Linux", role: "Environnement système & Shell", icon: <SiLinux />, featured: true },
      { name: "Vercel", role: "Déploiement Frontend & Edge", icon: <SiVercel />, featured: true },
      { name: "Docker", role: "Conteneurisation d'environnements", icon: <SiDocker /> },
      { name: "GitHub Workflow", role: "Revue de code & Collaboration Agile", icon: <SiGithub /> },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="min-h-screen pt-28 pb-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base"
      aria-labelledby="skills-heading"
    >
      <SEO
        title="Architecture & Compétences"
        description="Compétences techniques d'Adonis OUSSOU : Frontend (React, Next.js, Vue.js, TypeScript, Tailwind), UI/UX, Backend (Laravel, Node.js, NestJS), Bases de données & DevOps."
        path="/competences"
      />
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <SectionHeader
          isInView={isInView}
          title="Architecture &"
          highlight="Compétences"
          headingId="skills-heading"
          subtitle="Une approche orientée produit : de la conception d'interfaces soignées jusqu'à l'architecture backend et la mise en production."
        />

        {/* Bandeau de positionnement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/40 backdrop-blur-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Positionnement Technique</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-1">
              Full Stack Web &amp; Mobile avec une forte exigence Frontend
            </h3>
            <p className="text-sm sm:text-base text-text-3 leading-relaxed">
              Je combine la maîtrise du développement d'interfaces modernes (React, Next.js, Vue.js, Tailwind CSS)
              avec la capacité à concevoir et déployer le backend complet (Laravel, Node.js, bases de données relationnelles et NoSQL).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 flex-shrink-0">
            {[
              { label: "Architecture UI", value: "React / Next / Vue" },
              { label: "API & Backend", value: "Node / Laravel / Nest" },
              { label: "Mobile & PWA", value: "Offline-First / Flutter" },
            ].map((pill, idx) => (
              <div
                key={idx}
                className="px-4 py-3 rounded-xl border border-border/50 bg-base/60"
              >
                <p className="text-[11px] uppercase tracking-wider text-text-3 font-medium">
                  {pill.label}
                </p>
                <p className="text-xs sm:text-sm font-bold text-text-1 mt-0.5">
                  {pill.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grille Bento éditoriale des 5 domaines */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {domains.map((domain) => {
            const DomainIcon = domain.icon;
            return (
              <motion.article
                key={domain.index}
                variants={cardVariants}
                className={`${domain.spanClass} group relative rounded-2xl p-6 sm:p-8 border border-border/60 bg-surface/35 hover:bg-surface/55 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* En-tête éditorial du domaine */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/25 text-accent group-hover:bg-accent-solid group-hover:text-white transition-colors duration-300">
                        <DomainIcon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-accent">
                          Domaine {domain.index}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-text-1 leading-tight">
                          {domain.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-text-2 mb-2">
                    {domain.subtitle}
                  </p>
                  <p className="text-sm text-text-3 leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Liste structurée des technologies */}
                <div className="pt-5 border-t border-border/40">
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${
                      domain.spanClass.includes("12")
                        ? "xl:grid-cols-5"
                        : domain.spanClass.includes("7")
                        ? "xl:grid-cols-3"
                        : "xl:grid-cols-2"
                    } gap-2.5`}
                  >
                    {domain.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-200 ${
                          tech.featured
                            ? "bg-elevated/70 border-border/80 hover:border-accent/50"
                            : "bg-base/40 border-border/40 hover:border-border/80"
                        }`}
                      >
                        <span className="text-base text-accent flex-shrink-0 mt-0.5">
                          {tech.icon}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-semibold text-text-1">
                              {tech.name}
                            </span>
                            {tech.featured && (
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                                title="Technologie principale"
                              />
                            )}
                          </div>
                          <p className="text-xs text-text-2 leading-snug">
                            {tech.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Lien vers la page suivante : Expériences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/35 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Étape suivante
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
              Découvrir comment j'applique ces technologies en entreprise
            </h3>
            <p className="text-xs sm:text-sm text-text-3 mt-1">
              Consultez mes expériences chez RAYNIS, NerdX Digital, QCT-Group et mes hackathons BLOLAB.
            </p>
          </div>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-solid text-white text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20 whitespace-nowrap"
          >
            <span>Voir mon parcours</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

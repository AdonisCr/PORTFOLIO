import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Code2,
  Server,
  Database,
  Palette,
  Rocket,
  Cpu,
  CheckCircle2,
  Sparkles,
  Globe,
  Layers,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import SEO from "./SEO";
import profileImage from "../img/profile.png";
import { cardVariants, staggerContainer } from "../lib/animations";

const domainsIntervention = [
  {
    index: "01",
    title: "Développement Frontend",
    desc: "Création d'interfaces réactives, modulaires et orientées performance avec React.js, Next.js, Vue.js et TypeScript.",
    icon: Code2,
  },
  {
    index: "02",
    title: "Conception UI/UX & Expérience Utilisateur",
    desc: "Traduction des idées en parcours fluides et ergonomiques sur Figma, intégrés au pixel près avec Tailwind CSS et Bootstrap.",
    icon: Palette,
  },
  {
    index: "03",
    title: "Développement Backend",
    desc: "Conception de la logique métier, de l'authentification et des architectures serveurs avec Node.js, Express.js, PHP et Laravel.",
    icon: Server,
  },
  {
    index: "04",
    title: "Conception & Intégration d'API REST",
    desc: "Structuration d'échanges de données fiables, sécurisés et documentés entre les clients web/mobiles et les services tiers.",
    icon: Layers,
  },
  {
    index: "05",
    title: "Gestion & Intégration de Bases de Données",
    desc: "Modélisation relationnelle (MySQL, PostgreSQL) et NoSQL (MongoDB, Firebase), migrations et persistance locale chiffrée.",
    icon: Database,
  },
  {
    index: "06",
    title: "Déploiement & Mise en Production",
    desc: "Configuration des environnements, optimisation des builds, CI/CD et hébergement (Vercel, OVHcloud, Railway, Linux).",
    icon: Rocket,
  },
];

const workPrinciples = [
  {
    title: "Autonomie & Rigueur technique",
    desc: "Capacité à prendre en main une fonctionnalité de bout en bout, de l'analyse du besoin jusqu'à la livraison vérifiée.",
  },
  {
    title: "Collaboration & Esprit d'équipe",
    desc: "Habitué aux cycles Agile et aux revues de code sous Git/GitHub pour avancer efficacement avec d'autres développeurs et designers.",
  },
  {
    title: "Résolution de problèmes & Force de proposition",
    desc: "Approche analytique face aux blocages techniques, avec la volonté constante de proposer des améliorations pragmatiques.",
  },
  {
    title: "Développement augmenté par l'IA",
    desc: "Utilisation raisonnée et critique des outils d'intelligence artificielle pour accélérer la recherche technique, fiabiliser le code et optimiser la productivité.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen pt-28 pb-32 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base"
      aria-labelledby="about-heading"
    >
      <SEO
        title="À propos — Identité & Approche Professionnelle"
        description="Découvrez le profil, la biographie, l'approche professionnelle et la vision d'Adonis OUSSOU, Développeur Full Stack Web & Mobile (Frontend-oriented)."
        path="/a-propos"
      />
      <BackgroundBlobs />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Retour rapide */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/70 bg-surface/50 text-text-2 hover:text-text-1 hover:border-accent/50 text-xs sm:text-sm font-semibold transition-all"
          >
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </Link>

          <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/25">
            Profil &amp; Identité Éditoriale
          </span>
        </motion.div>

        <SectionHeader
          isInView={isInView}
          title="Me"
          highlight="Découvrir"
          headingId="about-heading"
          subtitle="Building Digital Experiences That Matter — From Ideas to Digital Products."
        />

        {/* BLOC 1 : Carte d'identité & Positionnement stratégique */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-border/70 bg-surface/45 backdrop-blur-sm p-6 sm:p-10 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Portrait sobre */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="relative w-52 sm:w-64 rounded-2xl overflow-hidden border border-border/80 bg-gradient-to-b from-accent/15 via-surface to-base shadow-xl">
                <img
                  src={profileImage}
                  alt="Adonis OUSSOU — Développeur Full Stack Web & Mobile"
                  width={427}
                  height={585}
                  className="w-full h-auto object-contain profile-hero-img"
                />
              </div>

              <div className="mt-5 w-full space-y-2 text-center lg:text-left">
                <p className="text-lg font-extrabold text-text-1">
                  Adonis OUSSOU
                </p>
                <p className="text-xs font-mono text-accent uppercase tracking-wider">
                  Full Stack Developer — Frontend-oriented
                </p>
                <p className="text-xs text-text-3">
                  Basé à Abomey-Calavi / Cotonou, Bénin
                </p>
              </div>
            </div>

            {/* Présentation intermédiaire & Biographie */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent-light text-xs font-semibold">
                <Sparkles size={13} />
                <span>Positionnement Stratégique</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-1 leading-snug">
                Un profil polyvalent sur toute la chaîne logicielle, avec une sensibilité particulière pour la qualité des interfaces.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-text-2 leading-relaxed">
                <p>
                  Je suis <strong className="text-text-1">Adonis OUSSOU</strong>, développeur{" "}
                  <strong className="text-text-1">Full Stack Web &amp; Mobile</strong>, avec une orientation particulière vers le développement frontend et la conception d'interfaces utilisateur.
                </p>
                <p>
                  Mon parcours m'a permis de participer à différents projets professionnels, institutionnels et personnels, en intervenant sur plusieurs dimensions du développement logiciel : conception d'interfaces, développement backend, intégration d'API, gestion de bases de données et déploiement d'applications en production.
                </p>
                <p>
                  Au-delà de l'implémentation technique, j'accorde une attention particulière à l'expérience utilisateur, à l'ergonomie des interfaces et à la cohérence globale des produits développés.
                </p>
              </div>

              {/* Signatures & Action CV */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-text-3">
                    Signature
                  </p>
                  <p className="text-sm font-bold text-text-1">
                    “Building Digital Experiences That Matter.”
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/cv-adonis-oussou.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-solid text-white text-xs sm:text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20"
                  >
                    <Download size={16} />
                    <span>Télécharger mon CV (PDF)</span>
                  </a>
                  <Link
                    to="/projets"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-base/70 text-text-1 hover:border-accent/50 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <span>Voir mes réalisations</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BLOC 2 : Les 6 Domaines d'intervention */}
        <div className="mb-14">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Périmètre d'action
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-1 mt-1">
              Mes 6 domaines d'intervention
            </h2>
            <p className="text-sm text-text-3 mt-1">
              De la première maquette jusqu'à la mise en ligne sur serveur de production.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {domainsIntervention.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.index}
                  variants={cardVariants}
                  className="p-6 rounded-2xl border border-border/60 bg-surface/40 hover:bg-surface/65 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/25 text-accent">
                        <Icon size={19} />
                      </div>
                      <span className="text-xs font-mono font-bold text-text-3">
                        {item.index}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-text-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* BLOC 3 : Approche Professionnelle, Workflow IA & Ambition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          {/* Approche professionnelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/40 space-y-6"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent">
                Méthodologie &amp; Éthique
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
                Approche professionnelle au quotidien
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workPrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="p-4 rounded-xl border border-border/50 bg-base/60 space-y-1.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                    <h3 className="text-sm font-bold text-text-1">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-2 leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ambition & Vision + Résumé bilingue EN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="p-6 sm:p-7 rounded-2xl border border-border/60 bg-surface/40 space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <Cpu size={18} />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                  Ambition Professionnelle
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-1">
                Construire des produits numériques utiles et durables
              </h3>
              <p className="text-xs sm:text-sm text-text-2 leading-relaxed">
                Développer une expertise solide dans l'ingénierie logicielle, contribuer à la réalisation de solutions numériques performantes qui répondent à de vrais enjeux, et bâtir une identité reconnue dans l'écosystème du développement Web &amp; Mobile.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-accent/30 bg-accent/5 space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <Globe size={17} />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                  English Executive Summary
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-2 leading-relaxed">
                Full Stack Web &amp; Mobile Developer with a strong focus on frontend development and user interface design. Experienced in React.js, Next.js, Vue.js, Node.js, Laravel, MongoDB and SQL databases—delivering functional, user-centered digital products from concept to production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation bas de page vers Compétences / Projets / Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="p-6 sm:p-8 rounded-2xl border border-border/60 bg-surface/40 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent">
              Continuer l'exploration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-text-1 mt-1">
              Passer de la vision aux preuves concrètes
            </h3>
            <p className="text-xs sm:text-sm text-text-3 mt-1">
              Explorez mon architecture de compétences ou mes études de cas en production.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/competences"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-base/70 text-text-1 hover:border-accent/50 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Mes compétences</span>
            </Link>
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-solid text-white text-xs sm:text-sm font-semibold hover:bg-accent-solid-hover transition-all shadow-lg shadow-accent/20"
            >
              <span>Voir mes projets</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

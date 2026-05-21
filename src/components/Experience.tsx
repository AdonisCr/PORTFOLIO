import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";

const entries = [
  {
    type: "stage",
    title: "Développement Web",
    org: "RAYNIS",
    location: "Cotonou",
    period: "Oct 2025 – Déc 2025",
    desc: "Projets Vue.js/Tailwind + PHP/Laravel. Refonte courir54.fr. Méthode Agile.",
    icon: Briefcase,
    color: "from-violet-500/20 to-violet-500/5",
    accent: "#3b82f6",
    border: "border-blue-500/40",
    tag: "Stage",
    tagColor: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
  },
  {
    type: "stage",
    title: "Développement Web",
    org: "NerdX Digital",
    location: "Abomey-Calavi",
    period: "Jan 2025 – Mai 2025",
    desc: "React.js, Tailwind, Node.js, Express.js, MongoDB. Méthode Agile.",
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-500/5",
    accent: "#3b82f6",
    border: "border-blue-500/40",
    tag: "Stage",
    tagColor: "bg-blue-500/15 text-blue-400 ring-1 ring-blue-500/30",
  },
  {
    type: "formation",
    title: "Développement Web & Mobile",
    org: "École 229",
    location: "Cotonou",
    period: "Mars 2024 – Nov 2025",
    desc: "React, Vue.js, Laravel, Node.js, Flutter, MongoDB.",
    icon: GraduationCap,
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "#10b981",
    border: "border-emerald-500/40",
    tag: "Formation",
    tagColor: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
  {
    type: "stage",
    title: "Développement Web No Code",
    org: "QCT-Group",
    location: "Cotonou",
    period: "Jan 2024 – Mars 2024",
    desc: "Maquettes Figma, intégration WordPress, création charte graphique.",
    icon: Briefcase,
    color: "from-orange-500/20 to-orange-500/5",
    accent: "#f97316",
    border: "border-orange-500/40",
    tag: "Stage",
    tagColor: "bg-orange-500/15 text-orange-400 ring-1 ring-orange-500/30",
  },
  {
    type: "formation",
    title: "Compétences Numériques Fondamentales",
    org: "École 229",
    location: "Cotonou",
    period: "Août 2023 – Jan 2024",
    desc: "Algorithmique et fondamentaux du développement web.",
    icon: GraduationCap,
    color: "from-emerald-500/20 to-emerald-500/5",
    accent: "#10b981",
    border: "border-emerald-500/40",
    tag: "Formation",
    tagColor: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  },
];

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const cardVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
      <section
        id="experience"
        className="py-24 relative overflow-hidden bg-base"
        ref={sectionRef}
        aria-labelledby="experience-heading"
      >
      <BackgroundBlobs />

      <div className="relative z-10">
        {/* Header — centré avec max-w */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <SectionHeader
            isInView={isInView}
            title="Mon"
            highlight="Parcours"
            headingId="experience-heading"
            subtitle="Formations, expériences professionnelles et hackathons"
          />
        </div>

        {/* Scroll hint fade sur les bords */}
        <div className="relative mt-10">
          {/* Fade gauche */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-base to-transparent" />
          {/* Fade droite */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-base to-transparent" />

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
          >
            <div className="flex gap-5 px-8 sm:px-16 w-max">
              {entries.map((entry, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={cardVariants}
                  className="w-[300px] flex-shrink-0"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div
                    className={` 
                      relative h-full rounded-2xl border ${entry.border}
                      bg-surface/30 backdrop-blur-sm overflow-hidden
                      transition-all duration-300 group
                      hover:shadow-2xl
                    `}
                    style={{
                      boxShadow: `0 0 0 0 ${entry.accent}00`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 8px 32px -8px ${entry.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        `0 0 0 0 ${entry.accent}00`;
                    }}
                  >
                    {/* Gradient fond */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${entry.color} opacity-60`}
                    />

                    {/* Barre accent gauche */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                      style={{ background: entry.accent }}
                    />

                    {/* Contenu */}
                    <div className="relative z-10 p-5 flex flex-col gap-3">
                      {/* Header card */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${entry.accent}20`,
                              border: `1px solid ${entry.accent}40`,
                              color: entry.accent,
                            }}
                          >
                            <entry.icon size={16} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-bold text-text-1 leading-tight group-hover:text-white transition-colors line-clamp-2">
                              {entry.title}
                            </h3>
                            <p className="text-xs text-text-2 mt-0.5 font-medium">
                              {entry.org}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap flex-shrink-0 ${entry.tagColor}`}
                        >
                          {entry.tag}
                        </span>
                      </div>

                      {/* Lieu + Dates */}
                      <div className="flex flex-col gap-1">
                        <span className="flex items-center gap-1.5 text-xs text-text-3">
                          <MapPin size={11} className="flex-shrink-0" />
                          {entry.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-text-3">
                          <Calendar size={11} className="flex-shrink-0" />
                          {entry.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-text-2 leading-relaxed border-t border-white/5 pt-3">
                        {entry.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-2 text-xs text-text-3"
        >
          <span className="flex gap-1">
            {entries.map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-text-3/30"
              />
            ))}
          </span>
          <span className="ml-2 opacity-60">← glisser →</span>
        </motion.div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="p-8 rounded-2xl border border-border/30 bg-surface/20 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 5, suffix: "", label: "Réalisations" },
                { value: 36, suffix: "+", label: "Mois cumulés" },
                { value: 7, suffix: "", label: "Organisations" },
                { value: 3, suffix: "", label: "Domaines" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-text-1 mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} animate={isInView} />
                  </div>
                  <div className="text-sm text-text-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
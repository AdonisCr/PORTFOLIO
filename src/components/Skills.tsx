import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Database, Wrench } from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import { cardVariants, staggerContainer } from "../lib/animations";
import {
  SiHtml5, SiReact, SiVuedotjs, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiPhp, SiLaravel, SiMongodb, SiPostgresql,
  SiMysql, SiFirebase, SiGit, SiDocker, SiVercel, SiLinux
} from "react-icons/si";

const SkillBar = ({ skill, skillIndex }: { skill: { name: string; level: number; icon: React.ReactNode }; skillIndex: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="group/skill">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-semibold text-text-2 group-hover/skill:text-accent transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <motion.span
          className="text-sm font-bold px-3 py-1 rounded-full bg-surface text-accent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 + skillIndex * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative w-full rounded-full h-2.5 overflow-hidden bg-surface/50">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: skillIndex * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-once" />
        </motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "HTML/CSS", level: 98, icon: <SiHtml5 className="text-orange-500" /> },
        { name: "React", level: 90, icon: <SiReact className="text-cyan-400" /> },
        { name: "Vue.js", level: 85, icon: <SiVuedotjs className="text-green-500" /> },
        { name: "JavaScript", level: 70, icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss className="text-cyan-500" /> },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: <SiNodedotjs className="text-green-600" /> },
        { name: "PHP", level: 70, icon: <SiPhp className="text-indigo-500" /> },
        { name: "Laravel", level: 80, icon: <SiLaravel className="text-red-500" /> },
        { name: "Express.js", level: 60, icon: <SiNodedotjs className="text-green-600" /> },
        { name: "REST APIs", level: 60, icon: <Server className="text-text-2" size={18} /> },
      ],
    },
    {
      title: "Base de données",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 88, icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", level: 85, icon: <SiPostgresql className="text-blue-500" /> },
        { name: "MySQL", level: 82, icon: <SiMysql className="text-orange-500" /> },
        { name: "Firebase", level: 85, icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "DevOps & Outils",
      icon: Wrench,
      skills: [
        { name: "Git & Github", level: 95, icon: <SiGit className="text-orange-600" /> },
        { name: "Docker", level: 40, icon: <SiDocker className="text-blue-500" /> },
        { name: "Vercel", level: 90, icon: <SiVercel className="text-white" /> },
        { name: "Linux", level: 80, icon: <SiLinux className="text-yellow-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-base" aria-labelledby="skills-heading">
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            isInView={isInView}
            title="Mes"
            highlight="Compétences"
            headingId="skills-heading"
            subtitle="Un arsenal technologique complet pour donner vie à vos projets les plus ambitieux"
          />

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={cardVariants}
                className="group relative backdrop-blur-sm rounded-2xl p-8 border bg-surface/60 border-border/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <motion.div
                      initial={{ rotate: -10, scale: 0 }}
                      animate={isInView ? { rotate: 0, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                    >
                      <category.icon className="text-accent" size={32} />
                    </motion.div>
                    <h3 className="ml-4 text-2xl font-bold text-text-1">{category.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar key={skillIndex} skill={skill} skillIndex={skillIndex} />
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-surface/80 text-text-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.15 }}
                >
                  Moy. {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;

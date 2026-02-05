import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Code2, Server, Database, Wrench, Star } from "lucide-react";

const Skills = () => {
  const { isDarkMode } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      skills: [
        { name: "HTML/CSS", level: 98, icon: "" },
        { name: "React", level: 90, icon: "" },
        { name: "Vue.js", level: 85, icon: "" },
        // { name: "TypeScript", level: 90, icon: "" },
        { name: "JavaScript", level: 70, icon: "" },
        { name: "Tailwind CSS", level: 92, icon: "" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30",
      skills: [
        { name: "Node.js", level: 90, icon: "" },
        { name: "PHP", level: 70, icon: "" },
                { name: "Laravel", level: 80, icon: "" },
        { name: "Express.js", level: 60, icon: "" },
        { name: "REST APIs", level: 60, icon: "" },
        // { name: "GraphQL", level: 75, icon: "" },
      ],
    },
    {
      title: "Base de données",
      icon: Database,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30",
      skills: [
        { name: "MongoDB", level: 88, icon: "" },
        { name: "PostgreSQL", level: 85, icon: "" },
        { name: "MySQL", level: 82, icon: "" },
        { name: "Firebase", level: 85, icon: "" },
        // { name: "Redis", level: 80, icon: "" },
        // { name: "Supabase", level: 70, icon: "" },
      ],
    },
    {
      title: "DevOps & Outils",
      icon: Wrench,
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30",
      skills: [
        { name: "Git & Github", level: 95, icon: "" },
        { name: "Docker", level: 40, icon: "" },
        // { name: "AWS", level: 78, icon: "" },
        { name: "Vercel", level: 90, icon: "" },
        // { name: "GitHub Actions", level: 85, icon: "" },
        { name: "Linux", level: 80, icon: "" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDarkMode
          ? "bg-slate-900"
          : "bg-gradient-to-b from-slate-50 via-gray-50 to-white"
      }`}
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-200"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-200"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span
              className={`ml-2 text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-purple-400" : "text-purple-600"
              }`}
            >
              Expertise Technique
            </span>
          </div>

          <h2
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white/80" : "text-gray-600"
            }`}
          >
            Mes{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Un arsenal technologique complet pour donner vie à vos projets les
            plus ambitieux
          </p>
        </div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;

            return (
              <div
                key={categoryIndex}
                className={`group relative backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-[1.02] ${
                  isDarkMode
                    ? "bg-slate-800/60 border-slate-700/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10"
                    : "bg-white/70 border-gray-200/60 hover:border-purple-300/60 hover:shadow-xl hover:shadow-purple-500/5"
                }`}
              >
                {/* Gradient d'arrière-plan au survol */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 ${category.bgColor} blur-xl`}
                ></div>

                <div className="relative z-10">
                  {/* En-tête de catégorie */}
                  <div className="flex items-center mb-8">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`ml-4 text-2xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Liste des compétences */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        onMouseEnter={() =>
                          setHoveredSkill(`${categoryIndex}-${skillIndex}`)
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group/skill"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span
                              className={`font-semibold transition-colors ${
                                hoveredSkill ===
                                `${categoryIndex}-${skillIndex}`
                                  ? "text-purple-400"
                                  : isDarkMode
                                    ? "text-gray-200"
                                    : "text-gray-700"
                              }`}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-bold px-3 py-1 rounded-full ${
                              isDarkMode
                                ? "bg-slate-700 text-purple-400"
                                : "bg-purple-100/70 text-purple-600"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Barre de progression avec animation */}
                        <div
                          className={`relative w-full rounded-full h-2.5 overflow-hidden ${
                            isDarkMode ? "bg-slate-700/50" : "bg-gray-200/60"
                          }`}
                        >
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{
                              width:
                                hoveredSkill ===
                                `${categoryIndex}-${skillIndex}`
                                  ? "100%"
                                  : `${skill.level}%`,
                              opacity:
                                hoveredSkill ===
                                `${categoryIndex}-${skillIndex}`
                                  ? 0.5
                                  : 1,
                            }}
                          >
                            {/* Effet de brillance */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                          {hoveredSkill ===
                            `${categoryIndex}-${skillIndex}` && (
                            <div
                              className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.color}`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge de niveau moyen */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    isDarkMode
                      ? "bg-slate-700/80 text-gray-300"
                      : "bg-white/80 text-gray-600"
                  }`}
                >
                  Moy.{" "}
                  {Math.round(
                    category.skills.reduce(
                      (acc, skill) => acc + skill.level,
                      0,
                    ) / category.skills.length,
                  )}
                  %
                </div>
              </div>
            );
          })}
        </div>

        {/* Section statistiques */}
        {/* <div
          className={`mt-16 p-8 rounded-2xl border ${
            isDarkMode
              ? "bg-slate-800/40 border-slate-700/50"
              : "bg-white/60 border-gray-200/60"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                24+
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                87%
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Niveau moyen
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                3
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                Catégories
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                1+
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Ans d'expérience
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;

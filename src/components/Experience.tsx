import { useState, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experiences = [
    {
      title: "Graphiste",
      period: "NOV 2021 - JUL 2022",
      duration: "09 Mois",
      company: "MYAH",
      companyFull: "IT COMPANY",
      logo: "/path-to-myah-logo.png",
    },
    {
      title: "Graphiste Assistant",
      period: "FÉV 2022 - AVR 2022",
      duration: "03 Mois",
      company: "IDIVO HOME",
      companyFull: "",
      logo: "/path-to-idivo-logo.png",
    },
    {
      title: "Graphiste",
      period: "SEP 2022 - MAI 2023",
      duration: "09 Mois",
      company: "ASIN",
      companyFull: "AGENCE DES SYSTEMES D'INFORMATION ET DU NUMERIQUE",
      companySubtitle: "RÉPUBLIQUE DU BÉNIN",
      logo: "/path-to-asin-logo.png",
    },
    {
      title: "UX/UI Designer",
      period: "JUL 2023 - SEP 2023",
      duration: "03 Mois",
      company: "Open SI",
      companyFull: "",
      logo: "/path-to-opensi-logo.png",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = 
        direction === 'left' 
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDarkMode
          ? "bg-slate-900"
          : "bg-gradient-to-b from-white via-gray-50 to-slate-50"
      }`}
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-200"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-200"
          }`}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span
              className={`ml-2 text-sm font-semibold uppercase tracking-wider ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Parcours Professionnel
            </span>
          </div>

          <h2
            className={`text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white/80" : "text-gray-600"
            }`}
          >
            Mon{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expérience
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Un parcours riche et diversifié au service de la création visuelle et du design
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Conteneur scrollable */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-16"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div
              className={`relative backdrop-blur-sm rounded-3xl p-12 border ${
                isDarkMode
                  ? "bg-slate-800/40 border-slate-700/50"
                  : "bg-white/70 border-gray-200/60"
              }`}
            >
              {/* Bouton gauche sur la card */}
              <button
                onClick={() => scroll('left')}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-slate-700/30 text-white/40 hover:bg-slate-700/60 hover:text-white/80"
                    : "bg-gray-200/30 text-gray-600/40 hover:bg-gray-200/60 hover:text-gray-600/80"
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Bouton droit sur la card */}
              <button
                onClick={() => scroll('right')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 ${
                  isDarkMode
                    ? "bg-slate-700/30 text-white/40 hover:bg-slate-700/60 hover:text-white/80"
                    : "bg-gray-200/30 text-gray-600/40 hover:bg-gray-200/60 hover:text-gray-600/80"
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Conteneur de la timeline */}
              <div className="min-w-max relative">
                {/* Postes alignés en haut */}
                <div className="flex items-center gap-0 mb-12 relative">
                  {/* Ligne horizontale qui passe au milieu des postes */}
                  <div 
                    className={`absolute left-0 right-0 h-0.5 z-0`}
                    style={{ 
                      top: '50%',
                      borderStyle: 'dashed',
                      backgroundImage: isDarkMode 
                        ? 'linear-gradient(to right, #4b5563 50%, transparent 50%)'
                        : 'linear-gradient(to right, #d1d5db 50%, transparent 50%)',
                      backgroundSize: '10px 1px',
                      backgroundRepeat: 'repeat-x',
                      height: '1px',
                    }}
                  ></div>

                  {experiences.map((exp, index) => (
                    <div
                      key={`top-${index}`}
                      className="relative flex flex-col items-center z-10"
                      style={{ width: '280px' }}
                    >
                      <div
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`transition-all duration-300 text-center ${
                          hoveredIndex === index ? "scale-105" : ""
                        }`}
                      >
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            isDarkMode ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className={`text-sm font-medium mb-1 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {exp.period}
                        </p>
                        <p
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          ( {exp.duration} )
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Espace entre les postes et les lignes verticales */}
                <div className="h-8"></div>

                {/* Lignes verticales avec points au bout */}
                <div className="flex items-start gap-0">
                  {experiences.map((exp, index) => (
                    <div
                      key={`vline-${index}`}
                      className="relative flex flex-col items-center"
                      style={{ width: '280px' }}
                    >
                      {/* Ligne verticale */}
                      <div
                        className={`w-0.5 h-32 ${
                          isDarkMode ? "bg-gray-600" : "bg-gray-300"
                        }`}
                      ></div>

                      {/* Point coloré au bout de la ligne verticale */}
                      <div
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          hoveredIndex === index
                            ? isDarkMode
                              ? "bg-blue-400 ring-4 ring-blue-400/30 scale-125"
                              : "bg-blue-500 ring-4 ring-blue-500/30 scale-125"
                            : isDarkMode
                              ? "bg-teal-400 ring-2 ring-teal-400/20"
                              : "bg-teal-600 ring-2 ring-teal-600/20"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Espace avant les entreprises */}
                <div className="h-8"></div>

                {/* Entreprises alignées en bas */}
                <div className="flex items-start gap-0 pt-8 border-t border-gray-200/20">
                  {experiences.map((exp, index) => (
                    <div
                      key={`company-${index}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`flex flex-col items-center justify-center transition-all duration-300 ${
                        hoveredIndex === index ? "scale-110" : "opacity-70 hover:opacity-100"
                      }`}
                      style={{ width: '280px' }}
                    >
                      {/* Logo placeholder */}
                      <div
                        className={`w-32 h-20 rounded-lg flex items-center justify-center ${
                          isDarkMode ? "bg-slate-700/50" : "bg-gray-100"
                        }`}
                      >
                        <div className={`text-center px-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          <div className="font-bold text-base leading-tight">{exp.company}</div>
                          {exp.companyFull && (
                            <div className="text-xs mt-1 leading-tight">{exp.companyFull}</div>
                          )}
                          {exp.companySubtitle && (
                            <div className="text-xs mt-0.5 opacity-70 leading-tight">{exp.companySubtitle}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div
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
                4
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Expériences
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                24
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Mois au total
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                4
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Entreprises
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-4xl font-bold ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
              >
                2+
              </div>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Domaines
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;
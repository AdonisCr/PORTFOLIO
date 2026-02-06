import { useTheme } from "../contexts/ThemeContext";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Heart,
  Lightbulb,
  Target,
  MessageCircle,
} from "lucide-react";
import profileImage from "../img/profile.png";

const Hero = () => {
  const { isDarkMode } = useTheme();

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden ${
        isDarkMode ? "bg-slate-900" : "bg-slate-50"
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

      <div className="w-full max-w-[90%] lg:max-w-7xl mx-auto h-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 items-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[650px] h-[600px] lg:h-[700px] group overflow-hidden rounded-2xl">
              {/* Background de la div avec couleur du thème */}
              <div
                className={`absolute inset-0 ${
                  isDarkMode ? "bg-slate-800" : "bg-gray-200"
                }`}
              ></div>

              {/* Glow effects derrière l'image */}
              <div
                className={`absolute inset-0 blur-3xl transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 group-hover:from-purple-500/30 group-hover:via-pink-500/30 group-hover:to-purple-500/30"
                    : "bg-gradient-to-br from-purple-300/15 via-pink-300/15 to-purple-300/15 group-hover:from-purple-300/25 group-hover:via-pink-300/25 group-hover:to-purple-300/25"
                }`}
              ></div>

              {/* L'image positionnée au 1/4 du bas avec effet noir & blanc */}
              <div className="absolute -bottom-10 left-0 right-0 h-[80%] flex items-end justify-center">
                <img
                  src={profileImage}
                  alt="Adonis OUSSOU - Développeur Web & Mobile"
                  className="relative w-full h-auto object-contain z-10 transition-all duration-700"
                  style={{
                    filter: isDarkMode
                      ? "grayscale(100%) brightness(0.9) contrast(1.1) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
                      : "grayscale(100%) brightness(1.05) contrast(1.05) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3))",
                  }}
                />
                {/* Version couleur qui apparaît au hover */}
                <img
                  src={profileImage}
                  alt="Adonis OUSSOU"
                  className="absolute bottom-0 left-0 right-0 w-full h-auto object-contain z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                  style={{
                    filter: isDarkMode
                      ? "brightness(1.08) contrast(1.12) drop-shadow(0 0 40px rgba(168, 85, 247, 0.4)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))"
                      : "brightness(1.05) contrast(1.08) saturate(1.1) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.25))",
                  }}
                />
              </div>

              {/* Gradient de l'image */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1/6 pointer-events-none z-30 ${
                  isDarkMode
                    ? "bg-gradient-to-t from-slate-900 via-slate-900/95 via-slate-900/80 via-slate-900/50 via-slate-900/20 to-transparent"
                    : "bg-gradient-to-t from-slate-50 via-slate-50/95 via-slate-50/80 via-slate-50/50 via-slate-50/20 to-transparent"
                }`}
              ></div>

              {/* Symboles de code flottants */}
              <div className="absolute top-10 right-8 text-3xl font-bold opacity-30 animate-float z-40">
                <span
                  className={isDarkMode ? "text-purple-400" : "text-purple-500"}
                >
                  &lt;/&gt;
                </span>
              </div>

              <div
                className="absolute top-1/4 left-8 text-2xl font-bold opacity-30 animate-float z-40"
                style={{ animationDelay: "0.5s" }}
              >
                <span
                  className={isDarkMode ? "text-pink-400" : "text-pink-500"}
                >
                  {"{}"}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section - À droite */}
          <div className="text-center lg:text-left order-2 space-y-6">
            {/* Titre principal - Touches de couleur subtiles */}
            <div>
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={isDarkMode ? "text-purple-400" : "text-purple-600"}
                >
                  Développeur
                </span>
              </h1>
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Web & Mobile
              </h1>
            </div>

            {/* Nom */}
            <h2
              className={`text-3xl sm:text-4xl font-semibold ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Je m'appelle{" "}
              <span
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Adonis OUSSOU
              </span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Mon objectif est de vous accompagner à chaque étape de votre
              projet, de la réflexion technique jusqu'à la mise en production.
              Je conçois et développe des applications web et mobiles
              performantes, évolutives et adaptées à vos besoins métiers.
            </p>

            {/* Qualities Grid - Couleur unie légère qui s'accorde aux deux thèmes */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-xl mx-auto lg:mx-0">
              <div
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/30"
                    : "bg-white/80 hover:bg-white border border-gray-200 hover:border-purple-300/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-slate-700/60" : "bg-gray-100/80"
                  }`}
                >
                  <Code
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Code propre
                  </h4>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Standards élevés
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/30"
                    : "bg-white/80 hover:bg-white border border-gray-200 hover:border-purple-300/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-slate-700/60" : "bg-gray-100/80"
                  }`}
                >
                  <Heart
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Passion
                  </h4>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Amour du métier
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/30"
                    : "bg-white/80 hover:bg-white border border-gray-200 hover:border-purple-300/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-slate-700/60" : "bg-gray-100/80"
                  }`}
                >
                  <Lightbulb
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Innovation
                  </h4>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Solutions créatives
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 hover:bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/30"
                    : "bg-white/80 hover:bg-white border border-gray-200 hover:border-purple-300/50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-slate-700/60" : "bg-gray-100/80"
                  }`}
                >
                  <Target
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Objectifs
                  </h4>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Résultats concrets
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons - Design sobre avec touche de couleur */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <button
                onClick={scrollToSkills}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-purple-600 text-white hover:bg-purple-500 shadow-lg hover:shadow-purple-500/50"
                    : "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-purple-600/50"
                }`}
              >
                <span>Découvrir mon profil</span>
                <ArrowDown size={22} />
              </button>

              <a
                href="/cv-adonis-oussou.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`border-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 ${
                  isDarkMode
                    ? "border-purple-500 text-purple-400 hover:bg-purple-500/10"
                    : "border-purple-600 text-purple-700 hover:bg-purple-50"
                }`}
              >
                <Download size={22} />
                <span>Télécharger CV</span>
              </a>
            </div>

            {/* Social Links - Touches de couleur au hover */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/AdonisCr"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-100/70"
                }`}
                title="GitHub"
              >
                <Github size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/adonis-oussou/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-100/70"
                }`}
                title="LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <a
                href="mailto:adonisoussou737@gmail.com"
                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-100/70"
                }`}
                title="Email"
              >
                <Mail size={26} />
              </a>
              <a
                href="#"
                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-400 hover:bg-purple-500/10"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-100/70"
                }`}
                title="WhatsApp"
              >
                <MessageCircle size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
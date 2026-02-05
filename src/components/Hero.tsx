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
// Utilisez cette ligne une fois que vous aurez retiré le fond de votre image
// import profileImage from "../img/Profile sans Fond.png";
// Ou gardez celle-ci temporairement :
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
      {/* Éléments décoratifs en arrière-plan - INVERSÉS par rapport à Skills */}
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
          {/* Image Section - À gauche */}
          <div className="flex justify-center lg:justify-start order-1 items-center">
            <div className="relative w-full max-w-[500px] lg:max-w-[650px] group">
              <div className="relative">
                {/* Glow effects réduits derrière l'image */}
                <div className={`absolute inset-0 blur-3xl transition-all duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-500/25 via-pink-500/25 to-purple-500/25 group-hover:from-purple-500/35 group-hover:via-pink-500/35 group-hover:to-purple-500/35'
                    : 'bg-gradient-to-br from-purple-300/20 via-pink-300/20 to-purple-300/20 group-hover:from-purple-300/30 group-hover:via-pink-300/30 group-hover:to-purple-300/30'
                } animate-pulse`}></div>
                
                <div className={`absolute inset-0 blur-2xl transition-all duration-500 ${
                  isDarkMode
                    ? 'bg-gradient-to-tl from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30'
                    : 'bg-gradient-to-tl from-blue-200/15 via-purple-200/15 to-pink-200/15 group-hover:from-blue-200/25 group-hover:via-purple-200/25 group-hover:to-pink-200/25'
                }`}></div>

                {/* Container pour l'image avec gradient fade au bas */}
                <div className="relative">
                  {/* L'image elle-même - AGRANDIE */}
                  <img
                    src={profileImage}
                    alt="Adonis OUSSOU - Développeur Web & Mobile, spécialisé en applications performantes et évolutives"
                    className={`relative w-full max-w-[500px] lg:max-w-[650px] h-auto object-contain z-10 transition-all duration-500 transform group-hover:scale-105 ${
                      isDarkMode ? 'profile-image-dark' : 'profile-image-light'
                    }`}
                    style={{ 
                      filter: isDarkMode 
                        ? 'brightness(1.08) contrast(1.12) drop-shadow(0 0 60px rgba(168, 85, 247, 0.6)) drop-shadow(0 0 120px rgba(236, 72, 153, 0.4)) drop-shadow(0 30px 60px rgba(0, 0, 0, 0.5))' 
                        : 'brightness(1.05) contrast(1.08) saturate(1.15) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 0 40px rgba(147, 51, 234, 0.2))'
                    }}
                  />

                  {/* Gradient fade AUGMENTÉ au bas pour bien camoufler */}
                  <div className={`absolute bottom-0 left-0 right-0 h-64 pointer-events-none ${
                    isDarkMode
                      ? 'bg-gradient-to-t from-slate-900 via-slate-900/90 via-slate-900/60 to-transparent'
                      : 'bg-gradient-to-t from-slate-50 via-slate-50/90 via-slate-50/60 to-transparent'
                  }`}></div>
                </div>

                {/* Symboles de code flottants */}
                <div className="absolute top-10 -right-8 text-4xl font-bold opacity-40 animate-float">
                  <span className={isDarkMode ? "text-purple-400" : "text-purple-500"}>
                    &lt;/&gt;
                  </span>
                </div>
                
                <div className="absolute bottom-20 -left-8 text-3xl font-bold opacity-40 animate-float"
                  style={{ animationDelay: "0.5s" }}>
                  <span className={isDarkMode ? "text-pink-400" : "text-pink-500"}>
                    {'{}'}
                  </span>
                </div>
                
                <div className="absolute top-1/3 -right-10 text-2xl font-bold opacity-40 animate-float"
                  style={{ animationDelay: "1s" }}>
                  <span className={isDarkMode ? "text-blue-400" : "text-blue-500"}>
                    [ ]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - À droite */}
          <div className="text-center lg:text-left order-2 space-y-6">
            {/* Titre principal */}
            <div>
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${
                    isDarkMode
                      ? "from-purple-400 via-pink-400 to-purple-400"
                      : "from-purple-500 via-pink-500 to-purple-500"
                  } animate-gradient`}
                >
                  Développeur
                </span>
              </h1>
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${
                    isDarkMode
                      ? "from-pink-400 via-purple-400 to-pink-400"
                      : "from-pink-500 via-purple-500 to-pink-500"
                  }`}
                >
                  Web & Mobile
                </span>
              </h1>
            </div>

            {/* Nom */}
            <h2
              className={`text-3xl sm:text-4xl font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Je m'appelle{" "}
              <span
                className={`${
                  isDarkMode ? "text-purple-400" : "text-purple-600"
                }`}
              >
                Adonis OUSSOU
              </span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Mon objectif est de vous accompagner à chaque étape de votre
              projet, de la réflexion technique jusqu'à la mise en production.
              Je conçois et développe des applications web et mobiles
              performantes, évolutives et adaptées à vos besoins métiers.
            </p>

            {/* Qualities Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-xl mx-auto lg:mx-0">
              <div
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-purple-500/10 hover:bg-purple-500/20"
                    : "bg-purple-50/70 hover:bg-purple-100/70"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-purple-500/30" : "bg-purple-200/60"
                  }`}
                >
                  <Code
                    className={
                      isDarkMode ? "text-purple-300" : "text-purple-600"
                    }
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
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
                    ? "bg-pink-500/10 hover:bg-pink-500/20"
                    : "bg-pink-50/70 hover:bg-pink-100/70"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-pink-500/30" : "bg-pink-200/60"
                  }`}
                >
                  <Heart
                    className={isDarkMode ? "text-pink-300" : "text-pink-600"}
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
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
                    ? "bg-blue-500/10 hover:bg-blue-500/20"
                    : "bg-blue-50/70 hover:bg-blue-100/70"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-blue-500/30" : "bg-blue-200/60"
                  }`}
                >
                  <Lightbulb
                    className={isDarkMode ? "text-blue-300" : "text-blue-600"}
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
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
                    ? "bg-green-500/10 hover:bg-green-500/20"
                    : "bg-green-50/70 hover:bg-green-100/70"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-green-500/30" : "bg-green-200/60"
                  }`}
                >
                  <Target
                    className={isDarkMode ? "text-green-300" : "text-green-600"}
                    size={22}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
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

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4">
              <button
                onClick={scrollToSkills}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-600"
                    : "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-600"
                }`}
              >
                <span>Découvrir mon profil</span>
                <ArrowDown size={22} className="animate-bounce" />
              </button>

              <button
                className={`border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 ${
                  isDarkMode
                    ? "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white hover:shadow-xl hover:shadow-purple-500/50"
                    : "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white hover:shadow-lg"
                }`}
              >
                <Download size={22} />
                <span>Télécharger CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/AdonisCr"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-purple-400 hover:bg-purple-500/20"
                    : "text-gray-500 hover:text-purple-600 hover:bg-purple-100/60"
                }`}
                title="GitHub"
              >
                <Github size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/adonis-oussou/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-blue-400 hover:bg-blue-500/20"
                    : "text-gray-500 hover:text-blue-600 hover:bg-blue-100/60"
                }`}
                title="LinkedIn"
              >
                <Linkedin size={26} />
              </a>
              <a
                href="mailto:adonisoussou737@gmail.com"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-pink-400 hover:bg-pink-500/20"
                    : "text-gray-500 hover:text-pink-600 hover:bg-pink-100/60"
                }`}
                title="Email"
              >
                <Mail size={26} />
              </a>
              <a
                href="#"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-green-400 hover:bg-green-500/20"
                    : "text-gray-500 hover:text-green-600 hover:bg-green-100/60"
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
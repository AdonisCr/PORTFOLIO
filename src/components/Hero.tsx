import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  UserCheck,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import SEO from "./SEO";
import profileImage from "../img/profile.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const TITLES = [
  "Développeur Full Stack Web & Mobile",
  "Frontend-Oriented Engineer",
  "Architecte d'Interfaces Modernes",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTitleIndex((p) => (p + 1) % TITLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  return (
    <section
      id="hero"
      className="hero-section h-screen max-h-screen flex items-center md:items-end justify-center px-5 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-6 md:pb-0 relative overflow-hidden bg-base"
    >
      <SEO
        title="Accueil — Développeur Full Stack Web & Mobile"
        description="Portfolio d'Adonis OUSSOU, Développeur Full Stack Web & Mobile (Frontend-oriented). Building Digital Experiences That Matter."
        path="/"
      />
      <BackgroundBlobs />

      <div className="w-full max-w-[1480px] mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-16 items-center md:items-end"
        >
          {/* MOITIÉ GAUCHE (6/12 dès Tablette md:) : Image grande, libre et ancrée en bas */}
          <motion.div
            variants={fadeUp(0.05)}
            className="md:col-span-6 flex justify-center items-end order-1 relative"
          >
            <div className="relative w-full flex items-end justify-center overflow-visible">
              {/* Halo doux derrière le portrait */}
              <div className="absolute inset-x-8 bottom-8 top-12 bg-accent/10 blur-3xl rounded-full pointer-events-none" />

              <motion.img
                src={profileImage}
                alt="Adonis OUSSOU - Développeur Full Stack Web & Mobile"
                width={427}
                height={585}
                className="hero-img relative z-10 w-auto h-[27vh] sm:h-[34vh] md:h-[70vh] lg:h-[84vh] xl:h-[86vh] max-w-full object-contain object-bottom transition-transform duration-700 hover:scale-[1.02] profile-hero-img select-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
              />

              {/* Fondu progressif au pied de l'image */}
              <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none z-20 bg-gradient-to-t from-base via-base/60 to-transparent" />
            </div>
          </motion.div>

          {/* MOITIÉ DROITE (6/12 dès Tablette md:) : Contenu soft, aéré et aligné en bas avec l'image */}
          <motion.div
            variants={fadeUp(0.12)}
            className="hero-copy md:col-span-6 text-center md:text-left order-2 pb-0 md:pb-6 lg:pb-8 space-y-3.5 sm:space-y-5 lg:space-y-6"
          >
            {/* Positionnement clair et lisible */}
            <motion.p
              variants={fadeUp(0.1)}
              className="text-[11px] sm:text-sm font-mono font-semibold tracking-[0.18em] sm:tracking-widest uppercase text-accent"
            >
              Full Stack Web &amp; Mobile{" "}
              <span className="whitespace-nowrap">— Frontend-oriented</span>
            </motion.p>

            {/* Nom fluide qui s'adapte à toutes les tailles d'écran */}
            <motion.h1
              variants={fadeUp(0.16)}
              className="text-[2.15rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-1 tracking-tight leading-[1.06]"
            >
              Adonis <span className="text-accent">OUSSOU</span>
            </motion.h1>

            {/* Signatures officielles */}
            <motion.div
              variants={fadeUp(0.22)}
              className="md:pl-4 md:border-l-2 md:border-accent/50 space-y-1.5"
            >
              <p className="hero-signature text-base sm:text-xl lg:text-2xl font-bold text-text-1 tracking-tight">
                Building Digital Experiences That Matter.
              </p>
              <div className="min-h-[46px] flex items-center justify-center md:justify-start">
                <p className="w-full text-xs sm:text-sm lg:text-base font-mono font-medium text-text-1 leading-relaxed">
                  {/* Deux lignes fixes : la ligne ne peut plus déborder de sa
                      colonne et se faire couper par le bord de l'écran. */}
                  <span className="block whitespace-nowrap">
                    From Ideas to Digital Products
                  </span>
                  <span className="block text-accent font-semibold">
                    {text}
                    <span
                      className={`inline-block w-[2px] h-3.5 sm:h-4 ml-0.5 align-middle ${
                        showCursor ? "bg-accent opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Texte court, lisible, jamais coupé */}
            <motion.p
              variants={fadeUp(0.28)}
              className="hero-intro text-sm sm:text-base lg:text-lg font-medium text-text-1 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Je conçois et développe des applications web et mobiles modernes,
              de l'interface utilisateur jusqu'à l'architecture backend et la
              mise en ligne.
            </motion.p>

            {/* Boutons d'action en bas du bloc */}
            <motion.div
              variants={fadeUp(0.34)}
              className="hero-actions flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 pt-1 sm:pt-2"
            >
              <Link
                to="/projets"
                className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] bg-accent-solid text-white hover:bg-accent-solid-hover shadow-lg shadow-accent/20 cursor-pointer"
              >
                <span>Explorer mes projets</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/a-propos"
                className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] border border-text-1/20 bg-surface text-text-1 shadow-sm hover:border-accent/60 hover:text-accent cursor-pointer"
              >
                <UserCheck size={18} className="text-accent" />
                <span>Me découvrir</span>
              </Link>

              <a
                href="/cv-adonis-oussou.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 border border-text-1/20 bg-elevated text-text-1 shadow-sm hover:text-accent hover:border-accent/60"
              >
                <Download size={17} className="text-accent" />
                <span>CV (PDF)</span>
              </a>
            </motion.div>

            {/* Liens sociaux sobres alignés en bas */}
            <motion.div
              variants={fadeUp(0.4)}
              className="flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 pt-1"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/AdonisCr",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/adonis-oussou/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:adonisoussou737@gmail.com",
                  label: "Email",
                },
                {
                  icon: MessageCircle,
                  href: "https://wa.me/message/TVRHFAIZF45VG1",
                  label: "WhatsApp",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/50 bg-surface/50 transition-all duration-200 hover:border-accent/50 text-text-2 hover:text-accent"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

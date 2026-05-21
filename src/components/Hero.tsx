import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown, Download, Github, Linkedin, Mail,
  MessageCircle,
} from "lucide-react";
import BackgroundBlobs from "./BackgroundBlobs";
import profileImage from "../img/profile.png";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] } },
});

const TITLES = ["Développeur Web & Mobile", "Full Stack Developer", "UI/UX Enthusiast"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTitleIndex((p) => (p + 1) % TITLES.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, isDeleting ? 40 : 80);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden bg-base"
    >
      <BackgroundBlobs />

      <motion.div
        style={{ y: contentY }}
        className="w-full max-w-[90%] lg:max-w-7xl mx-auto h-auto relative z-10"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <motion.div
            variants={fadeUp()}
            className="flex justify-center lg:justify-start order-1"
          >
            <div className="relative w-full max-w-[450px] lg:max-w-[580px] group overflow-hidden rounded-2xl">
              <div className="absolute -inset-16 bg-accent/15 blur-3xl rounded-full" />
              <div className="absolute inset-0 transition-all duration-700 bg-gradient-to-br from-accent/10 via-blue-500/10 to-accent/10 group-hover:from-accent/20 group-hover:via-blue-500/20 group-hover:to-accent/20" />

              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-700" />
                <motion.img
                  src={profileImage}
                  alt="Adonis OUSSOU - Développeur Web & Mobile"
                  width={427}
                  height={585}
                  className="relative w-full h-auto object-contain transition-all duration-700 group-hover:scale-105 profile-hero-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1/6 pointer-events-none z-30 bg-gradient-to-t from-base via-base/95 via-base/80 via-base/50 via-base/20 to-transparent" />

              <motion.div
                className="absolute top-4 right-4 text-2xl font-bold opacity-40 z-40"
                initial={{ opacity: 0, rotate: -20 }}
                animate={{ opacity: 0.4, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <span className="text-accent animate-float">&lt;/&gt;</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 left-4 text-xl font-bold opacity-40 z-40"
                initial={{ opacity: 0, rotate: 20 }}
                animate={{ opacity: 0.4, rotate: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <span className="text-accent-lt" style={{ animationDelay: "0.5s" }}>
                  <span className="animate-float">{"{}"}</span>
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.2)}
            className="text-center lg:text-left order-2 space-y-5"
          >
            <motion.p
              variants={fadeUp(0.1)}
              className="text-sm lg:text-base font-semibold tracking-widest uppercase text-accent/60"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={fadeUp(0.2)}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-text-1 leading-tight"
            >
              Adonis <span className="text-accent">OUSSOU</span>
            </motion.h1>

            <motion.div variants={fadeUp(0.3)} className="h-[44px] sm:h-[52px] lg:h-[60px] flex items-center justify-center lg:justify-start">
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-2">
                And I'm a{" "}
                <span className="text-accent font-bold">
                  {text}
                  <span
                    className={`inline-block w-[3px] h-5 sm:h-6 lg:h-7 ml-0.5 align-middle ${
                      showCursor ? "bg-accent opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp(0.4)}
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 text-text-3"
            >
              Je conçois et développe des applications web et mobiles
              performantes, de la réflexion technique jusqu'à la mise en production.
            </motion.p>

            <motion.div variants={fadeUp(0.5)} className="flex justify-center lg:justify-start space-x-5 pt-1">
              {[
                { icon: Github, href: "https://github.com/AdonisCr", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/adonis-oussou/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:adonisoussou737@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/message/TVRHFAIZF45VG1", label: "WhatsApp" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-text-2 hover:text-accent hover:bg-accent/10"
                  title={social.label}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>

            <motion.div variants={fadeUp(0.7)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2">
              <button
                onClick={scrollToSkills}
                className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 bg-accent text-text-1 hover:bg-accent-lt shadow-lg hover:shadow-accent/50 cursor-pointer"
              >
                <span>Découvrir mon profil</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown size={22} />
                </motion.span>
              </button>

              <a
                href="/cv_adonis_oussou.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 border-2 border-accent text-accent bg-accent/5 hover:bg-accent/15 shadow-lg hover:shadow-accent/20"
              >
                <Download size={22} />
                <span>Télécharger CV</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

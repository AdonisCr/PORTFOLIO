import { motion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

/** Pages plein écran : la barre de progression n'a pas de sens. */
const FULLSCREEN_ROUTES = ["/", "/contact"];

const ScrollProgressBar = () => {
  const { pathname } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (FULLSCREEN_ROUTES.includes(pathname)) return null;

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-blue-400 origin-left z-[9999]"
    />
  );
};

export default ScrollProgressBar;

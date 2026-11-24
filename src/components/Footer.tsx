import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/** Pages qui tiennent dans un seul écran : pas de signature flottante. */
const FULLSCREEN_ROUTES = ["/", "/contact"];

/**
 * Monogramme discret ancré en bas à droite de l'écran.
 * Il remplace l'ancien pied de page (paragraphe « Fait avec… »,
 * copyright et bouton « retour en haut »).
 * Il n'apparaît que sur les pages qui défilent, jamais sur l'accueil
 * ni sur le contact (pages plein écran).
 */
const Footer = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  const isFullscreenPage = FULLSCREEN_ROUTES.includes(pathname);

  useEffect(() => {
    if (isFullscreenPage) {
      setVisible(false);
      return;
    }

    const handleScroll = () => setVisible(window.scrollY > 160);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFullscreenPage, pathname]);

  if (isFullscreenPage) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden="true"
          className="fixed bottom-6 right-5 sm:right-7 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-none select-none"
        >
          <span className="w-px h-9 bg-gradient-to-t from-transparent via-border to-accent/60" />
          <span className="w-11 h-11 rounded-full border border-border/70 bg-surface/80 backdrop-blur-md shadow-sm flex items-center justify-center text-[11px] font-bold tracking-tight text-accent">
            AO
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-text-3">
            {new Date().getFullYear()}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Footer;

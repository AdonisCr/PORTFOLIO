import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-6 px-4 border-t bg-base border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full transition-all duration-300 hover:scale-110 text-text-3 hover:text-accent cursor-pointer"
          aria-label="Retour en haut de page"
        >
          <ArrowUp size={20} />
        </button>

        <p className="text-sm text-text-3 flex items-center gap-1">
          Fait avec <Heart size={14} className="text-red-500" aria-hidden="true" /> par{" "}
          <span className="text-text-1 font-medium">Adonis OUSSOU</span>
        </p>

        <p className="text-xs text-text-3">
          &copy; {new Date().getFullYear()} &mdash; Tous droits r&eacute;serv&eacute;s
        </p>
      </div>
    </footer>
  );
};

export default Footer;

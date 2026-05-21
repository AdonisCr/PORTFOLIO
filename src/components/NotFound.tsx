import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import SEO from "./SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center px-4 relative overflow-hidden">
      <SEO title="Page non trouvée" description="La page que vous cherchez n'existe pas." path="*" />
      <BackgroundBlobs />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
        role="alert"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[180px] sm:text-[220px] lg:text-[280px] font-bold text-text-1/5 leading-none select-none"
          aria-hidden="true"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="-mt-16 sm:-mt-20 lg:-mt-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-1 mb-4">
            Page <span className="text-accent">non trouvée</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-2 max-w-md mx-auto mb-8">
            Oups ! La page que vous recherchez semble avoir disparu dans l'erreur 404.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-accent text-text-1 font-semibold text-lg hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
              aria-label="Retour à l'accueil"
            >
              <Home size={22} aria-hidden="true" />
              <span>Retour à l'accueil</span>
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-accent text-accent font-semibold text-lg hover:bg-accent/10 transition-all duration-300"
              aria-label="Revenir à la page précédente"
            >
              <ArrowLeft size={22} aria-hidden="true" />
              <span>Page précédente</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-text-3"
        >
          <Search size={18} aria-hidden="true" />
          <span className="text-sm">Contactez-moi pour toute question</span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-3 text-sm">
        &copy; {new Date().getFullYear()} Adonis OUSSOU. Tous droits r&eacute;serv&eacute;s.
      </div>
    </div>
  );
};

export default NotFound;
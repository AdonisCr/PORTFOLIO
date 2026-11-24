import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Accueil", to: "/" },
  { name: "Compétences", to: "/competences" },
  { name: "Expériences", to: "/experiences" },
  { name: "Projets", to: "/projets" },
  { name: "Contact", to: "/contact" },
];

/**
 * Navigation : pilule flottante en haut sur ordinateur (>= 768 px).
 * Sur mobile, la navigation est assurée par <MobileIndexNav /> (bouton index
 * en bas à droite) ; il ne reste ici que le nom et le bouton de thème.
 */
const Navbar = () => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeLabel =
    theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre";

  return (
    <>
      {/* Barre mobile : nom + bouton de thème */}
      <div className="fixed left-4 right-4 top-4 z-40 flex items-center justify-between md:hidden">
        <Link
          to="/"
          className="text-base font-extrabold tracking-tight text-text-1"
          aria-label="Adonis OUSSOU — Accueil"
        >
          Adonis<span className="text-accent">.</span>
        </Link>

        <button
          onClick={toggleTheme}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface/90 text-text-2 shadow-sm backdrop-blur-md transition-colors hover:border-accent/50 hover:text-accent cursor-pointer"
          aria-label={themeLabel}
          title={themeLabel}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Navigation bureau */}
      <nav
        className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 transform rounded-full border border-border/70 bg-surface/90 px-5 py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 md:block md:px-6"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-5 lg:space-x-7 lg:px-2 lg:py-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-accent-light bg-accent/15 font-semibold"
                      : "text-text-2 hover:text-accent hover:bg-accent/5"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="h-5 w-px bg-border/80" aria-hidden="true" />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/70 bg-elevated/60 text-text-2 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-pointer"
              aria-label={themeLabel}
              title={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

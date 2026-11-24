import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Navigation mobile « bouton index ».
 *
 * Un seul bouton rond en bas à droite : il affiche le numéro de la section
 * courante et un anneau de progression (1/5 → 5/5). Un appui ouvre une pile
 * de pilules numérotées. Un appui sur une pilule amène à la page et referme.
 *
 * Le site est découpé en pages distinctes (/projets, /contact, …) : la section
 * active vient donc de la route. Un « scroll spy » est conservé pour le jour
 * où plusieurs sections cohabiteront sur une même page.
 */

type Section = {
  number: string;
  label: string;
  to: string;
  /** id de la section, quand elle existe sur la page */
  id: string;
};

const SECTIONS: Section[] = [
  { number: "01", label: "Accueil", to: "/", id: "hero" },
  { number: "02", label: "Compétences", to: "/competences", id: "skills" },
  { number: "03", label: "Expériences", to: "/experiences", id: "experience" },
  { number: "04", label: "Projets", to: "/projets", id: "projects" },
  { number: "05", label: "Me contacter", to: "/contact", id: "contact" },
];

/** Circonférence du cercle r = 29 (2πr ≈ 182,2) */
const CIRCUMFERENCE = 2 * Math.PI * 29;

const indexForPath = (pathname: string) =>
  SECTIONS.findIndex((section) =>
    section.to === "/" ? pathname === "/" : pathname.startsWith(section.to)
  );

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const MobileIndexNav = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => indexForPath(pathname));

  const buttonRef = useRef<HTMLButtonElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);

  /* La route fait foi pour la section courante */
  useEffect(() => {
    setActiveIndex(indexForPath(pathname));
  }, [pathname]);

  /* Fermeture à chaque changement de page */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Fermeture au clavier + retour du focus sur le bouton */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  /* Le focus part sur la pilule de la section courante */
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => activeItemRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  /* Repasser en largeur bureau referme la pile */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Scroll spy : actif seulement si plusieurs sections vivent sur la page */
  useEffect(() => {
    const targets = SECTIONS.map((section, index) => ({
      el: document.getElementById(section.id),
      index,
    })).filter((target): target is { el: HTMLElement; index: number } =>
      Boolean(target.el)
    );

    if (targets.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const found = targets.find((target) => target.el === entry.target);
          if (found) setActiveIndex(found.index);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target.el));
    return () => observer.disconnect();
  }, [pathname]);

  const current = activeIndex >= 0 ? SECTIONS[activeIndex] : null;
  const progress = current ? (activeIndex + 1) / SECTIONS.length : 0;
  const dash = Math.round(progress * CIRCUMFERENCE * 10) / 10;

  const ariaLabel = open
    ? "Fermer la navigation"
    : current
      ? `Ouvrir la navigation. Section ${activeIndex + 1} sur ${SECTIONS.length} : ${current.label}`
      : "Ouvrir la navigation";

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  const handleItemClick = (section: Section, index: number) => {
    const sameRoute = pathname === section.to && indexForPath(pathname) === index;
    setOpen(false);

    if (!sameRoute) return; // le lien du routeur fait la navigation

    const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
    const target = document.getElementById(section.id);

    if (target) {
      target.scrollIntoView({ behavior, block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  };

  return (
    <div className="md:hidden">
      {/* Voile : un appui referme */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-[54] bg-veil/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 duration-200" : "pointer-events-none opacity-0 duration-[120ms]"
        }`}
      />

      {/* Pile de navigation */}
      <nav
        id="mobile-index-nav"
        aria-label="Navigation principale"
        aria-hidden={!open}
        style={{ bottom: "calc(104px + env(safe-area-inset-bottom))" }}
        className={`fixed right-5 z-[55] flex flex-col-reverse items-end gap-2.5 transition-opacity ${
          open ? "visible opacity-100 duration-200" : "pointer-events-none opacity-0 duration-[120ms]"
        }`}
      >
        {SECTIONS.map((section, index) => {
          const isActive = index === activeIndex;
          const isContact = section.to === "/contact";

          const base =
            "group flex h-[52px] items-center gap-3 rounded-full border pl-5 pr-2 transition-opacity duration-[120ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base";

          const look = isContact
            ? "border-transparent bg-accent-solid text-white font-bold hover:bg-accent-solid-hover"
            : isActive
              ? "border-2 border-accent bg-elevated text-text-1 font-bold"
              : "border-border/80 bg-surface text-text-1 font-semibold hover:border-accent/50";

          /* Pastilles : couleurs choisies pour garder un contraste >= 4,5:1
             dans les deux thèmes (le bleu clair du thème sombre demande
             un texte sombre, le bleu du thème clair demande du blanc). */
          const badgeLook = isContact
            ? "bg-accent-solid-hover text-white dark:bg-accent-light dark:text-veil font-bold"
            : isActive
              ? "bg-accent-solid text-white dark:bg-accent-light dark:text-veil font-bold"
              : "bg-elevated text-text-3";

          return (
            <Link
              key={section.to}
              ref={isActive ? activeItemRef : undefined}
              to={section.to}
              onClick={() => handleItemClick(section, index)}
              aria-current={isActive ? "location" : undefined}
              tabIndex={open ? 0 : -1}
              style={{ animationDelay: open ? `${index * 40}ms` : undefined }}
              className={`${base} ${look} ${
                open ? "index-pill-open opacity-100" : "translate-y-0 opacity-0"
              } ${isContact && isActive ? "ring-2 ring-accent" : ""}`}
            >
              <span className="whitespace-nowrap text-base">{section.label}</span>
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 items-center justify-center rounded-full font-mono text-[13px] ${badgeLook}`}
              >
                {section.number}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bouton index */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-index-nav"
        aria-label={ariaLabel}
        style={{ bottom: "calc(24px + env(safe-area-inset-bottom))" }}
        className="fixed right-5 z-[56] flex h-16 w-16 items-center justify-center rounded-full border border-border/80 bg-surface shadow-lg transition-colors hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
      >
        {/* Anneau de progression */}
        <svg
          viewBox="0 0 64 64"
          className="pointer-events-none absolute inset-0 h-16 w-16"
          aria-hidden="true"
        >
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="var(--color-border-lg)"
            strokeWidth="3"
          />
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${CIRCUMFERENCE}`}
            transform="rotate(-90 32 32)"
            style={{ transition: "stroke-dasharray 300ms ease" }}
            className="motion-reduce:!transition-none"
          />
        </svg>

        {/* Numéro de section ↔ croix de fermeture */}
        <span className="relative flex h-full w-full items-center justify-center">
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-150 ${
              open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
            } motion-reduce:rotate-0 motion-reduce:transition-opacity`}
          >
            <span className="font-mono text-base font-bold tracking-tight text-text-1">
              {current ? current.number : "AO"}
            </span>
          </span>

          <span
            className={`absolute inset-0 flex items-center justify-center text-text-1 transition-all duration-150 ${
              open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
            } motion-reduce:rotate-0 motion-reduce:transition-opacity`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
};

export default MobileIndexNav;

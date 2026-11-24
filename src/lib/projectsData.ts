export type ProjectCategory = "all" | "production" | "saas" | "mobile";

export interface ContributionRole {
  area:
    | "Conception"
    | "Développement frontend"
    | "Développement backend"
    | "Intégration API"
    | "Gestion des données"
    | "Déploiement";
  detail: string;
}

export interface ProjectCaseStudy {
  slug: string;
  index: string;
  title: string;
  shortDescription: string;
  subtitle: string;
  contextType:
    | "Projet en production (ONG)"
    | "Projet Client / Institutionnel"
    | "Application SaaS"
    | "Architecture FinTech"
    | "Hackathon & Innovation"
    | "Projet Personnel Full Stack"
    | "Développement Mobile"
    | "DevOps & Conteneurisation";
  statusLabel: string;
  category: Exclude<ProjectCategory, "all">;
  featured: boolean;
  problem: string;
  solution: string;
  contributions: ContributionRole[];
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  visualType: "dual-safeher" | "desktop-browser" | "architecture-preview";
  desktopImage?: string;
  mobileImage?: string;
  browserUrl?: string;
  architectureNotes?: {
    label: string;
    components: { name: string; stack: string; desc: string }[];
  };
}

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "safeher",
    index: "01",
    title: "SafeHer",
    shortDescription:
      "Plateforme PWA Offline-First d'alerte SOS géolocalisée, cartographie hors-ligne et centre de supervision VBG en temps réel.",
    subtitle:
      "Plateforme PWA Offline-First d'alerte d'urgence et d'accompagnement (Département du Zou, Bénin)",
    contextType: "Projet en production (ONG)",
    statusLabel: "En production — safeher.newworldong.org",
    category: "production",
    featured: true,
    problem:
      "Les victimes de Violences Basées sur le Genre (VBG) font face à des zones à faible couverture internet, à des risques de surveillance sur leur téléphone et à la difficulté de joindre rapidement les structures d'aide locales.",
    solution:
      "Conception et mise en production d'une Progressive Web App (PWA) Offline-First permettant de déclencher un SOS géolocalisé en 2 secondes, de consulter une carte hors-ligne des structures d'assistance et de coordonner la prise en charge via un centre de supervision opérateur/admin en temps réel.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Parcours d'urgence sans friction, mode discret camouflé, code de détresse et zéro trace navigateur.",
      },
      {
        area: "Développement frontend",
        detail:
          "Interface mobile/desktop Next.js 16, bouton SOS à appui long, Service Worker v5, carte interactive Leaflet/OpenStreetMap hors-ligne.",
      },
      {
        area: "Développement backend",
        detail:
          "API routes sécurisées (CSP, HSTS, rate-limiting), workflow de traitement des signalements et tableau de bord de pilotage.",
      },
      {
        area: "Intégration API",
        detail:
          "Canal d'alerte SMS multi-opérateurs (Africa's Talking MTN/Moov Bénin) et notifications emails actionnables.",
      },
      {
        area: "Gestion des données",
        detail:
          "Chiffrement local AES-256-GCM (IndexedDB) pour le journal intime et persistance PostgreSQL / Prisma ORM.",
      },
      {
        area: "Déploiement",
        detail:
          "Packaging, configuration serveur Node.js/Prisma et mise en ligne sur safeher.newworldong.org.",
      },
    ],
    features: [
      "Bouton SOS d'urgence avec partage GPS et fallback SMS",
      "Cartographie hors-ligne des 12+ structures d'aide du Zou",
      "Journal chiffré AES-256-GCM en local + effacement d'urgence",
      "Dashboard temps réel pour opérateurs et administrateurs",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS 4",
      "Prisma",
      "PostgreSQL",
      "PWA / IndexedDB",
      "AES-256-GCM",
      "Leaflet / OSM",
    ],
    demoUrl: "https://safeher.newworldong.org/alerte",
    githubUrl: "https://github.com/AdonisCr/safeher",
    visualType: "dual-safeher",
    desktopImage: "/projects/safeher-dashboard.jpg",
    mobileImage: "/projects/safeher-sos-mobile.jpg",
    browserUrl: "safeher.newworldong.org/alerte",
  },
  {
    slug: "alliance-actions-afrique",
    index: "02",
    title: "Alliance Actions Afrique (3A)",
    shortDescription:
      "Portail institutionnel Headless CMS (React 19 + WPGraphQL) avec pré-rendu SSR statique et optimisation SEO complète.",
    subtitle:
      "Refonte Headless CMS & Prerendering du portail institutionnel de l'ONG",
    contextType: "Projet Client / Institutionnel",
    statusLabel: "En production — allianceactionsafrique.com",
    category: "production",
    featured: true,
    problem:
      "L'association avait besoin d'un portail moderne célébrant ses 10 ans d'actions au Bénin, offrant à la fois la rapidité d'une Single Page Application moderne, un référencement SEO irréprochable et une gestion autonome des articles via WordPress.",
    solution:
      "Développement d'une architecture Headless découplée : frontend React 19 / TypeScript connecté en GraphQL à un back-office WordPress, complété par un pipeline de pré-rendu statique (SSR / Prerender) et de génération automatique de sitemap.",
    contributions: [
      {
        area: "Développement frontend",
        detail:
          "Intégration haute fidélité des maquettes Figma, pages programmes (Parrainage, Regards Croisés), galeries et responsive mobile.",
      },
      {
        area: "Intégration API",
        detail:
          "Connexion Apollo Client / WPGraphQL avec nettoyage strict du HTML (DOMPurify) et gestion du cache.",
      },
      {
        area: "Déploiement",
        detail:
          "Scripts de build SSR, prerendering multi-routes, optimisation d'images (Sharp WebP) et déploiement SiteGround / Vercel.",
      },
    ],
    features: [
      "Architecture Headless React 19 + WPGraphQL",
      "Prerendering SSR automatisé pour le SEO et les partages sociaux",
      "Optimisation des médias WebP et chargement instantané",
      "Présentation des projets phares et +25 partenaires institutionnels",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite 8",
      "Tailwind CSS 4",
      "Apollo GraphQL",
      "WordPress Headless",
      "SSR Prerender",
    ],
    demoUrl: "https://allianceactionsafrique.com",
    githubUrl: "https://github.com/AdonisCr/3Aweb-site",
    visualType: "desktop-browser",
    desktopImage: "/projects/3a-desktop.jpg",
    browserUrl: "allianceactionsafrique.com",
  },
  {
    slug: "joie-enseignante",
    index: "03",
    title: "Joie Enseignante",
    shortDescription:
      "Portail académique et bibliothèque de publications scientifiques PDF (gratuites & payantes via Kkiapay) avec back-office complet.",
    subtitle:
      "Portail académique, publications scientifiques et diffusion de cours universitaires",
    contextType: "Projet Client / Institutionnel",
    statusLabel: "En production — joie-enseignante.com",
    category: "production",
    featured: true,
    problem:
      "Disposer d'une plateforme académique indépendante permettant à un enseignant-chercheur (Université de Cotonou) de publier ses recherches scientifiques, de partager ses supports de cours PDF (gratuits ou payants) et d'interagir avec ses étudiants.",
    solution:
      "Conception, développement sur-mesure et déploiement d'un portail éditorial bicolore (clair/sombre) doté d'un moteur de recherche plein texte, d'une gestion documentaire avec paiement mobile intégré et d'un back-office d'administration complet.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Cahier des charges, identité visuelle académique (bleu nuit & doré), mode clair/sombre et conformité WCAG / RGPD.",
      },
      {
        area: "Développement frontend",
        detail:
          "Interface responsive mobile-first, filtres par catégories, lecteur d'articles, interactions AJAX (likes, commentaires) et bandeau cookies.",
      },
      {
        area: "Développement backend",
        detail:
          "Architecture PHP 8.3 orientée sécurité (PDO, anti-CSRF, cookies HttpOnly/SameSite, validation MIME des uploads) et back-office complet.",
      },
      {
        area: "Intégration API",
        detail:
          "Intégration de Kkiapay pour le téléchargement automatisé des publications payantes et notifications SMTP via PHPMailer.",
      },
      {
        area: "Gestion des données",
        detail:
          "Modélisation relationnelle MySQL 8 (9 tables : articles, fichiers, lectures, téléchargements, journal d'audit).",
      },
      {
        area: "Déploiement",
        detail:
          "Mise en production sur hébergement Pro OVHcloud (Apache / .htaccess sécurisé / SSL) sur joie-enseignante.com.",
      },
    ],
    features: [
      "Bibliothèque de publications scientifiques PDF (gratuites & payantes)",
      "Back-office admin complet : statistiques, articles, modération et logs",
      "Recherche plein texte, filtrage dynamique et mode Clair / Sombre",
      "Sécurité renforcée : requêtes préparées PDO, protection CSRF/XSS et audit",
    ],
    technologies: [
      "PHP 8.3",
      "MySQL 8",
      "JavaScript / AJAX",
      "HTML5 / CSS3",
      "Kkiapay API",
      "PHPMailer",
      "OVHcloud",
    ],
    demoUrl: "https://joie-enseignante.com/",
    visualType: "desktop-browser",
    desktopImage: "/projects/joie-enseignante-desktop.jpg",
    browserUrl: "joie-enseignante.com",
  },
  {
    slug: "timepro",
    index: "04",
    title: "TimePro",
    shortDescription:
      "Application SaaS de gestion de temps, tableaux Kanban, diagramme de Gantt, suivi budgétaire et productivité d'équipe.",
    subtitle:
      "Application SaaS de gestion du temps, de projets et de productivité d'équipe",
    contextType: "Application SaaS",
    statusLabel: "Démo live déployée — Backend Laravel 12 actif",
    category: "saas",
    featured: true,
    problem:
      "Les équipes dispersent souvent le suivi de leurs tâches, le pointage du temps passé, la gestion de la charge de travail et le suivi budgétaire sur plusieurs outils déconnectés.",
    solution:
      "Création d'une plateforme SaaS unifiée combinant tableaux Kanban, diagramme de Gantt, suivi budgétaire, charge de travail (workload), automatisations et analytique de productivité.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Architecture modulaire séparant la landing marketing, l'espace collaborateur et les vues de pilotage projet.",
      },
      {
        area: "Développement frontend",
        detail:
          "SPA React 18 + TypeScript, tableaux Kanban, Gantt, calendrier, statistiques, dark mode et hooks métiers personnalisés.",
      },
      {
        area: "Développement backend",
        detail:
          "API REST Laravel 12 (~30 endpoints, 10 modèles Eloquent, 17 migrations), authentification Sanctum et middlewares de sécurité.",
      },
      {
        area: "Déploiement",
        detail:
          "Mise en ligne de l'interface frontend sur Vercel et structuration des tests backend.",
      },
    ],
    features: [
      "Vues Kanban, Liste, Calendrier et Diagramme de Gantt",
      "Suivi du temps (TimeEntries), sous-tâches et budget projet",
      "Gestion d'équipe, invitations, messagerie inbox et notifications",
      "Sécurité Sanctum (expiration 24h, rate-limiting, en-têtes CSP)",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Laravel 12",
      "PHP 8.2",
      "MySQL",
      "Sanctum API",
      "Vercel",
    ],
    demoUrl: "https://time-pro-ten.vercel.app",
    githubUrl: "https://github.com/AdonisCr/TimePro",
    visualType: "desktop-browser",
    desktopImage: "/projects/timepro-desktop.jpg",
    browserUrl: "time-pro-ten.vercel.app",
  },
  {
    slug: "link-o",
    index: "05",
    title: "Link-o",
    shortDescription:
      "Plateforme full stack de raccourcissement d'URLs, liens protégés/expirables et tableau de bord analytique en temps réel.",
    subtitle:
      "Plateforme de raccourcissement d'URLs, liens protégés et suivi analytique",
    contextType: "Application SaaS",
    statusLabel: "En ligne — link-o-five.vercel.app",
    category: "saas",
    featured: true,
    problem:
      "Le partage d'URLs longues nuit à la lisibilité des campagnes numériques et ne permet pas de contrôler l'accès (expiration, mot de passe) ni de mesurer l'audience.",
    solution:
      "Développement d'une application web full stack permettant de raccourcir des liens instantanément, de les organiser par tags et de visualiser les statistiques de clics depuis un tableau de bord dédié.",
    contributions: [
      {
        area: "Développement frontend",
        detail:
          "Interface utilisateur réactive en React.js et Tailwind CSS (landing page + dashboard analytique).",
      },
      {
        area: "Développement backend",
        detail:
          "API Node.js / Express.js gérant la génération de slugs uniques, les redirections rapides et l'authentification JWT.",
      },
      {
        area: "Gestion des données",
        detail:
          "Stockage NoSQL sous MongoDB pour les liens, utilisateurs et compteurs d'événements.",
      },
      {
        area: "Déploiement",
        detail: "Déploiement continu sur Vercel.",
      },
    ],
    features: [
      "Raccourcissement d'URL instantané et redirection sans publicité",
      "Tableau de bord de suivi des clics et performances",
      "Organisation par catégories, expiration et protection par mot de passe",
      "Authentification sécurisée par JSON Web Tokens (JWT)",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
    ],
    demoUrl: "https://link-o-five.vercel.app",
    githubUrl: "https://github.com/AdonisCr/Link-o",
    visualType: "desktop-browser",
    desktopImage: "/projects/linko-desktop.jpg",
    browserUrl: "link-o-five.vercel.app",
  },
  {
    slug: "transpay",
    index: "06",
    title: "TransPay (PayTrans Bénin)",
    shortDescription:
      "Architecture FinTech de transfert inter-réseaux Mobile Money (MTN, Moov, Celtiis) : Client PWA, Moteur NestJS, Gateway Kotlin & Admin Vue.js.",
    subtitle:
      "Architecture FinTech de transfert inter-réseaux Mobile Money (MTN, Moov, Celtiis)",
    contextType: "Architecture FinTech",
    statusLabel: "Socle V1 complété (Phases 1 à 5 + 45 tests d'intégration)",
    category: "mobile",
    featured: true,
    problem:
      "Effectuer des transferts d'argent instantanés entre les trois opérateurs Mobile Money au Bénin avec une fiabilité comptable absolue, avant même l'intégration d'un agrégateur tiers.",
    solution:
      "Architecture monorepo à 4 composants autonomes pilotant des cartes SIM physiques (lecture SMS et automatisation USSD) orchestrées par un moteur transactionnel NestJS doté d'un grand-livre comptable (ledger) et d'une machine à états stricte.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Machine à états déterministe (CRÉÉE → PUSH ENVOYÉ → DÉBITÉE → PAYOUT INITIÉ → TERMINÉE/REMBOURSÉE) et règles de sécurité.",
      },
      {
        area: "Développement frontend",
        detail:
          "Client PWA en Next.js 15 / TypeScript et Back-Office Admin de supervision de trésorerie en Vue.js.",
      },
      {
        area: "Développement backend",
        detail:
          "Backend Core NestJS, guards JWT à 3 scopes (Client, Gateway Android, Admin), ledger comptable et remboursement automatique.",
      },
      {
        area: "Gestion des données",
        detail:
          "PostgreSQL (Neon) + Prisma 7 (@prisma/adapter-pg) et verrouillage d'idempotence sous Redis (Upstash) contre tout double débit.",
      },
    ],
    features: [
      "Monorepo 4-en-1 : Client PWA, Backend NestJS, Gateway Kotlin, Admin Vue.js",
      "Verrouillage d'idempotence Redis et hachage PIN Argon2id",
      "Validation stricte des Sender ID opérateurs et audit trail immuable",
      "45 tests d'intégration automatisés sous GitHub Actions CI",
    ],
    technologies: [
      "Next.js 15 (PWA)",
      "NestJS",
      "Vue.js",
      "Kotlin (Android)",
      "PostgreSQL (Neon)",
      "Prisma 7",
      "Redis (Upstash)",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/AdonisCr/Transpay",
    visualType: "architecture-preview",
    architectureNotes: {
      label: "Architecture Monorepo à 4 Composants — Capture UI à intégrer",
      components: [
        {
          name: "1. Client PWA",
          stack: "Next.js 15 · TypeScript · Tailwind",
          desc: "Parcours de transfert inter-réseaux, suivi temps réel et historique client.",
        },
        {
          name: "2. Backend Core & Ledger",
          stack: "NestJS · PostgreSQL · Redis",
          desc: "Machine à états transactionnelle, idempotence Redis et remboursement auto (30s).",
        },
        {
          name: "3. Gateway Android",
          stack: "Kotlin Natif · SMS / USSD",
          desc: "Écoute des SMS opérateurs whitelistés et exécution des séquences USSD sur SIM.",
        },
        {
          name: "4. Back-Office Trésorerie",
          stack: "Vue.js · Tailwind CSS",
          desc: "Supervision des soldes SIM, réconciliation et journal d'audit immuable.",
        },
      ],
    },
  },
  {
    slug: "aura-privee",
    index: "07",
    title: "Aura Privée",
    shortDescription:
      "Marketplace privée et club exclusif de haute parfumerie sur invitation temporaire avec système de ventes événementielles (drops).",
    subtitle: "Marketplace privée & Club exclusif sur invitation",
    contextType: "Application SaaS",
    statusLabel: "En développement avancé",
    category: "saas",
    featured: false,
    problem:
      "Offrir une expérience d'achat confidentielle et haut de gamme pour la parfumerie de niche, réservée aux membres invités, loin des catalogues e-commerce classiques.",
    solution:
      "Développement d'une application Next.js 16 avec contrôle d'accès par liens d'invitation temporaires, catalogue protégé, gestion de drops limités et back-office complet.",
    contributions: [
      {
        area: "Conception",
        detail: "Design System éditorial luxe (Geist & Playfair Display) et parcours d'invitation.",
      },
      {
        area: "Développement frontend",
        detail: "Catalogue privé, fiche produit détaillée, espace membre (commandes, wishlist) et dashboard admin.",
      },
      {
        area: "Développement backend",
        detail: "Sécurité CSP/HSTS, rate-limiting, validation stricte des entrées et gestion des rôles ADMIN / MEMBRE.",
      },
    ],
    features: [
      "Accès restreint par liens d'invitation temporaires",
      "Gestion des Drops limités et abonnements membres",
      "Back-office complet : utilisateurs, produits, commandes, drops",
      "Durcissement sécurité (CSP, HSTS, anti-XSS, rate-limiting)",
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Drizzle ORM"],
    githubUrl: "https://github.com/AdonisCr/aura-priver",
    visualType: "architecture-preview",
    architectureNotes: {
      label: "Architecture Next.js 16 App Router — Capture UI à intégrer",
      components: [
        {
          name: "1. Portail Club & Accès",
          stack: "Next.js 16 · Tailwind CSS 4",
          desc: "Présentation du club, demande d'accès et validation des invitations.",
        },
        {
          name: "2. Catalogue & Drops",
          stack: "App Router · TypeScript Strict",
          desc: "Catalogue privé, fiches fragrances et ventes limitées dans le temps.",
        },
        {
          name: "3. Espace Membre",
          stack: "Dashboard Client Protégé",
          desc: "Suivi des commandes, liste de souhaits (wishlist) et profil.",
        },
        {
          name: "4. Back-Office Admin",
          stack: "CRUD Complet & Sécurité",
          desc: "Pilotage des stocks, invitations, abonnements et utilisateurs.",
        },
      ],
    },
  },
  {
    slug: "ako-towe",
    index: "08",
    title: "Ako Towe",
    shortDescription:
      "Plateforme numérique interactive de valorisation du patrimoine culturel béninois conçue lors du hackathon BloChallenge 2025.",
    subtitle: "Valorisation numérique du patrimoine culturel béninois (Hackathon BLOLAB)",
    contextType: "Hackathon & Innovation",
    statusLabel: "Prototype fonctionnel présenté au jury",
    category: "production",
    featured: false,
    problem:
      "Rendre l'histoire, les traditions et le patrimoine culturel béninois accessibles et engageants pour la jeune génération à l'ère du numérique.",
    solution:
      "Conception et prototypage intensif en équipe pluridisciplinaire d'une plateforme web interactive mettant en lumière les récits, objets et figures historiques du Bénin.",
    contributions: [
      {
        area: "Conception",
        detail: "Idéation suite à l'immersion à l'exposition Patrimoine 2.0 et structuration de l'expérience utilisateur.",
      },
      {
        area: "Développement frontend",
        detail: "Développement de l'interface web interactive avec React.js, Vite et Tailwind CSS.",
      },
    ],
    features: [
      "Exploration interactive des éléments du patrimoine culturel",
      "Interface responsive et parcours narratif visuel",
      "Prototype livré et soutenu devant le jury BloChallenge 2025",
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/AdonisCr/Ako",
    visualType: "architecture-preview",
    architectureNotes: {
      label: "Prototype Hackathon BloChallenge 2025 — BLOLAB / UNIPOD",
      components: [
        {
          name: "Immersion & Idéation",
          stack: "Exposition Patrimoine 2.0",
          desc: "Analyse des enjeux de transmission culturelle par le numérique.",
        },
        {
          name: "Interface Interactive",
          stack: "React.js · Tailwind CSS",
          desc: "Mise en valeur visuelle et narrative des contenus patrimoniaux.",
        },
      ],
    },
  },
  {
    slug: "app-gstock-vue",
    index: "09",
    title: "APP-GSTOCK-vue & API REST",
    shortDescription:
      "Écosystème complet de gestion de stocks : interface réactive Vue.js connectée à une API RESTful dédiée aux opérations d'inventaire.",
    subtitle: "Application Web de gestion des stocks & API RESTful CRUD",
    contextType: "Projet Personnel Full Stack",
    statusLabel: "Code source disponible sur GitHub",
    category: "saas",
    featured: false,
    problem:
      "Numériser le suivi des entrées, sorties et niveaux d'alerte d'un inventaire commercial via une interface claire et une API découplée.",
    solution:
      "Développement d'un client web réactif sous Vue.js couplé à une API RESTful assurant la persistance et la validation des mouvements de stock.",
    contributions: [
      {
        area: "Développement frontend",
        detail: "Création des vues de gestion de produits, mouvements et tableaux récapitulatifs en Vue.js.",
      },
      {
        area: "Développement backend",
        detail: "Conception des endpoints RESTful CRUD (GESTION-de-STOCK-API).",
      },
    ],
    features: [
      "Gestion complète du catalogue produits (CRUD)",
      "Suivi des entrées et sorties de stock",
      "Architecture découplée Frontend Vue.js + API REST",
    ],
    technologies: ["Vue.js", "JavaScript", "API REST", "HTML5 / CSS3"],
    githubUrl: "https://github.com/AdonisCr/APP-GSTOCK-vue",
    visualType: "architecture-preview",
    architectureNotes: {
      label: "Architecture Découplée Vue.js + REST API",
      components: [
        {
          name: "Client Web (APP-GSTOCK-vue)",
          stack: "Vue.js · JavaScript",
          desc: "Tableaux d'inventaire, formulaires de saisie et filtres rapides.",
        },
        {
          name: "Service Backend (GESTION-de-STOCK-API)",
          stack: "API REST · CRUD",
          desc: "Endpoints normalisés pour la gestion des articles et des flux.",
        },
      ],
    },
  },
  {
    slug: "adonis-flutter",
    index: "10",
    title: "Adonis_flutter",
    shortDescription:
      "Application mobile cross-platform développée avec Flutter et Dart mettant en œuvre une architecture de widgets réactifs.",
    subtitle: "Application mobile multiplateforme sous Flutter & Dart",
    contextType: "Développement Mobile",
    statusLabel: "Code source disponible sur GitHub",
    category: "mobile",
    featured: false,
    problem:
      "Concevoir une base d'application mobile native fluide partageant une seule base de code pour Android, iOS et Desktop.",
    solution:
      "Développement sous Flutter / Dart avec structuration propre des écrans, composants réutilisables et gestion de la navigation.",
    contributions: [
      {
        area: "Développement frontend",
        detail: "Intégration des écrans mobiles, animations fluides et adaptation aux différentes tailles d'écran sous Flutter.",
      },
    ],
    features: [
      "Codebase unique multiplateforme (Flutter / Dart)",
      "Composants UI personnalisés et navigation fluide",
      "Respect des bonnes pratiques d'architecture mobile",
    ],
    technologies: ["Flutter", "Dart", "Mobile UI"],
    githubUrl: "https://github.com/AdonisCr/Adonis_flutter",
    visualType: "architecture-preview",
    architectureNotes: {
      label: "Architecture Mobile Cross-Platform",
      components: [
        {
          name: "Couche UI & Widgets",
          stack: "Flutter · Material / Custom UI",
          desc: "Interfaces adaptatives et transitions natives à 60fps.",
        },
        {
          name: "Logique Applicative",
          stack: "Dart",
          desc: "Gestion d'état, navigation et séparation des responsabilités.",
        },
      ],
    },
  },
  {
    slug: "casting-net",
    index: "11",
    title: "CASTING.NET",
    shortDescription:
      "Plateforme de castings en ligne : inscription des acteurs, publication d'annonces, paiement sécurisé et espace administrateur.",
    subtitle:
      "Plateforme professionnelle de castings — interface front-end et connexion à l'API",
    contextType: "Projet Client / Institutionnel",
    statusLabel: "En production — casting-net.com",
    category: "production",
    featured: true,
    problem:
      "Les acteurs et les recruteurs du cinéma ont du mal à se trouver : les annonces sont dispersées, les candidatures se font par email et le suivi reste manuel.",
    solution:
      "Une plateforme web responsive et multilingue (FR / EN / ES) avec deux parcours clairs : s'inscrire comme acteur ou publier un casting comme recruteur. L'interface est connectée à une API PHP/Laravel pour les castings, les inscriptions, les paiements FedaPay et le tableau de bord administrateur.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Parcours acteur et recruteur, architecture des pages (Accueil, Acteurs, Castings, Contact, CGU) et interface responsive avec trois langues.",
      },
      {
        area: "Développement frontend",
        detail:
          "Intégration complète de l'interface en Vue 3 / Vite : landing page, pages Acteurs et Castings, formulaires d'inscription et de soumission, états de validation et navigation avec Vue Router / Pinia.",
      },
      {
        area: "Intégration API",
        detail:
          "Connexion au backend via l'API REST de backend.casting-net.com : castings, inscriptions, paiements et statistiques.",
      },
      {
        area: "Développement backend",
        detail:
          "Démarrage de l'API Laravel/PHP (publication et validation des castings, inscriptions, paiements, administration) avant reprise par l'équipe backend.",
      },
      {
        area: "Déploiement",
        detail:
          "Mise en ligne de la plateforme sur casting-net.com, avec HTTPS et en-têtes de sécurité (CSP, HSTS, X-Frame-Options).",
      },
    ],
    features: [
      "Deux profils : acteur en recherche de rôle et recruteur qui publie des castings",
      "Paiement sécurisé FedaPay et confirmation par email",
      "Espace administrateur : validation, archivage et notifications des castings",
      "Interface multilingue Français / Anglais / Espagnol et adaptation mobile",
    ],
    technologies: [
      "Vue 3",
      "Vite",
      "Vue Router / Pinia",
      "vue-i18n",
      "Axios",
      "Tailwind CSS",
      "Laravel 12 / PHP",
      "FedaPay API",
    ],
    demoUrl: "https://casting-net.com/",
    visualType: "desktop-browser",
    desktopImage: "/projects/casting-net-desktop.jpg",
    browserUrl: "casting-net.com",
  },
  {
    slug: "portfolio-adonis",
    index: "12",
    title: "Portfolio Adonis",
    shortDescription:
      "Portfolio personnel multi-pages présentant projets, compétences, expériences et contact, avec thème clair/sombre et navigation mobile dédiée.",
    subtitle:
      "Portfolio personnel — vitrine multi-pages et études de cas détaillées",
    contextType: "Projet Personnel Full Stack",
    statusLabel: "Code source disponible sur GitHub",
    category: "production",
    featured: true,
    problem:
      "Présenter à la fois mon parcours, mes compétences techniques et mes projets réels sans perdre le visiteur dans une longue page unique, tout en gardant un site rapide, lisible sur mobile et facile à mettre à jour.",
    solution:
      "Création d'un site React/TypeScript organisé en pages distinctes, avec un design system à deux thèmes, des études de cas par projet, un formulaire de contact connecté à EmailJS et une navigation adaptée au mobile.",
    contributions: [
      {
        area: "Conception",
        detail:
          "Architecture en routes séparées (Accueil, Compétences, Expériences, Projets, À propos, Contact), hiérarchie visuelle et design system clair/sombre avec tokens CSS.",
      },
      {
        area: "Développement frontend",
        detail:
          "Interfaces React 18 + TypeScript sous Vite, styles Tailwind CSS, animations Framer Motion, défilement fluide Lenis et chargement paresseux des pages (lazy loading).",
      },
      {
        area: "Intégration API",
        detail:
          "Formulaire de contact connecté au service EmailJS via variables d'environnement, avec gestion des états d'envoi et des erreurs.",
      },
      {
        area: "Gestion des données",
        detail:
          "Données des projets centralisées dans un fichier typé, avec filtres par catégorie, fiches détaillées et captures réelles des applications.",
      },
      {
        area: "Déploiement",
        detail:
          "Build Vite, configuration SPA pour hébergement statique (vercel.json) et vérifications ESLint / TypeScript avant mise en ligne.",
      },
    ],
    features: [
      "Pages dédiées avec études de cas complètes pour chaque projet",
      "Thème clair et sombre persisté dans le navigateur",
      "Navigation mobile « bouton index » avec anneau de progression et pile de raccourcis",
      "Animations respectueuses de prefers-reduced-motion, SEO et accessibilité clavier",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Lenis",
      "EmailJS",
      "react-helmet-async",
    ],
    githubUrl: "https://github.com/AdonisCr/PORTFOLIO",
    visualType: "desktop-browser",
    desktopImage: "/projects/portfolio-desktop.jpg",
  },
];

import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ExternalLink, Github, Globe, Smartphone, Code } from 'lucide-react';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'website', name: 'Sites Web', icon: Code }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plateforme de commerce électronique complète avec gestion des stocks, paiements Stripe et analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec notifications en temps réel et intégration Slack.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      category: "web",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracker Pro",
      description: "Application mobile de fitness avec GPS, suivi des activités et coaching personnalisé.",
      image: "https://images.pexels.com/photos/4148816/pexels-photo-4148816.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Redux", "Maps API"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Restaurant Le Gourmet",
      description: "Site web moderne pour restaurant avec menu interactif et système de réservation.",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Delivery App",
      description: "Application de livraison de repas avec géolocalisation et paiements intégrés.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Photographe",
      description: "Site portfolio créatif avec galerie photo et boutique en ligne.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Gatsby", "GraphQL", "Shopify"],
      category: "website",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Éléments décoratifs en arrière-plan - INVERSÉS par rapport à Skills */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Mes Projets</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-400 to-pink-400'
              : 'bg-gradient-to-r from-purple-600 to-pink-600'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Découvrez mes réalisations récentes qui démontrent mes compétences techniques et ma créativité
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : isDarkMode
                      ? 'bg-slate-800/50 text-gray-300 hover:text-purple-400 border border-slate-700 hover:border-purple-400/50'
                      : 'bg-white/50 text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300'
                }`}
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 group ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700 hover:border-purple-400/50'
                : 'bg-white/50 border-gray-200 hover:border-purple-300'
            }`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{project.title}</h3>
                <p className={`mb-4 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.demoUrl}
                    className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode 
                        ? 'text-purple-400 hover:text-purple-300'
                        : 'text-purple-600 hover:text-purple-500'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode 
                        ? 'text-gray-400 hover:text-gray-300'
                        : 'text-gray-600 hover:text-gray-500'
                    }`}
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
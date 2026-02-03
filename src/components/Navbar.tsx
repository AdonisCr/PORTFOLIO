import  { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-6 py-3 backdrop-blur-md border transition-all duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/95 border-slate-700' 
        : 'bg-white/95 border-gray-200 shadow-lg'
    }`}>
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:px-4 lg:py-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? isDarkMode
                    ? 'text-purple-400 bg-purple-400/10'
                    : 'text-violet-600 bg-violet-600/10'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                    : 'text-gray-700 hover:text-violet-600 hover:bg-violet-600/5'
              }`}
            >
              {item.name}
            </button>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-600/10'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'text-gray-300 hover:text-yellow-400'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-colors ${
              isDarkMode
                ? 'text-gray-300 hover:text-purple-400'
                : 'text-gray-700 hover:text-violet-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden mt-4 pt-4 border-t ${
          isDarkMode ? 'border-slate-700' : 'border-gray-200'
        }`}>
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? isDarkMode
                      ? 'text-purple-400 bg-purple-400/10'
                      : 'text-violet-600 bg-violet-600/10'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                      : 'text-gray-700 hover:text-violet-600 hover:bg-violet-600/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
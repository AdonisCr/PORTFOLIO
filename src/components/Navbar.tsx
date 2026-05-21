import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-6 py-3 backdrop-blur-md border bg-base/95 border-border transition-all duration-300" role="navigation" aria-label="Navigation principale">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:px-4 lg:py-2">
          {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
              aria-current={activeSection === item.href.substring(1) ? 'true' : undefined}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeSection === item.href.substring(1)
                  ? 'text-accent bg-accent/10'
                  : 'text-text-2 hover:text-accent hover:bg-accent/5'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors text-text-2 hover:text-accent cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-current={activeSection === item.href.substring(1) ? 'true' : undefined}
                className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent bg-accent/10'
                    : 'text-text-2 hover:text-accent hover:bg-accent/5'
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
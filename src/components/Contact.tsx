import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
      isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Éléments décoratifs en arrière-plan - COMME Skills (non inversés) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Contactez-moi</h2>
          <div className={`w-24 h-1 mx-auto mb-8 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-400 to-pink-400'
              : 'bg-gradient-to-r from-purple-600 to-pink-600'
          }`}></div>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                }`}>
                  <Mail className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Email</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>adonisoussou737@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <Phone className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Téléphone</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>(+229) 01 640 285 46</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'bg-green-500/20' : 'bg-green-100'
                }`}>
                  <MapPin className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Localisation</h4>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Ab-Calavi, Bénin</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className={`font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-200'
              }`}>Suivez-moi</h4>
              <div className="flex space-x-4">
                <a href="#" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-purple-500/20 hover:text-purple-400'
                    : 'bg-gray-200 hover:bg-purple-100 hover:text-purple-600'
                }`}>
                  <Github size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-blue-500/20 hover:text-blue-400'
                    : 'bg-gray-200 hover:bg-blue-100 hover:text-blue-600'
                }`}>
                  <Linkedin size={20} />
                </a>
                <a href="#" className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-700 hover:bg-cyan-500/20 hover:text-cyan-400'
                    : 'bg-gray-200 hover:bg-cyan-100 hover:text-cyan-600'
                }`}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            {/* Availability */}
            <div className={`mt-12 p-6 backdrop-blur-sm rounded-xl border ${
              isDarkMode 
                ? 'bg-slate-800/50 border-slate-700'
                : 'bg-white/50 border-gray-200'
            }`}>
              <h4 className={`font-semibold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Disponibilité</h4>
              <p className={`mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Je suis actuellement disponible pour de nouveaux projets et collaborations.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className={`text-sm ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                  placeholder="Votre nom complet"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block font-medium mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none ${
                    isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400'
                      : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                  }`}
                  placeholder="Décrivez votre projet ou votre question..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className={`w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
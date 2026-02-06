import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // 🔥 IMPORTANT: Remplacez ces valeurs par vos VRAIS identifiants EmailJS
      // Exemple: const serviceId = 'service_abc123';
      const serviceId = "service_ekpol5l"; // ⬅️ À REMPLACER
      const templateId = "template_wexov37"; // ⬅️ À REMPLACER
      const publicKey = "pMlV2VVdpbmMrZfGK"; // ⬅️ À REMPLACER

      // Vérification avant l'envoi
      if (
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        throw new Error(
          "⚠️ Vous devez d'abord configurer vos identifiants EmailJS dans Contact.tsx (lignes 27-29)",
        );
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString("fr-FR", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
      };

      console.log("📧 Envoi en cours avec les paramètres:", {
        serviceId,
        templateId,
        templateParams,
      });

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      console.log("✅ Email envoyé avec succès:", response);

      setStatus({
        type: "success",
        message:
          "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
      });

      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("❌ Erreur lors de l'envoi:", error);

      let errorMessage =
        "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.";

      // Messages d'erreur plus précis
      if (error.message && error.message.includes("identifiants EmailJS")) {
        errorMessage = error.message;
      } else if (error.text) {
        errorMessage = `Erreur EmailJS: ${error.text}`;
      } else if (error.status === 400) {
        errorMessage =
          "❌ Erreur 400: Vérifiez que vos Service ID, Template ID et Public Key sont corrects dans le code.";
      } else if (error.status === 401) {
        errorMessage = "❌ Erreur 401: Votre Public Key est invalide.";
      } else if (error.status === 404) {
        errorMessage =
          "❌ Erreur 404: Template ou Service introuvable. Vérifiez les IDs.";
      }

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
      // Masquer le message après 8 secondes
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDarkMode ? "bg-slate-900" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      {/* Éléments décoratifs en arrière-plan - COMME Skills (non inversés) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          }`}
        ></div>
        <div
          className={`absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-center mb-4 ${
              isDarkMode ? "text-slate-300" : "text-gray-900"
            }`}
          >
            Contactez-moi
          </h2>

          <div
            className={`w-24 sm:w-28 h-1 mx-auto rounded-full mb-6 sm:mb-8 ${
              isDarkMode ? "bg-purple-400" : "bg-purple-600"
            }`}
          ></div>
          <p
            className={`text-base sm:text-lg max-w-3xl mx-auto px-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me
            contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Informations de contact
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
                  }`}
                >
                  <Mail
                    className={
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }
                    size={18}
                  />
                </div>
                <div className="min-w-0">
                  <h4
                    className={`font-semibold text-sm sm:text-base ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </h4>
                  <p
                    className={`text-xs sm:text-sm break-all ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    adonisoussou737@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <Phone
                    className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                    size={18}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold text-sm sm:text-base ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Téléphone
                  </h4>
                  <p
                    className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    (+229) 01 640 285 46
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDarkMode ? "bg-green-500/20" : "bg-green-100"
                  }`}
                >
                  <MapPin
                    className={isDarkMode ? "text-green-400" : "text-green-600"}
                    size={18}
                  />
                </div>
                <div>
                  <h4
                    className={`font-semibold text-sm sm:text-base ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Localisation
                  </h4>
                  <p
                    className={`text-xs sm:text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Ab-Calavi, Bénin
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-12">
              <h4
                className={`font-semibold mb-4 text-sm sm:text-base ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Suivez-moi
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-700 hover:bg-purple-500/20 hover:text-purple-400"
                      : "bg-gray-200 hover:bg-purple-100 hover:text-purple-600"
                  }`}
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-700 hover:bg-blue-500/20 hover:text-blue-400"
                      : "bg-gray-200 hover:bg-blue-100 hover:text-blue-600"
                  }`}
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-700 hover:bg-cyan-500/20 hover:text-cyan-400"
                      : "bg-gray-200 hover:bg-cyan-100 hover:text-cyan-600"
                  }`}
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div
              className={`mt-8 sm:mt-12 p-4 sm:p-6 backdrop-blur-sm rounded-xl border ${
                isDarkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-gray-200"
              }`}
            >
              <h4
                className={`font-semibold mb-2 sm:mb-3 text-sm sm:text-base ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Disponibilité
              </h4>
              <p
                className={`mb-3 sm:mb-4 text-xs sm:text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Je suis actuellement disponible pour de nouveaux projets et
                collaborations.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  Disponible pour de nouveaux projets
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Envoyez-moi un message
            </h3>

            {/* Status Message */}
            {status.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-start space-x-3 animate-in fade-in slide-in-from-top-2 ${
                  status.type === "success"
                    ? isDarkMode
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-green-50 border border-green-200"
                    : isDarkMode
                      ? "bg-red-500/20 border border-red-500/30"
                      : "bg-red-50 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                ) : (
                  <AlertCircle
                    className="text-red-500 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                )}
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? isDarkMode
                        ? "text-green-300"
                        : "text-green-700"
                      : isDarkMode
                        ? "text-red-300"
                        : "text-red-700"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block font-medium mb-2 text-sm sm:text-base ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                  }`}
                  placeholder="Votre nom complet"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block font-medium mb-2 text-sm sm:text-base ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                  }`}
                  placeholder="votre@email.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block font-medium mb-2 text-sm sm:text-base ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                  }`}
                  placeholder="Sujet de votre message"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block font-medium mb-2 text-sm sm:text-base ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none text-sm sm:text-base ${
                    isDarkMode
                      ? "bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      : "bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20"
                  }`}
                  placeholder="Décrivez votre projet ou votre question..."
                  required
                  disabled={isLoading}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white py-2.5 sm:py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                } ${
                  isDarkMode
                    ? "bg-purple-500 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30"
                    : "bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

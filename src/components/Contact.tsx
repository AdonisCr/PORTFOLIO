import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import BackgroundBlobs from "./BackgroundBlobs";
import SEO from "./SEO";
import { slideFromLeft, slideFromRight, staggerContainer, fadeIn } from "../lib/animations";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-40px" });
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
  const [errors, setErrors] = useState<{
    email?: string;
    name?: string;
    subject?: string;
    message?: string;
  }>({});

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isBlank = (s: string) => s.trim() === "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: {
      email?: string;
      name?: string;
      subject?: string;
      message?: string;
    } = {};
    if (!validateEmail(formData.email))
      newErrors.email = "Veuillez entrer une adresse email valide";
    if (isBlank(formData.name)) newErrors.name = "Ce champ est requis";
    if (isBlank(formData.subject)) newErrors.subject = "Ce champ est requis";
    if (isBlank(formData.message)) newErrors.message = "Ce champ est requis";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuration EmailJS manquante");
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

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({
        type: "success",
        message:
          "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message:
          "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 8000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: "adonisoussou737@gmail.com",
      href: "mailto:adonisoussou737@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "(+229) 01 640 285 46",
      href: "tel:+2290164028546",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Ab-Calavi, Bénin",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="contact-section min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center pt-20 pb-28 md:pb-6 px-4 sm:px-6 lg:px-10 relative overflow-hidden bg-base"
      aria-labelledby="contact-heading"
    >
      <SEO
        title="Me Contacter"
        description="Contactez Adonis OUSSOU pour toute opportunité de projet, mission freelance ou collaboration Full Stack Web & Mobile."
        path="/contact"
      />
      <BackgroundBlobs />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* En-tête compact pour tenir en Full Screen */}
        <div className="text-center mb-6 lg:mb-8">
          <h1
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-1"
          >
            Me <span className="text-accent">Contacter</span>
          </h1>
          <p className="text-sm sm:text-base text-text-2 mt-1.5">
            Une question ? Un projet ? Discutons de votre besoin.
          </p>
        </div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 bg-surface/40 shadow-xl">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFromLeft}
              className="lg:col-span-5 bg-surface/60 p-6 sm:p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-border/60 flex flex-col justify-between"
              role="complementary"
              aria-label="Informations de contact"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-1 mb-1">
                  Informations de contact
                </h2>
                <p className="text-xs sm:text-sm text-text-3 mb-6">
                  Ouvert aux opportunités de freelance, missions ou CDI.
                </p>

                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="space-y-5"
                >
                  {infoItems.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn}
                      className="flex items-start space-x-3.5 group"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent-solid group-hover:text-white transition-all duration-300">
                        <item.icon size={18} />
                      </div>
                      <div className="pt-0.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-text-2">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm sm:text-base lg:text-[17px] text-text-1 hover:text-accent transition-colors font-semibold"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base lg:text-[17px] text-text-1 font-semibold">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="pt-6 mt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-text-2 mb-3 uppercase tracking-widest">
                  Réseaux professionnels
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/AdonisCr",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/adonis-oussou/",
                      label: "LinkedIn",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-elevated/70 border border-border/60 text-text-2 hover:border-accent/50 hover:text-accent transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFromRight}
              className="lg:col-span-7 bg-surface/30 p-6 sm:p-8 lg:p-9"
            >
              <h3 className="text-xl font-bold text-text-1 mb-5">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs sm:text-sm font-medium text-text-2 ml-1"
                    >
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        handleChange(e);
                        if (errors.name)
                          setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-elevated/70 border ${
                        errors.name ? "border-red-500" : "border-border/70"
                      } rounded-xl px-4 py-2.5 text-sm text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="text-red-400 text-xs mt-1 ml-1"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs sm:text-sm font-medium text-text-2 ml-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                        if (errors.email) setErrors({});
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`w-full bg-elevated/70 border ${
                        errors.email ? "border-red-500" : "border-border/70"
                      } rounded-xl px-4 py-2.5 text-sm text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent`}
                      placeholder="john@email.com"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        role="alert"
                        className="text-red-400 text-xs mt-1 ml-1"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs sm:text-sm font-medium text-text-2 ml-1"
                  >
                    Sujet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.subject)
                        setErrors((prev) => ({ ...prev, subject: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    className={`w-full bg-elevated/70 border ${
                      errors.subject ? "border-red-500" : "border-border/70"
                    } rounded-xl px-4 py-2.5 text-sm text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent`}
                    placeholder="Collaboration, Devis..."
                  />
                  {errors.subject && (
                    <p
                      id="subject-error"
                      role="alert"
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs sm:text-sm font-medium text-text-2 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => {
                      handleChange(e);
                      if (errors.message)
                        setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full bg-elevated/70 border ${
                      errors.message ? "border-red-500" : "border-border/70"
                    } rounded-xl px-4 py-2.5 text-sm text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent resize-none`}
                    placeholder="Décrivez votre projet ici..."
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      role="alert"
                      className="text-red-400 text-xs mt-1 ml-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full overflow-hidden rounded-xl bg-accent-solid px-8 py-3.5 font-bold text-white transition-all duration-300 hover:bg-accent-solid-hover active:scale-[0.98] disabled:opacity-60 shadow-lg shadow-accent/25 cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                      {isLoading ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send
                            size={17}
                            className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className={`mt-4 p-3 rounded-xl flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={18} aria-hidden="true" />
                  ) : (
                    <AlertCircle size={18} aria-hidden="true" />
                  )}
                  <p className="text-xs sm:text-sm">{status.message}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

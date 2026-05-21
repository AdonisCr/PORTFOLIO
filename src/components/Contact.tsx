import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import BackgroundBlobs from "./BackgroundBlobs";
import SectionHeader from "./SectionHeader";
import { slideFromLeft, slideFromRight, staggerContainer, fadeIn } from "../lib/animations";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [errors, setErrors] = useState<{ email?: string; name?: string; subject?: string; message?: string }>({});

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isBlank = (s: string) => s.trim() === "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; name?: string; subject?: string; message?: string } = {};
    if (!validateEmail(formData.email)) newErrors.email = "Veuillez entrer une adresse email valide";
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
        time: new Date().toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" }),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({ type: "success", message: "Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ type: "error", message: "Une erreur est survenue. Veuillez réessayer ou me contacter directement par email." });
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus({ type: null, message: "" }), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: "adonisoussou737@gmail.com", href: "mailto:adonisoussou737@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "(+229) 01 640 285 46", href: "tel:+2290164028546" },
    { icon: MapPin, label: "Localisation", value: "Ab-Calavi, Bénin", href: null },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-base" aria-labelledby="contact-heading">
      <BackgroundBlobs />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          isInView={isInView}
          title="Me"
          highlight="Contacter"
          headingId="contact-heading"
          subtitle="Une question ? Un projet ? N'hésitez pas à me contacter"
        />

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border shadow-2xl">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFromLeft}
              className="lg:col-span-5 bg-gradient-to-br from-surface/40 to-surface/10 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border"
              role="complementary"
              aria-label="Informations de contact"
            >
              <h2 className="text-3xl font-bold text-text-1 mb-2">Informations de contact</h2>
              <p className="text-text-3 mb-10">Je suis ouvert aux opportunités de freelance ou CDI.</p>

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="space-y-8"
              >
                  {infoItems.map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-start space-x-4 group">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/20">
                      <item.icon size={20} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-text-3">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text-1 hover:text-accent transition-colors font-medium">{item.value}</a>
                      ) : (
                        <p className="text-text-1 font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-12"
              >
                <p className="text-sm font-semibold text-text-1 mb-4 uppercase tracking-widest">Suivez-moi</p>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com/AdonisCr", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/adonis-oussou/", label: "LinkedIn" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-surface border border-border text-text-3 hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-16 p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20"
              >
                <div className="flex items-center space-x-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                  </span>
                  <p className="text-sm font-medium text-text-2">Disponible pour de nouveaux projets</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideFromRight}
              className="lg:col-span-7 bg-gradient-to-br from-surface/30 to-base p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold text-text-1 mb-8">Envoyez-moi un message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div variants={fadeIn} className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-2 ml-1">Nom complet</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => { handleChange(e); if (errors.name) setErrors((prev) => ({ ...prev, name: undefined })); }}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full bg-elevated border ${errors.name ? "border-red-500" : "border-border"} rounded-xl px-4 py-3.5 text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent focus:ring-1 focus:ring-accent/30`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
                      )}
                    </motion.div>

                    <motion.div variants={fadeIn} className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-2 ml-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => { handleChange(e); if (errors.email) setErrors({}); }}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full bg-elevated border ${errors.email ? "border-red-500" : "border-border"} rounded-xl px-4 py-3.5 text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent focus:ring-1 focus:ring-accent/30`}
                        placeholder="john@email.com"
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-text-2 ml-1">Sujet</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => { handleChange(e); if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined })); }}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`w-full bg-elevated border ${errors.subject ? "border-red-500" : "border-border"} rounded-xl px-4 py-3.5 text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent focus:ring-1 focus:ring-accent/30`}
                      placeholder="Collaboration, Devis..."
                    />
                    {errors.subject && (
                      <p id="subject-error" role="alert" className="text-red-400 text-xs mt-1 ml-1">{errors.subject}</p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeIn} className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-2 ml-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => { handleChange(e); if (errors.message) setErrors((prev) => ({ ...prev, message: undefined })); }}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full bg-elevated border ${errors.message ? "border-red-500" : "border-border"} rounded-xl px-4 py-3.5 text-text-1 outline-none transition-all duration-300 placeholder:text-text-3 focus:border-accent focus:ring-1 focus:ring-accent/30 resize-none`}
                      placeholder="Décrivez votre projet ici..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeIn}>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full overflow-hidden rounded-xl bg-accent px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-accent-light active:scale-[0.98] disabled:opacity-60 hover:shadow-xl hover:shadow-accent/30 cursor-pointer"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isLoading ? (
                          <>
                            <motion.span
                              className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer le message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              </form>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle size={20} aria-hidden="true" /> : <AlertCircle size={20} aria-hidden="true" />}
                  <p className="text-sm">{status.message}</p>
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

import { motion } from "framer-motion";

const SectionHeader = ({
  isInView,
  title,
  highlight,
  subtitle,
  headingId,
  delay = 0,
}: {
  isInView: boolean;
  title: string;
  highlight: string;
  subtitle?: string;
  headingId?: string;
  delay?: number;
}) => (
  <div className="text-center mb-16">
    <motion.h2
      id={headingId}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-4xl sm:text-5xl font-extrabold text-text-1"
    >
      {title}{" "}
      <span className="text-accent inline-block overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ delay: delay + 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {highlight}
        </motion.span>
      </span>
    </motion.h2>

    <motion.div
      className="flex items-center justify-center gap-2 mt-4 mb-6"
      initial={{ opacity: 0, width: 0 }}
      animate={isInView ? { opacity: 1, width: "auto" } : {}}
      transition={{ delay: delay + 0.25, duration: 0.5 }}
    >
      <div className="w-24 sm:w-28 h-1 rounded-full bg-accent" />
    </motion.div>

    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
        className="text-lg max-w-2xl mx-auto text-text-2"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;

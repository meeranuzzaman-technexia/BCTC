import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
  as = "div",
}) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

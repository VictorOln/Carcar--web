import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Começa invisível e um pouco abaixo
      animate={{ opacity: 1, y: 0 }}  // Sobe e aparece
      exit={{ opacity: 0, y: -20 }}   // Sai para cima ao trocar
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
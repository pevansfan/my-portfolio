import { motion } from "framer-motion";

export default function FadeTitle({ children, className }) {
    return (
        <motion.h1
            className={`fade-title ${className}`}
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.h1>
    );
}
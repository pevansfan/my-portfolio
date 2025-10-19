import { motion } from "framer-motion";

export default function FadePage({ children }) {
    return (
        <motion.div
            className="fade-page"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
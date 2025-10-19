import { motion } from "framer-motion"

const AnimatedSection = ({ children, className }) => {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    )
}

export default AnimatedSection

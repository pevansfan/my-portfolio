// PageTransition.js
import { motion } from "framer-motion";
import "./PageTransition.css";

export default function PageTransition() {

    return (
        <motion.div
            className="page-transition"
            initial={{ x: "100%" }}          // commence hors écran à droite          // passe au centre
            exit={{ x: "-100%" }}            // sort vers la gauche
            transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} // durée et délai de la transition
        />
    );
}

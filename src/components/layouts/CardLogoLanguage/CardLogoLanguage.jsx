import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CardLogoLanguage.css";

const CardLogoLanguage = ({ Icon, name }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            className="card-logo-language"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <motion.div
                className="logo-container"
                animate={{ color: isHovered ? "#e63946" : "#000" }}
                transition={{ duration: 0.1 }}
            >
                <Icon size={100} />
            </motion.div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="logo-name"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: cursorPos.x - 50,
                            y: cursorPos.y + 50,
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {name}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CardLogoLanguage;

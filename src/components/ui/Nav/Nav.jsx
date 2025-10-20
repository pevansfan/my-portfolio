import { useState } from "react";
import MenuIcon from "../../icons/MenuIcon";
import CrossIcon from "../../icons/CrossIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import GithubIcon from "../../icons/GithubIcon";
// import { useNavigate } from "react-router-dom";

import Icon from "../../layouts/Icon/Icon";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import "./Nav.css";
// import Button from "../../layouts/Button/Button";

const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // délai entre chaque li
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // const navigate = useNavigate();
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <a href={process.env.PUBLIC_URL + '/'}>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="navbar-buttons">
                    {/* <Button type="text" className="button-contact" onClick={() => navigate('/contact')}>
                        Contactez-moi
                    </Button> */}
                    {/* Bouton hamburger */}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.div
                                    key="cross"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <Icon className="icon-close" component={CrossIcon} size={20} backgroundColor="var(--color-secondary)" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    <MenuIcon size={30} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>


            </div>

            {/* Menu déroulant avec fade-in */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Fond noir flou derrière le menu */}
                        <motion.div
                            className="menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={toggleMenu} // ferme le menu si on clique dehors
                        />
                        <motion.div
                            className="menu"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >

                            <motion.ul
                                className="menu-list"
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.li variants={itemVariants}><Link to="/" onClick={toggleMenu}>Accueil</Link></motion.li>
                                <motion.li variants={itemVariants}><Link to="/about" onClick={toggleMenu}>À propos</Link></motion.li>
                                <motion.li variants={itemVariants}><Link to="/projects" onClick={toggleMenu}>Projets</Link></motion.li>
                                <motion.li variants={itemVariants}><Link to="/contact" onClick={toggleMenu}>Contact</Link></motion.li>
                            </motion.ul>
                            <div className="bar"></div>
                            <div className="nav-infos">
                                <motion.div
                                    className="nav-contact"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                                >
                                    <p className="nav-subtitle">Envie de me contacter ?</p>
                                    <ul>
                                        <li>
                                            <a href="mailto:fani;prft@gmail.com" target="_blank" rel="noopener noreferrer">fani.prft@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+33652906486" target="_blank" rel="noopener noreferrer">+33 (0) 6 52 90 64 86</a>
                                        </li>
                                    </ul>
                                </motion.div>
                                <motion.div
                                    className="nav-socials"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                                >
                                    <p className="nav-subtitle">Où me retrouver ?</p>
                                    <ul className="social-icons">
                                        <li>
                                            <a href="https://www.linkedin.com/in/evans-parfait-ab569a29b/" target="_blank" rel="noopener noreferrer">
                                                <Icon component={LinkedinIcon} size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/evans.prft/" target="_blank" rel="noopener noreferrer">
                                                <Icon component={InstagramIcon} size={20} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/pevansfan" target="_blank" rel="noopener noreferrer">
                                                <Icon component={GithubIcon} size={20} />
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>

                            </div>

                        </motion.div>
                    </>

                )}
            </AnimatePresence>
        </nav>
    );
}

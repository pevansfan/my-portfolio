// Footer.jsx
import { motion } from "framer-motion";
import "./Footer.css";
import Button from "../../layouts/Button/Button";
import ArrowTopRight from "../../icons/ArrowTopRight";
import Logo2 from "../../../assets/img/logo-2.png"

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <p className="subtitle">Vous avez un beau projet ? Discutons-en !</p>
                <motion.h1
                    className="email"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span>hello<a href="mailto:fani.prft@gmail.com">@parfait.com</a></span>
                    <Button
                        type="icon"
                        className="button-email"
                    >
                        <a href="mailto:fani.prft@gmail.com"><ArrowTopRight size={30} /></a>
                    </Button>
                </motion.h1>
            </div>
            <div className="bar"></div>
            <div className="container">
                <nav className="footer-menu">
                    <div className="footer-img">
                        <a href="/">
                            <img src={Logo2} alt="Logo" />
                        </a>

                    </div>
                    <ul>
                        <li className={window.location.pathname === "/" ? "active" : ""}>
                            <a href="/">Accueil</a>
                        </li>
                        <li className={window.location.pathname === "/about" ? "active" : ""}>
                            <a href="/about">À propos</a>
                        </li>
                        <li className={window.location.pathname === "/projects" ? "active" : ""}>
                            <a href="/projects">Projets</a>
                        </li>
                        <li className={window.location.pathname === "/contact" ? "active" : ""}>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright">
                    <p>&copy;2025. Tous droits réservés.</p>
                    <p>Créé par <span className="autor">Evans Parfait</span></p>
                </div>
            </div>
        </div>
    );
}

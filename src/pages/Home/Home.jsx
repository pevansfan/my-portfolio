import { useState } from "react";
import { motion } from "framer-motion";
import FadeTitle from "../../components/layouts/FadeTitle/FadeTitle";
import QuoteIcon from "../../components/icons/QuoteIcon";
import GsapCarousel from "../../components/layouts/GsapCarousel/GsapCarousel";

import AwardSvg from "../../components/svg/AwardSvg";
import CurvesSvg from "../../components/svg/CurvesSvg";
import FlowerSvg from "../../components/svg/FlowerSvg";
import BallSvg from "../../components/svg/BallSvg";
import Line1Svg from "../../components/svg/Line1Svg";
import ExclamationSvg from "../../components/svg/ExclamationSvg";
import Bolt1Svg from "../../components/svg/Bol1Svg";
import SpeakerSvg from "../../components/svg/SpeakerSvg";
import CrownSvg from "../../components/svg/CrownSvg";
import DeviceSvg from "../../components/svg/DeviceSvg";

import MemojiMoi from "../../assets/img/memoji-me.png"
import StarIcon from "../../components/icons/StarIcon";
import Portrait from "../../assets/img/moi.png";
import "./Home.css";

import AnimatedSection from "../../components/layouts/AnimatedSection/AnimatedSection";
import AnimatedHalfCircle from "../../components/layouts/AnimatedHalfCircle/AnimatedHalfCircle";
import SplitTextReveal from "../../components/layouts/SplitTextReveal/SplitTextReveal";
import Button from "../../components/layouts/Button/Button";
import { useNavigate } from "react-router-dom";
import CardProject from "../../components/layouts/CardProject/CardProject";

import projectsData from "../../assets/data/projects.json"


export default function Home() {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const listQualites = [
        {
            index: 1,
            quality: "Travail en équipe"
        },
        {
            index: 2,
            quality: "Adaptabilité"
        },
        {
            index: 3,
            quality: "Curiosité"
        },
        {
            index: 4,
            quality: "Autonomie"
        }
    ]

    return (
        <AnimatedSection className="Home">
            <div className="Home presentation">
                <motion.div
                    className="presentation-titles"
                    animate={hovered ? { opacity: 0, scale: 0.9, y: [0, 90] } : { opacity: 1, scale: 1, y: [90, 0] }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <div className="message-hello">
                        <span>Hello!</span>
                        <CurvesSvg
                            width={25}
                            height={25}
                            strokeWidth={25}
                            style={{ transform: "rotate(-40deg)" }}
                        />
                    </div>
                    <div className="home-title">
                        <FadeTitle>
                            I'm <span>Evans</span>, <br />Web Developer
                        </FadeTitle>
                        <CurvesSvg
                            width={50}
                            height={50}
                            strokeWidth={25}
                            style={{ transform: "rotate(120deg)" }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="home-description element-home"
                    animate={hovered ? { y: [-10, -250, -230] } : { y: [-230, 20, 0] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <QuoteIcon size={24} />
                    <p>
                        Passionné par la création d’expériences web belles et fonctionnelles, je me spécialise dans la création de sites web réactifs et conviviaux. Travaillons ensemble pour donner vie à vos idées !
                    </p>
                </motion.div>

                <div
                    className="home-container-img"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    // style inline pour l'exemple, tu peux mettre ça dans Home.css
                    style={{
                        
                        overflow: "visible", // IMPORTANT si tu veux que les SVG sortent du cadre
                    }}
                >
                    {/* Portrait (au centre, zIndex bas) */}
                    <img
                        src={Portrait}
                        alt="Portrait"
                        className="home-portrait"
                    />

                    {/* === SVG haut-gauche === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: -110, y: -70 }
                                : { opacity: 0, scale: 0, x: 0, y: 0 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        whileHover={{ scale: 1.15 }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "40%",
                            width: 48,
                            height: 48,
                            marginLeft: -24, // centre le box (half width)
                            marginTop: -24,  // centre le box (half height)
                            zIndex: -1,       // au-dessus du portrait
                            pointerEvents: "auto",
                        }}
                    >
                        {/* Si ton composant accepte props, envoie width/height, sinon il prendra sa taille interne */}
                        <AwardSvg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG bas-gauche === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: -90, y: 100, rotate: -20 }
                                : { opacity: 0, scale: 0, x: 0, y: 0 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "10%",
                            width: 44,
                            height: 44,
                            marginLeft: -22,
                            marginTop: -22,
                            zIndex: -1,
                        }}
                    >
                        <FlowerSvg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG haut-droite === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: 100, y: -90 }
                                : { opacity: 0, scale: 0, x: 0, y: 0 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 50,
                            height: 50,
                            marginLeft: -25,
                            marginTop: -25,
                            zIndex: -1,
                        }}
                    >
                        <BallSvg width="100%" height="100%" />
                    </motion.div>
                    {/* === SVG bas-droite === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: 80, y: 90, rotate: 20 }
                                : { opacity: 0, scale: 0, x: 0, y: 0 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "55%",
                            left: "70%",
                            width: 150,
                            height: 150,
                            marginLeft: -20,
                            marginTop: -20,
                            zIndex: -1,
                        }}
                    >
                        <Line1Svg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG bas-centre === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: -50, y: 120, rotate: -40 }
                                : { opacity: 0, scale: 0, x: 0, y: 0 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.24 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "70%",
                            left: "5%",
                            width: 60,
                            height: 60,
                            marginLeft: -30,
                            marginTop: -30,
                            zIndex: -1,
                        }}
                    >
                        <ExclamationSvg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG haut-centre === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: 0, y: 150, rotate: 20 }
                                : { opacity: 0, scale: 0, x: 0, y: 150 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "20%",
                            left: "85%",
                            width: 60,
                            height: 60,
                            marginLeft: -30,
                            marginTop: -30,
                            zIndex: -1,
                        }}
                    >
                        <Bolt1Svg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG milieu-droite === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: 100, y: 170, rotate: 20 }
                                : { opacity: 0, scale: 0, x: 0, y: 170 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "30%",
                            left: "80%",
                            width: 60,
                            height: 60,
                            marginLeft: -30,
                            marginTop: -30,
                            zIndex: -1,
                        }}
                    >
                        <SpeakerSvg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG milieu-gauche === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: 0, y: -80, rotate: -20 }
                                : { opacity: 0, scale: 0, x: 0, y: 150, rotate: 90 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "20%",
                            left: "36%",
                            width: 80,
                            height: 80,
                            marginLeft: -30,
                            marginTop: -30,
                            zIndex: -1,
                        }}
                    >
                        <CrownSvg width="100%" height="100%" />
                    </motion.div>

                    {/* === SVG milieu-gauche 2 === */}
                    <motion.div
                        className="svg-home"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                            hovered
                                ? { opacity: 1, scale: 1, x: -100, y: 60, rotate: -20 }
                                : { opacity: 0, scale: 0, x: 0, y: 150, rotate: 90 }
                        }
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.3 }}
                        whileHover={{ scale: 1.12 }}
                        style={{
                            position: "absolute",
                            top: "40%",
                            left: "25%",
                            width: 50,
                            height: 50,
                            marginLeft: -30,
                            marginTop: -30,
                            zIndex: -1,
                        }}
                    >
                        <DeviceSvg width="100%" height="100%" />
                    </motion.div>
                </div>
                <AnimatedHalfCircle />
                <motion.div
                    className="home-experience element-home"
                    animate={hovered ? { y: [-10, -250, -230] } : { y: [-230, 20, 0] }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="stars">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon key={index} size={24} />
                        ))}
                    </div>

                    <h1>3 ans</h1>
                    <p>d'expérience</p>
                </motion.div>
            </div>

            <GsapCarousel />
            <div className="about">
                <div className="about-container">
                    <div className="about-img">
                        <img src={MemojiMoi} alt="" />
                    </div>
                    <div className="about-infos">
                        <div className="about-description">
                            <h1>À propos de <span>Moi</span></h1>
                            <p className="text">
                                Je suis un développeur full-stack passionné par la création d’applications web modernes et performantes. Spécialisé en React, JavaScript et les technologies front-end récentes, je conçois des interfaces réactives, ergonomiques et accessibles, tout en assurant une expérience utilisateur fluide. Côté back-end, j’ai de l’expérience avec Symfony, Node.js et différentes bases de données (SQL et NoSQL), ce qui me permet de développer des API robustes, sécurisées et évolutives.
                            </p>
                            {/* <p>J’accorde une grande importance à la qualité du code, à l’architecture logicielle et aux bonnes pratiques comme les tests, l’intégration continue ou le déploiement avec Docker et des environnements cloud. Habitué aux méthodes agiles telles que Scrum et Kanban, je travaille avec rigueur et adaptabilité pour concevoir des solutions fiables, maintenables et pensées pour évoluer, offrant ainsi aux utilisateurs des expériences digitales modernes et engageantes.</p> */}
                        </div>
                        <ul className="about-qualities">
                            {listQualites.map(({ index, quality }) => (
                                <li key={index}>
                                    <span className="index-quality">{index}</span>
                                    <span className="name-quality">{quality}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            className="button-about"
                            onClick={() => navigate("/about")}
                        >
                            En savoir plus
                        </Button>
                    </div>
                </div>
            </div>
            <div className="projects">
                <SplitTextReveal className="projects-title">
                    Jetons un coup d’œil à mon <span>Portfolio</span>
                </SplitTextReveal>
                <div className="projects-grid">
                    {projectsData.projects.slice(0, 3).map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </div>
                <Button type="text" className="button-all-projects" onClick={() => navigate('/projects')}>
                    Voir tous mes projets
                </Button>
            </div>
            <div className="contact"></div>
        </AnimatedSection>
    );
}

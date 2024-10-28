import React from "react";
import "./about.css";
import Image from "../../assets/img/homme.png";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">À propos de <span>Moi</span></h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Enthousiaste et passionné par le monde de l'informatique, je suis actuellement étudiant à LA MANU. Je cherche à développer des compétences solides pour contribuer de manière significative à l'univers en constante évolution de la technologie.
                        </p>
                        <a href="https://pevansfan.github.io/site-cv/" target="_blank" className="btn">Télécharger le CV</a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Développement</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Design UI/UX</h3>
                                <span className="skills_number">70%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Programmation</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage programmation"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About
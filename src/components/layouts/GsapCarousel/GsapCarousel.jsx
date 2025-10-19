import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Illustration from "../../../assets/img/illustration-carousel.png"
import SkillsImg from "../../../assets/img/img-skills-carousel.jpg"
import ArrowRight from "../../icons/ArrowRight";
import ServicesGsap from "../../../assets/data/services-card.json"
import CardGsap from "../CardGsap/CardGsap";
import { useState, useEffect } from "react";
import "./GsapCarousel.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCarousel() {
    const containerRef = useRef(null);
    const [isTablette, setIsTablette] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsTablette(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            const inner = container.querySelector(".h-carousel__inner");
            const slideElements = gsap.utils.toArray(".slide", inner);

            const totalScroll = inner.scrollWidth - window.innerWidth;

            // Carousel horizontal avec pin
            gsap.to(inner, {
                x: () => `-${totalScroll}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => "+=" + totalScroll,
                    scrub: 0.8,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    snap: {
                        snapTo: 1 / (slideElements.length - 1),
                        duration: { min: 0.2, max: 0.5 },
                        ease: "power1.inOut"
                    }
                }
            });

            // Animations des textes uniquement quand visibles
            slideElements.forEach((slide) => {
                const title = slide.querySelector(".skills-title");
                const paragraphs = slide.querySelectorAll(".skills-text p, .scroll-down");

                if (title) {
                    gsap.from(title, {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        scrollTrigger: {
                            trigger: title,
                            start: "top 80%", // quand le titre entre dans le viewport
                        }
                    });
                }

                paragraphs.forEach((p, index) => {
                    gsap.from(p, {
                        opacity: 0,
                        y: 50,
                        duration: 1,
                        delay: 0.5 * (index + 1),
                        scrollTrigger: {
                            trigger: p,
                            start: "top 80%",
                        }
                    });
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="page">
            <section ref={containerRef} className="h-carousel">
                <div className="h-carousel__inner">
                    <div className="slide skills" style={{ backgroundColor: "var(--color-secondary)" }}>
                        <div className="skills-group">
                            <h1 className="skills-title">
                                Je conçois des expériences numériques élégantes alliant à la fois esthétique et sécurité.
                            </h1>
                            <div className="skills-infos">
                                <div className="skills-illustration">
                                    <img src={Illustration} alt="" />
                                </div>

                                <div className="skills-text">
                                    <p>
                                        Au cours de mon cursus scolaire, j'ai développé de nombreuses compétences dans le domaine de l'informatique, en participant à de nombreux projets et travaux pratiques.
                                    </p>
                                    <p className="scroll-down">
                                        Scroll for more
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="skills-img">
                            <img src={SkillsImg} alt="Skills" />
                        </div>
                    </div>
                    {isTablette && (
                        <div className="slide skills-container-img" style={{ backgroundColor: "var(--color-bg)" }}>
                            <div className="skills-img">
                                <img src={SkillsImg} alt="Skills" />
                            </div>
                        </div>
                    )}
                    <div className="slide mission" style={{ backgroundColor: "var(--color-bg)", border: "2px solid var(--color-secondary)" }}>
                        <div className="mission-group">
                            <div className="mission-group-container">
                                <h2 className="mission-title">
                                    Redéfinir le paysage digital en créant des expériences élégantes et centrées sur l’humain, alliant harmonieusement esthétique et fonctionnalité.
                                </h2>

                                <p className="mission-text">
                                    Des interfaces intuitives aux designs captivants, je m’engage à repousser les limites du développement web et à livrer des solutions qui marquent durablement.
                                </p>
                            </div>
                        </div>
                        <div className="mission-links">
                            <Link to="/projects" className="link">
                                Voir mes réalisations <ArrowRight size={12} />
                            </Link>
                            <Link to="/contact" className="link">
                                Me contacter <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                    {ServicesGsap.map((service, index) => (
                        <div key={index} className="slide service" style={{ backgroundColor: "var(--color-primary-2)" }}>
                            <CardGsap
                                index={service.index}
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

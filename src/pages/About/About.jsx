import { useState, useEffect } from 'react';
import AnimatedSection from '../../components/layouts/AnimatedSection/AnimatedSection';
import Button from '../../components/layouts/Button/Button';
import GroupTitle from '../../components/layouts/GroupTitle/GroupTitle';
import QualificationSection from '../../components/layouts/QualificationSection/QualificationSection';
import './About.css';

import { useNavigate } from 'react-router-dom';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaSymfony, FaNodeJs, FaSass, FaJava, FaPython, FaNpm, FaGitAlt, FaVuejs, FaDocker, FaUnity, FaFigma } from "react-icons/fa";
import { RiBlenderLine } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoWordpress } from "react-icons/io5";

import CardLogoLanguage from '../../components/layouts/CardLogoLanguage/CardLogoLanguage';

// ✅ import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const About = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    const languages = [
        { Icon: FaReact, name: "React" },
        { Icon: FaHtml5, name: "HTML5" },
        { Icon: FaCss3Alt, name: "CSS3" },
        { Icon: FaJsSquare, name: "JavaScript" },
        { Icon: FaPhp, name: "PHP" },
        { Icon: FaSymfony, name: "Symfony" },
        { Icon: GrMysql, name: "MySQL" },
        { Icon: IoLogoWordpress, name: "WordPress" },
        { Icon: FaNodeJs, name: "Node.js" },
        { Icon: FaSass, name: "Sass" },
        { Icon: FaJava, name: "Java" },
        { Icon: FaPython, name: "Python" },
        { Icon: FaNpm, name: "npm" },
        { Icon: FaGitAlt, name: "Git" },
        { Icon: FaVuejs, name: "Vue.js" },
        { Icon: FaDocker, name: "Docker" },
        { Icon: FaUnity, name: "Unity" },
        { Icon: SiAdobe, name: "Adobe" },
        { Icon: RiBlenderLine, name: "Blender" },
        { Icon: FaFigma, name: "Figma" },
    ];

    // ✅ Détecter si on est en mobile
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return (
        <AnimatedSection className='About'>
            <div className="presentation">
                <GroupTitle subtitle="À propos de Moi" title="Développeur innovant pour une " span="ère numérique" />
                <div className="presentation-description">
                    <p>Découvre mes projets, mes compétences et tout ce que j’aime partager autour du développement web.</p>
                    <Button
                        className='button-contact'
                        type="text"
                        onClick={() => navigate('/contact')}
                    >
                        Me contacter
                    </Button>
                </div>
            </div>

            <QualificationSection />

            <div className="languages">
                <h1 className="languages-title">Des compétences <span>acquises</span></h1>

                {isMobile ? (
                    // ✅ Version mobile : Swiper
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            480: { slidesPerView: 3 },
                            640: { slidesPerView: 4 },
                        }}
                    >
                        {languages.map(({ Icon, name }, index) => (
                            <SwiperSlide key={index}>
                                <CardLogoLanguage Icon={Icon} name={name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    // ✅ Version desktop : Grid
                    <div className="languages-container">
                        {languages.map(({ Icon, name }, index) => (
                            <CardLogoLanguage key={index} Icon={Icon} name={name} />
                        ))}
                    </div>
                )}
            </div>
        </AnimatedSection>
    );
};

export default About;

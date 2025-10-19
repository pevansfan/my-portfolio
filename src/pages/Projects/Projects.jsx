import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowTopRight from "../../components/icons/ArrowTopRight";
import CardProject from "../../components/layouts/CardProject/CardProject";
import projectsData from "../../assets/data/projects.json"
import AnimatedSection from "../../components/layouts/AnimatedSection/AnimatedSection";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Projects.css'

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projectsData.projects[0]);

    const handleSlideChange = (swiper) => {
        // Récupère le projet correspondant à l'index du premier slide visible
        const newProject = projectsData.projects[swiper.activeIndex];
        setActiveProject(newProject);
    };
    return (
        <AnimatedSection className='Projects section'>
            <h1 className="title">Mes Projets</h1>
            <Swiper
                className="projects-container"
                spaceBetween={24}
                slidesPerView={3}
                grabCursor={true}
                autoHeight={true}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => setActiveProject(projectsData.projects[swiper.activeIndex])}
            >
                {projectsData.projects.map((project) => (
                    <SwiperSlide key={project.id} >
                        <CardProject project={project} />
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className="slide-nothing"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-nothing"></div>
                </SwiperSlide>
            </Swiper>
            <AnimatePresence mode="wait">
                {activeProject && (
                    <motion.div
                        key={activeProject.id}
                        className="project-info"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <div className="project-info-title">
                            <h2>{activeProject.title} - {activeProject.informations.name}</h2>
                            <span className="icon-arrow-top-right"><ArrowTopRight /></span>
                        </div>

                        {activeProject.shortDescription && (
                            <p className="project-short-description">
                                {activeProject.shortDescription}
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimatedSection>
    )
}

export default Projects

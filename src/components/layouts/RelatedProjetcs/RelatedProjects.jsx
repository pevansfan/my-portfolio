import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardProject from "../CardProject/CardProject";
import projectsData from "../../../assets/data/projects.json";
import "./RelatedProjects.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const RelatedProjects = ({ currentProjectId }) => {
    // Filtrer tous les projets sauf celui qui est affiché dans DetailProject
    const otherProjects = projectsData.projects.filter(
        (project) => project.id !== currentProjectId
    );

    const navigate = useNavigate()

    return (
        <div className="related-projects">
            <div className="related-titles">
                <h1>Et la suite ?</h1>
                <Button type="text" className="button-all-projects" onClick={() => navigate('/projects')}>
                    Voir tous les projets
                </Button>
            </div>
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
            >
                {otherProjects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <CardProject project={project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedProjects;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../../components/layouts/AnimatedSection/AnimatedSection";
import "./DetailProject.css";
import Button from "../../components/layouts/Button/Button";
import ArrowLeft from "../../components/icons/ArrowLeft";
import BackgroundInformations from "../../assets/img/card-info-project.png";
import CheckIcon from "../../components/icons/CheckIcon";
import RelatedProjects from "../../components/layouts/RelatedProjetcs/RelatedProjects";

const DetailProject = ({ project }) => {
    const navigate = useNavigate();
    const [reloadKey, setReloadKey] = useState(0); // Pour rejouer la vidéo

    const handleGoBack = () => {
        navigate("/projects");
    };

    const handleReplay = () => {
        setReloadKey((prev) => prev + 1); // Recharge l'iframe
    };

    const getYouTubeEmbedUrl = (url) => {
        let videoId = "";

        if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0];
        } else if (url.includes("youtube.com/watch?v=")) {
            videoId = url.split("v=")[1].split("&")[0];
        } else if (url.includes("youtube.com/shorts/")) {
            videoId = url.split("shorts/")[1].split("?")[0];
        }

        return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&modestbranding=1&playlist=${videoId}`;
    };

    return (
        <AnimatedSection className="DetailProject section">
            <Button className="button-back" type="icon" onClick={handleGoBack}>
                <ArrowLeft size={24} />
            </Button>

            <h1 className="details-title">
                Détails du <span>Projet</span>
            </h1>

            <div className="container">
                {/* 🎥 Section vidéo du projet */}
                {project.video && (
                    <div className="project-video">
                        {(() => {
                            const embedUrl = getYouTubeEmbedUrl(project.video);

                            return (
                                <div className="video-wrapper">
                                    <iframe
                                        key={reloadKey}
                                        src={embedUrl}
                                        title={project.title}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen={false} // ❌ empêche le plein écran
                                    ></iframe>

                                    {/* 🔒 Overlay pour bloquer interactions / son */}
                                    <div className="no-sound-overlay"></div>

                                    {/* 🔁 Bouton rejouer */}
                                    <Button className="replay-button" onClick={handleReplay}>
                                        🔁 Rejouer la vidéo
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                )}

                {/* 🧾 Contenu du projet */}
                <div className="detail-project__content">
                    <div className="titles">
                        <h1 className="title">
                            <span>{project.title}</span> Project
                        </h1>
                        <p className="context">{project.context}</p>
                    </div>

                    <div
                        className="informations"
                        style={{
                            borderRadius: "20px",
                            backgroundImage: `url(${BackgroundInformations})`,
                            backgroundSize: "cover",
                            padding: "20px",
                        }}
                    >
                        <div className="informations-element">
                            <p className="input">Catégorie du Projet :</p>
                            <p className="value">{project.category}</p>
                        </div>

                        <div className="informations-element">
                            <p className="input">Équipe :</p>
                            <p className="value">
                                {project.informations.team.map((user, idx) => (
                                    <span key={idx}>
                                        {user}
                                        {idx < project.informations.team.length - 1 ? ", " : ""}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="informations-element">
                            <p className="input">Durée :</p>
                            <p className="value">{project.informations.duration}</p>
                        </div>

                        <div className="informations-element">
                            <p className="input">Lieu :</p>
                            <p className="value">{project.informations.place}</p>
                        </div>
                    </div>
                </div>

                <div className="content-group">
                    <h2>Le challenge</h2>
                    <p>{project.challenge}</p>
                </div>

                <div className="content-group">
                    <h2>La solution</h2>
                    <p>{project.solution}</p>
                </div>

                <div className="achievements">
                    {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="achievement">
                            <span className="achievement-icon">
                                <CheckIcon size={13} />
                            </span>
                            <span className="achievement-name">{achievement}</span>
                        </div>
                    ))}
                </div>

                <div className="images-group">
                    <div className="image">
                        <img
                            src={process.env.PUBLIC_URL + project.images.couverture}
                            alt=""
                        />
                    </div>
                </div>

                <Button
                    type="text"
                    className="button-link-project"
                    onClick={() => window.open(project.link, "_blank")}
                >
                    Visiter le site
                </Button>
            </div>

            <RelatedProjects currentProjectId={project.id} />
        </AnimatedSection>
    );
};

export default DetailProject;
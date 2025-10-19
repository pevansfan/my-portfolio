import ArrowTopRight from "../../icons/ArrowTopRight";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./CardProject.css";

const CardProject = ({ project }) => {
    const navigate = useNavigate()
    return (
        <div className="card-container">
            <div className="card">
                <div
                    className="card-project"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL + project.images.couverture})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
                <div className="card-button">
                    <Button type="icon" className="button-project" onClick={() => navigate(`/projects/${project.id}`)}>
                        <ArrowTopRight size={50} />
                    </Button>
                </div>
            </div>
            <h1 className="card-title">{project.title}</h1>
            <div className="card-infos">
                <div className="card-category">
                    {project.category}
                </div>
                <div className="date">
                    <div className="point"></div>
                    {project.informations.date}
                </div>
            </div>

            {/* <div className="card-informations">
                <div className="users">
                    <div className="team">
                        {project.informations.team.map((user, idx) => (
                            <>
                                <span key={idx}>
                                    <div className="point"></div>
                                    {user}
                                    <br />
                                </span>
                            </>

                        ))}
                    </div>

                </div>
                <div className="date">
                    <div className="point"></div>
                    {project.informations.date}
                </div>
            </div> */}
        </div>
    );
};

export default CardProject;

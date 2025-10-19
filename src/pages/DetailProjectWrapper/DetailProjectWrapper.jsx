import projectData from "../../assets/data/projects.json"
import { useParams } from "react-router-dom";
import DetailProject from "../DetailsProject/DetailProject";

const DetailProjectWrapper = () => {
    const { id } = useParams();
    const project = projectData.projects.find(p => String(p.id) === id);

    if (!project) {
        return <div>Projet non trouvé.</div>;
    }

    return <DetailProject project={project} />;
};

export default DetailProjectWrapper
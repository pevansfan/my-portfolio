
import AnimatedSection from '../../components/layouts/AnimatedSection/AnimatedSection';
import './404.css'
import Button from "../../components/layouts/Button/Button";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate()
    return (
        <AnimatedSection className="page-404">
            <h1 className="title">4<span>0</span>4</h1>
            <h2 className="subtitle">Oups! La page est introuvable.</h2>
            <p>La page que vous recherchez a été probablement supprimé.</p>
            <Button
                type="text"
                className="button-back-home"
                onClick={() => navigate('/')}
            >
                Revenir à la page d'accueil
            </Button>
        </AnimatedSection>
    )
}

export default Page404

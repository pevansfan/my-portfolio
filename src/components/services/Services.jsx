import React from "react";
import "./services.css";
import Image1 from "../../assets/img/web-design.png";
import Image2 from "../../assets/img/data.png";
import Image3 from "../../assets/img/sql.png";

const Services = () => {
    return (
        <section class="services container section" id="services">
            <h1 class="section__title">Mes <span>Services</span></h1>
            <div class="services-container">
                <div class="services-box box__design">
                    <img src={Image1} className="services__img" alt="" />
                    <div className="services__design">
                        <h2 className="services__title">Graphic Designer</h2>
                        <p>Même si le design n'est pas mon point fort, je cherche toujours à trouver des idées visuelles
                            uniques, alliant esthétique et impact pour créer des visuels mémorables et captivants.</p>
                    </div>

                </div>
                <div class="services-box box__development">
                    <img src={Image2} className="services__img" alt="" />
                    <div className="services__web-development">
                        <h2 className="services__title">Développemnt Web</h2>
                        <p>Mon intérêt pour le
                            développement web est une aventure où la créativité rencontre la technologie pour façonner le futur
                            digital avec innovation et élégance.</p>
                    </div>

                </div>
                <div class="services-box box__programmation">
                    <img src={Image3} className="services__img" alt="" />
                    <div className="services__programmation">
                        <h2 className="services__title">Programmation</h2>
                        <p>Je trouve une satisfaction unique à transformer des concepts abstraits en solutions
                            concrètes, avec rigueur et créativité pour construire des systèmes efficaces.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
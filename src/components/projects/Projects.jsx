import React, { useState } from "react";
import "./projects.css";
import Menu from "./Menu";

const Projects = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curlElem) => {
            return curlElem.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
        <section className="work container section" id="projects">
            <h2 className="section__title">Mes <span>Projets</span></h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>Tout</span>
                <span className="work__item" onClick={() => filterItem 
                ("HTML/CSS")}>HTML/CSS</span>
                <span className="work__item" onClick={() => filterItem 
                ("Javascript")}>Javascript</span>
                <span className="work__item" onClick={() => filterItem 
                ("Vue.js")}>Vue.js</span>
                <span className="work__item" onClick={() => filterItem 
                ("Design")}>Design</span>
            </div>

            <div className="work__container grid">
                 {items.map((elem) => {
                    const{id, image, title, category, link} = elem;
                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category} </span>
                            <h3 className="work__title">{title}</h3>
                            <a href={link} className="work__button" target="_blank">
                                <ion-icon name="link-outline" className="icon-link work__button-icon"></ion-icon>
                            </a>
                        </div>
                    )
                 })}
            </div>
        </section>
    )
}

export default Projects
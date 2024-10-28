import React from "react";
import "./home.css";
import Me from "../../assets/img/homme-2.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img"/>
                <h1 className="home__name">Fanilohery Evans Parfait</h1>
                <span className="home__education">I'm a Front-end Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contactez-moi</a>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home
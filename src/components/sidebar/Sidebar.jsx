import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/img/logo.png"

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <ion-icon name="home-outline"></ion-icon>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <ion-icon name="person-outline"></ion-icon>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <ion-icon name="briefcase-outline"></ion-icon>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" className="nav__link">
                                    <ion-icon name="grid-outline"></ion-icon>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2024-2025 </span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <ion-icon name="menu-outline"></ion-icon>
            </div>
        </>
    )
}

export default Sidebar
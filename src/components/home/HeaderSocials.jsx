import React from "react";

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com" className="home__social-link" target="_blank">
                <ion-icon name="logo-instagram"></ion-icon>
            </a>

            <a href="https://www.linkedin.com" className="home__social-link" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a href="https://github.com" className="home__social-link" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
            </a>

            <a href="https://x.com" className="home__social-link" target="_blank">
                <ion-icon name="logo-twitter"></ion-icon>
            </a>

            <a href="https://x.com" className="home__social-link" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
            </a>
        </div>
    )
}

export default HeaderSocials
import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <ion-icon name="flame-outline" className="about__icon icon-fire"></ion-icon>

                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">Project completed</span>
                </div>
            </div>

            <div className="about__box">
                <ion-icon name="cafe-outline" className="about__icon icon-cup"></ion-icon>

                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Cup of coffee </span>
                </div>
            </div>

            <div className="about__box">
                <ion-icon name="people-outline" className="about__icon icon-people"></ion-icon>

                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about__box">
                <ion-icon name="trophy-outline" className="about__icon icon-trophy"></ion-icon>

                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">Nominees  winners</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox
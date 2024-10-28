import React from "react";
import "./contact.css";


const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Me <span>Contactez</span></h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Parlons de tout</h3>
                    <p className="contact__details">Vous n'aimez pas les formulaires ? <br/> <b>Envoyez-moi un e-mail ! 👋</b></p>

                    <div className="contact__items">
                        <div className="contact__item">
                            <ion-icon name="mail-outline"></ion-icon>
                            <span><a href="mailto:fani.prft@gmail.com">fani.prft@gmail.com</a></span>
                        </div>

                        <div className="contact__item">
                            <ion-icon name="call-outline"></ion-icon>
                            <span><a href="tel:0652906486">06 52 90 64 86</a></span>
                        </div>

                        <div className="contact__item">
                            <ion-icon name="map-outline"></ion-icon>
                            <span><a href="https://maps.app.goo.gl/K7iK7wcHGSpRBtqF7" target="_blank">13 Rue des Étangs, <br />60170 Saint-Léger-aux-Bois</a></span>
                        </div>
                    </div>
                </div>

                <form action="" id="inscriptionForm" method="post">
                    <div class="identity">
                        <div class="input-box">
                            <input type="text" id="name" required />
                            <label>Nom</label>
                        </div>
                        <div class="input-box">
                            <input type="text" id="firstname" required />
                            <label>Prénom</label>
                        </div>
                    </div>
                    <div class="input-box">
                        <input type="email" id="email" required />
                        <label>Adresse mail</label>
                    </div>
                    <div class="input-box2">
                        <textarea name="area" id="area" cols="60" rows="10"
                            placeholder="Écrivez votre message ici..."></textarea>
                    </div>
                    <button type="submit" class="btn" id="contact" >Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
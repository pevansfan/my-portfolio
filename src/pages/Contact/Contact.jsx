import { useRef, useState } from "react";
import AnimatedSection from "../../components/layouts/AnimatedSection/AnimatedSection";
import GroupTitle from "../../components/layouts/GroupTitle/GroupTitle";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSending(false);
                Swal.fire({
                    title: 'Message envoyé !',
                    text: 'Merci pour votre message, nous vous répondrons bientôt.',
                    icon: 'success',
                    confirmButtonText: 'Fermer'
                });
                formRef.current.reset();
            })
            .catch((error) => {
                setIsSending(false);
                Swal.fire({
                    title: 'Erreur !',
                    text: `Une erreur s’est produite. Veuillez réessayer plus tard.\n${error.text || error}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <AnimatedSection className='Contact section'>
            <div className="presentation">
                <GroupTitle subtitle="" title="Dis bonjour ! et parle-moi" span="de ton idée!" br={true} />
                <p>Tu as passé une bonne journée ? Contacte-moi et discutons.</p>
            </div>

            <div className="contact-form">
                <form ref={formRef} id="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-informations">
                        <div className="input-group">
                            <input type="text" name="user_name" placeholder="Entrer votre nom..." required />
                        </div>
                        <div className="input-group">
                            <input type="email" name="user_email" placeholder="Entrer votre email..." required />
                        </div>
                    </div>

                    <textarea className="message" name="message" placeholder="Écrire un message..." required></textarea>

                    <button className="button-submit" type="submit" disabled={isSending}>
                        {isSending ? "Envoi..." : "Envoyer"}
                    </button>

                    {/* Spinner animé */}
                    {isSending && (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    )}
                </form>
            </div>
        </AnimatedSection>
    );
};

export default Contact;

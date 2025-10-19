import { motion } from "framer-motion";
import qualificationData from "../../../assets/data/qualifications.json";
import "./QualificationSection.css";
import SchoolIcon from "../../icons/SchoolIcon";
import CaseIcon from "../../icons/CaseIcon";
import CalendarIcon from "../../icons/CalendarIcon";

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" }
    })
};

const QualificationSection = () => {
    return (
        <section className="qualification section">
            <h1 className="title">
                Mon <span>Parcours</span>
            </h1>

            <div className="qualification__container container grid">
                {/* Études */}
                <div className="education">
                    <h3 className="qualification__title">
                        <SchoolIcon size={20} /> Études
                    </h3>
                    <div className="timeline">
                        {qualificationData.education.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline__item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                variants={itemVariants}
                            >
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">{item.title}</h3>
                                <p className="timeline__text">{item.text}</p>
                                <span className="timeline__date">
                                    <CalendarIcon size={14} /> {item.date}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Expérience */}
                <div className="experience">
                    <h3 className="qualification__title">
                        <CaseIcon size={20} /> Expérience
                    </h3>
                    <div className="timeline">
                        {qualificationData.experience.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline__item"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                variants={itemVariants}
                            >
                                <div className="circle__dot"></div>
                                <h3 className="timeline__title">{item.title}</h3>
                                <p className="timeline__text">{item.text}</p>
                                <span className="timeline__date">
                                    <CalendarIcon size={14} /> {item.date}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualificationSection;

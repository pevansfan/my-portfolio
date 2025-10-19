import { motion } from "framer-motion";
import "./CardGsap.css";

const CardGsap = ({ index, title, description, link }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-gsap"
        >
            <h1 className="index">{index}</h1>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </motion.div>
    );
}

export default CardGsap;
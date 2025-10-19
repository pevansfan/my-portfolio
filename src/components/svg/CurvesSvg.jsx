import { motion } from "framer-motion";

export default function CurvesSvg({ width, height, style, strokeWidth }) {
    return (
        <svg
            className="curves-icon"
            width={width || "100%"}
            height={height || "100%"}
            style={style}
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Première courbe */}
            <motion.path
                d="M10 40 Q 100 0, 190 40"
                stroke="#E63946"
                strokeWidth={strokeWidth || "10"}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Deuxième courbe */}
            <motion.path
                d="M30 100 Q 100 50, 170 120"
                stroke="#E63946"
                strokeWidth={strokeWidth || "10"}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
            />

            {/* Troisième courbe */}
            <motion.path
                d="M50 160 Q 120 140, 180 180"
                stroke="#E63946"
                strokeWidth={strokeWidth || "10"}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
            />
        </svg>
    );
}

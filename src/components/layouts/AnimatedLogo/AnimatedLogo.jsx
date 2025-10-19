import { useEffect, useState } from "react";
import video from "../../../assets/video/animated-logo.mp4";
import "./AnimatedLogo.css";

export default function AnimatedLogo({ onFinish }) {
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPlaying(false);
            onFinish(); // redirige vers Home
        }, 4000); // durée de la vidéo en ms
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="AnimatedLogo">
            {isPlaying && (
                <video autoPlay muted playsInline className="video-fullscreen">
                    <source src={video} type="video/mp4" />
                </video>
            )}
        </div>

    );
}

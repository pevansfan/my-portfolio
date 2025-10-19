import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitTextReveal({ children, className }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // split du texte
        const split = new SplitText(containerRef.current, {
            types: "lines, words",
        });

        // animation GSAP
        gsap.from(split.lines, {
            yPercent: 120,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 100%",
                end: "bottom 60%",
                scrub: true,
                markers: false, // mets `true` pour debug
            },
        });

        return () => {
            split.revert(); // clean quand le composant est démonté
        };
    }, []);

    return (
        <div ref={containerRef} className={`split-container ${className || ""}`}>
            <div className="split">{children}</div>
        </div>
    );
}

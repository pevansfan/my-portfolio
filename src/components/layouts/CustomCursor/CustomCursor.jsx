import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // Update screen size
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Mouse move tracking
    useEffect(() => {
        if (!isDesktop) return;

        const move = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
    }, [mouseX, mouseY, isDesktop]);

    // Hover effects
    useEffect(() => {
        if (!isDesktop) return;

        const handleHover = (e) => {
            if (e.target instanceof Element && e.target.closest("button, a")) {
                setIsHovering(e.type === "mouseenter");
            }
        };

        document.addEventListener("mouseenter", handleHover, true);
        document.addEventListener("mouseleave", handleHover, true);

        return () => {
            document.removeEventListener("mouseenter", handleHover, true);
            document.removeEventListener("mouseleave", handleHover, true);
        };
    }, [isDesktop]);

    // Apply cursor:none to body only on desktop
    useEffect(() => {
        if (isDesktop) {
            document.body.style.cursor = "none";
        } else {
            document.body.style.cursor = "auto";
        }
    }, [isDesktop]);

    // Render nothing if not desktop
    if (!isDesktop) return null;

    return (
        <motion.div
            className="custom-cursor"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
                width: isHovering ? 40 : 30,
                height: isHovering ? 40 : 30,
                border: isHovering ? "2px solid rgba(246, 14, 14, 0.74)" : "none",
                borderRadius: "50%",
                backgroundColor: isHovering ? "transparent" : "rgba(246, 14, 14, 0.74)",
                pointerEvents: "none",
                zIndex: 9999,
                mixBlendMode: "normal",
                transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
                boxShadow: isHovering ? "0 0 10px rgba(246, 14, 14, 0.74)" : "none",
            }}
        />
    );
}

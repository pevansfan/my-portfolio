// AnimatedHomeBackground.jsx
import React, { useEffect, useRef } from "react";

export default function AnimatedHomeBackground() {
    const elRef = useRef(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        let mounted = true;

        // on charge three + vanta dynamiquement (évite les problèmes SSR / build)
        const load = async () => {
            if (typeof window === "undefined" || !elRef.current) return;

            try {
                const threeModule = await import("three");
                const THREE = threeModule?.default || threeModule;
                // Certaines versions de Vanta recherchent window.THREE
                window.THREE = THREE;

                const vantaModule = await import("vanta/dist/vanta.net.min");
                const NET = vantaModule?.default || vantaModule;

                if (mounted && !vantaRef.current) {
                    vantaRef.current = NET({
                        el: elRef.current,
                        THREE, // passe la lib explicitement
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0xf70808,
                        backgroundColor: 0xffffff,
                    });
                }
            } catch (err) {
                // affichage console utile pour debug
                // eslint-disable-next-line no-console
                console.error("Erreur chargement Vanta:", err);
            }
        };

        load();

        return () => {
            mounted = false;
            if (vantaRef.current && typeof vantaRef.current.destroy === "function") {
                vantaRef.current.destroy();
            }
        };
    }, []);

    // div vide, Vanta injecte un canvas à l'intérieur
    return (
        <div
            ref={elRef}
            className="vanta-bg"
            aria-hidden="true"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                zIndex: -9999,
                pointerEvents: "none",
            }}
        />
    );
}

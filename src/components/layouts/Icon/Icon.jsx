import "./Icon.css";

export default function Icon({ component: Component, size, className }) {
    return (
        <div
            className={`icon ${className}`}
        >
            <Component size={size} />
        </div>
    );
}

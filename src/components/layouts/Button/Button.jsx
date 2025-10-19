import React from "react";
import "./Button.css";

function Button({ children, onClick, className = "", type }) {
    const buttonTypeClass = type === "icon" ? "button-icon" : "button-text";
    return (
        <button
            className={`button ${buttonTypeClass} ${className}`}
            onClick={onClick ? onClick : ""}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;
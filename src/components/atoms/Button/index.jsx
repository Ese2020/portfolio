import React from "react";

export const Button = ({ onClick, children, type, borderRadius }) => {
    if (type === "primary") {
        return (
        <button onClick={onClick} 
        style={{
            backgroundColor: "transparent",
            border: "1px solid purple",
            color: "purple",
            borderRadius,
        }}
        > 
            {children}
        </button>
        );
    }; 

    if (type === "secondary") {
        return (
        <button onClick={onClick} 
        style={{
            backgroundColor: "skyblue",
            border: 0,
            color: "white",
            padding: "10px",
            borderRadius: 3,
        }}
        > 
            {children}
        </button>
        );
    }; 

    if (type === "tertiary") {
        return (
        <button onClick={onClick} 
        style={{
            backgroundColor: "red",
            border: "1px solid red",
            color: "white",
            borderRadius,
        }}
        > 
            {children}
        </button>
        );
    };

    return (
        <button style={{ borderRadius }} onClick={onClick}>
            {children} 
        </button>
    );
};


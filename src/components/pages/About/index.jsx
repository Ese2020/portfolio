import React from "react";
import "./index.css";

export const About = () => {
    return (
        <>
        <div className="about">
            <div className="about-img"></div>
            <div className="about-details">
                <div className="about-header">
                <h1>About Me</h1>
                </div>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium, qui aspernatur deserunt, exercitationem at, quasi asperiores eos aperiam optio voluptatum minus voluptates doloribus quod consectetur ratione provident quidem obcaecati.</p>
                <button className="about-btn">Hire Me</button>
            </div>
        </div>
        </>
    );
};
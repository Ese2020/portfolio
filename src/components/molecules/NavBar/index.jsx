import React from "react";
import { Text } from "../../atoms";
import "./index.css";

export const NavBar = () => {
    return(
        <nav className="nav">
            <div className="container">
            <div className="logo">
                <h1>Ese Paive.</h1>
            </div>

            <div className="nav-list">
                <Text>Home</Text>
                <Text>About</Text>
                <Text>Work</Text>
                <Text>Contact</Text>
            </div>
            <div>
                <button className="down-btn">Resume</button>
            </div>
            </div>
        </nav>
    );
};
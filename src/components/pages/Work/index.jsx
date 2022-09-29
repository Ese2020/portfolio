import React from "react";
import "./index.css";
import { Gallery } from "../../molecules";

export const Work = () => {
    return (
        <>
        <div className="work-header">
            <h1>My Recent Works</h1>
        </div>
        <Gallery />
        </>
    );
};
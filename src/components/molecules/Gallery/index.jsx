import React from "react";
import "./index.css";

export const Gallery = () => {
    return (
        <>
        <div className="grid">
            <div className="grid1">
                <div className="grid-text">
                <h3 className="co-head">Abedelen</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id quae? Officiis recusandae, ab, quis modi ipsum dicta ex obcaecati pariatur dolores sunt qui placeat tenetur tempora nisi deleniti. Odit?</p>
                <button className="grid-btn">Visit the Website</button>
                </div>
            </div>
            <div className="grid2">
            <div className="grid-text">
                <h3 className="co-head" >NPPI</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, id quae? Officiis recusandae, ab, quis modi ipsum dicta ex obcaecati pariatur dolores sunt qui placeat tenetur tempora nisi deleniti. Odit?</p>
                <button className="grid-btn">Visit the website</button>
            </div>
            </div>
        </div>
        </>
    );
};
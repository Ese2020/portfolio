import React from "react";
import "./index.css";

export const Contact = () => {
    return (
        <>
        <div className="contact-container">
        <div className="contact-form">
                <div className="contact-header">
                    <h1>Get In Touch</h1>
                </div>
                <div className="contact-details">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="email" />
                <input type="text" placeholder="subject" />
                <input type="text" placeholder="message" />
                <button className="contact-btn">Send Message</button>
                </div>
            </div>
            <div className="address">
                <div className="box1">
                    <h4>Location</h4>
                    <p>Delta, Nigeria</p>
                </div>
                <div className="box2">
                    <h4>Email</h4>
                    <p>esepaive@gmail.com</p>
                </div>
                <div className="box3">
                    <h4>Phone</h4>
                    <p>+2348068299085</p>
                </div>
            </div>
        </div>
        </>
    )
};
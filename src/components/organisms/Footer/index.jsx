import React from "react";
import "./index.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
       <>
        <footer>
            <div>
            <h1 className="footer-text">Ese Paive.
            </h1>
            <div className="social-media">
                <div>
                    <FaFacebook />
                </div>
                <div>
                    <FaTwitter />
                </div>
                <div>
                    <FaInstagram />
                </div>
                <div>
                    <FaLinkedinIn />
                </div>
            </div>
            <p className="footer-ptext">All Right Reserved © 2021 <b>Ese Paive.</b></p>
            </div>
        </footer>
        </>
    )
};
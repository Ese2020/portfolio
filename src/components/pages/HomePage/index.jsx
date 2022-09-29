import React from "react";
import { NavBar } from "../../molecules";
import { Home, About, Work, Contact } from "../../pages";
import { Footer } from "../../organisms";

export const HomePage = () => {
    return (
        <>
        <NavBar />

        <Home />

        <About />

        <Work />

        <Contact />

        <Footer />
        </>
    )
}
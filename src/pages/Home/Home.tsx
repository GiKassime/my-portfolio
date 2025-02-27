import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";

const Home = () => {
    return (
        <>
            <NavBar />
            <div id="hero">
                <Hero />
            </div>
            <div id="skills">
                <Skills/>
            </div>
            <div id="projects">
                <Projects />
            </div>
            {/* Adicione mais seções conforme necessário */}
        </>
    );
};

export default Home;
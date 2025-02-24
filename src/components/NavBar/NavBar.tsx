import React from "react";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
    // Função para scroll suave
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "rgba(64, 4, 56, 0.33)", backdropFilter: "blur(50px)" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <MenuItem onClick={() => handleScroll("about")}>About</MenuItem>
                <MenuItem onClick={() => handleScroll("projects")}>Projects</MenuItem>
                <MenuItem onClick={() => handleScroll("skills")}>Skills</MenuItem>
                {}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
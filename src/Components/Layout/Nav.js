import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/styleComponents/stylesLayout/Nav.css'


const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/"><b>Inicio</b></NavLink></li>
                <li><NavLink to="/SobreMi"><b>Sobre Mi</b></NavLink></li>
                <li><NavLink to="/Proyectos"><b>Proyectos</b></NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
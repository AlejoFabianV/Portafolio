import React from "react";
import { NavLink } from "react-router-dom";
import '../../Styles/StyleComponents/StylesLayout/Nav.css'


const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="SobreMi">Sobre Mi</NavLink></li>
                <li><NavLink to="Proyectos">Proyectos</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
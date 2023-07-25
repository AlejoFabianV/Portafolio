import React from "react";
import '../styles/stylePages/Inicio.css'

const Inicio = () => {
    return (
        <section className="backGroundInicio">
            <div className="containerInicio">
                <h1 className="titleWelcome">Alejo Verhagen</h1>
                <h1 className="titleWelcome">Developer Full Stack</h1>
                <a className="downloadCV" href='./CV-Verhagen-Alejo.pdf' download>Descargar CV</a>
            </div>
        </section>
    );
}

export default Inicio;
import React from "react";
import '../styles/stylePages/Inicio.css'

const Inicio = () => {
    return (
        <section className="backGroundInicio">
            <div className="containerInicio">
                <h1 className="titleWelcome">Alejo Verhagen</h1>
                <h1 className="titleWelcome">Developer Full Stack</h1>
            </div>
            {/* <div className="backGroundImg">
                <img src={luffyImage} alt="..."/>
            </div> */}
        </section>
    );
}

export default Inicio;
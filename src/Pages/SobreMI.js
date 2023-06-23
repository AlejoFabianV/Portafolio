import React from "react";
import '../Styles/StylePages/SobreMi.css'
import sqlServerImg from '../Img/SQLserver.png'
// import dotnet from '../Img/dotnet.png'

const SobreMi = () => {
    return (
        <section className="backGroundSobreMi">
            <div className="presentation">
                <h3>Hi</h3>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </p>
            </div>
            <div className="containerTecnologies">
                <h3>Tecnologias que manejo</h3>
                <div className="tecnologies">
                    <div>
                        <img src={sqlServerImg} alt="ImgTecnologie" />
                        <h4>SQL Server</h4>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
import React from "react";
import '../Styles/StylePages/SobreMi.css'
import SQLserver from '../Img/SQLserver.png'
import dotnet from '../Img/dotnet.png'

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
                        <img src='https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png' alt="ImgTecnologie" />
                        <h4>JavaScript</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png' alt="ImgTecnologie" />
                        <h4>React.js</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png' style={{background: 'black'}} alt="ImgTecnologie" />
                        <h4>MySQL</h4>
                    </div>
                    <div>
                        <img src={SQLserver} alt="ImgTecnologie" />
                        <h4>SQL Server</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png' alt="ImgTecnologie" />
                        <h4>CSS3</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png' alt="ImgTecnologie" />
                        <h4>HTML5</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png' alt="ImgTecnologie" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png' alt="ImgTecnologie" />
                        <h4>Node.js</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png' alt="ImgTecnologie" />
                        <h4>Express</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png' alt="ImgTecnologie" />
                        <h4>Git</h4>
                    </div>
                    <div>
                        <img src='https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png' alt="ImgTecnologie" />
                        <h4>C#</h4>
                    </div>
                    <div>
                        <img src={dotnet} alt="ImgTecnologie" />
                        <h4>.NET</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
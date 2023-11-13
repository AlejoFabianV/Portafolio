import React from "react";
import '../styles/stylePages/SobreMi.css'
import sqlServerImg from '../Img/SQLserver.png'

const SobreMi = () => {
    return (
        <section className="backGroundSobreMi">
            <div className="presentation">
                <h2>Hola👋</h2>
                <p>Mi nombre es Alejo, estudié psicología en la UBA por tres años hasta que descubrí mi verdadera pasión, la programación. Desde hace más de dos años que soy estudiante autodidacta, también me forme como desarrollador full stack en la Universidad Tecnológica Nacional (UTN). Soy un amante de la tecnología, del aprendizaje constante, en busca de desafios y de dar mis primeros pasos en el mundo IT.
                </p>
                <h2>Tecnologias👨‍💻</h2>
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
                        <img src='https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png' style={{background:'black'}} alt="ImgTecnologie" />
                        <h4>MySQL</h4>
                    </div>
                    <div>
                        <img src={sqlServerImg} alt="ImgTecnologie" />
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
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
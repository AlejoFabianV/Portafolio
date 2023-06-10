import React from "react";
import '../../Styles/StyleComponents/StylesLayout/Footer.css'

const Footer = () => {
    return (
        <footer>
            <p><b>Diseño hecho por Alejo 2023</b></p>
            <div>
                <p><b><a href="https://github.com/AlejoFabianV" target="BLANK"><i className="fa-brands fa-github fa-lg" /> AlejoFVerhagen</a></b></p>
                <p><b><a href="https://www.linkedin.com/in/alejo-fabian-verhagen-2a149822b/" target="BLANK"><i className="fa-brands fa-linkedin" /> Alejo Vehragen</a></b></p>
                <p><b><a href="https://mail.google.com/mail/u/0/#inbox" target="BLANK"><i className="fa-solid fa-envelope" /> verhagenalejo@gmail.com</a></b></p>
            </div>
        </footer>
    );
}

export default Footer;
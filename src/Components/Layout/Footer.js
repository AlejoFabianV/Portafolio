import React from "react";
import '../../Styles/StyleComponents/StylesLayout/Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Diseño hecho por Alejo 2023</p>
            <div>
                <p><a href="https://github.com/AlejoFabianV" target="BLANK"><i className="fa-brands fa-github fa-lg" /> AlejoFVerhagen</a></p>
                <p><a href="https://www.linkedin.com/in/alejo-fabian-verhagen-2a149822b/" target="BLANK"><i className="fa-brands fa-linkedin" /> Alejo Vehragen</a></p>
                <p><a href="https://mail.google.com/mail/u/0/#inbox" target="BLANK"><i className="fa-solid fa-envelope" /> verhagenalejo@gmail.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;
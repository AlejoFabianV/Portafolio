import React from "react";
import '../../styles/styleComponents/stylesLayout/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <p><b><a href="https://github.com/AlejoFabianV" target="BLANK"><i className="fa-brands fa-github fa-lg" /> AlejoFVerhagen</a></b></p>
                <p><b><a href="https://www.linkedin.com/in/alejo-fabian-verhagen-2a149822b/" target="BLANK"><i className="fa-brands fa-linkedin" /> Alejo Vehragen</a></b></p>
                <p><b><i className="fa-solid fa-envelope" /> verhagenalejo@gmail.com</b></p>
            </div>
        </footer>
    );
}

export default Footer;
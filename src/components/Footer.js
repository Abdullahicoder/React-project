import React from "react";
import logo from "../images/Logo .svg"
const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="" />
                    <p>We are family owned mediterraneran restaurant, focus on traditional recipe served with a 
                        modren twist</p>
                </div>
                <div>
                    <h3>Importent links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservation</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Loging</a></li>

                    </ul>

                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Adress: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> +123 456 579</li>
                        <li>Email: <br/> info@littlelomen.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Socail medai Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
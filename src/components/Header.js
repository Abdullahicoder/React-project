import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc
                        ing elit, sed do eiusmod tempor incididunt
                         ut labore et dolore magna aliqua.</p>
                    {/* Use Link component for navigation */}
                    <Link to="/booking">
                        <button aria-label="On click">Reserve Table</button>
                    </Link>
                </div>

                {/* Banner-Img*/}

                <div className="banner-img">
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};

export default Header;

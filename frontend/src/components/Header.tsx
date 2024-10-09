import React from "react";
import logo from "../images/restaurant-logo-template.png";

const Header = () => {
    return (
        <header>
            {/* Logo container*/}
            <div>
                <img src={logo} />
            </div>
        </header>
    );
};

export default Header;

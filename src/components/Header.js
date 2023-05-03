import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/"){
            setActiveTab("Home"); }
        else if (location.pathname === "/add"){
            setActiveTab("AddContact"); }
        else if (location.pathname === "/about"){
            setActiveTab("About"); }}, [location]);

    return(
        <div className="header">
            <p className="game">Hotels</p>
            <div className="header-right align-items-center">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}>
                            Home
                    </p>
                    <p></p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddContact" ? "active" : ""}`}
                        onClick={() => setActiveTab("AddContact")}>
                            Add Reservation
                    </p><p></p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                        onClick={() => setActiveTab("About")}>
                            About
                    </p><p></p>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;
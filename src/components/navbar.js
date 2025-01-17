import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';
import logo from '../carnival logo.png'; // Update the path to your logo image
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <nav className="navbar">
            <div className="navbar-links-left">
                <ul className="navbar-logo">

                    <Link to="/">
                        <img src={logo} alt="Home" className="navbar-logo-image" />
                    </Link>
                    <Link to="/cruises">Plan a Cruise</Link>
                    <Link to="/about">Our Ships</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/deals">Deals</Link>
                    <Link to="/vifp club">VIFP Club</Link>
                    <Link to="/bookings">Manage Bookings</Link>
                </ul>
            </div>
            <div className="navbar-links-right">
                <Link to="/search">
                    <FaSearch />
                </Link>
                {/* <Link to="/login">
                    <FaUser /> Login
                </Link> */}
                {isAuthenticated && <p>Welcome, {user.name} &nbsp;</p>}
                {isAuthenticated ? 
                <button className="LogOut-Button" onClick={() => logout({ returnTo: window.location.origin })}><FaUser /> Log Out
                </button> : <button className="LogIn-Button" onClick={() => loginWithRedirect()}><FaUser /> Log In</button>}

            </div>

        </nav>
    );
};

export default Navbar;
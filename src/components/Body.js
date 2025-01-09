import React from "react";
import "../App.css"; // Create CSS for styling
import Cruise from '../Cruise-ship.jpg';
import RoomUpgrade from '../$1 room upgrade.avif';

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* Background Image and Banner */}
            <div className="hero-banner">
                <img src={Cruise} alt="Cruise Background" className="hero-image" />
                <div className="hero-overlay">
                    <img src={RoomUpgrade} alt="$1 Room Upgrade" className="Room-upgrade-image" />
                    <br/>
                    <button className="search-cruise-button">Search Cruises</button>
                    <br/>
                    <br/>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <div className="dropdowns">
                            <select>
                                <option>Sail To</option>
                                <option>Bahamas</option>
                                <option>Caribbean</option>
                            </select>
                            <select>
                                <option>Sail From</option>
                                <option>Miami</option>
                                <option>Los Angeles</option>
                            </select>
                            <select>
                                <option>Dates</option>
                                <option>January 2025</option>
                                <option>February 2025</option>
                            </select>
                            <select>
                                <option>Duration</option>
                                <option>3-5 Days</option>
                                <option>7 Days</option>
                            </select>
                        </div>
                        <button className="search-button">Search Cruises</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;
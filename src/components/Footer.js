
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    

    
    <footer className="footer">
      
      <div className="footer-section">
        
        <div className="footer-column">
          <h4>Plan A Cruise</h4>
          <ul>
            <li><a href="#todays-deals">Today's Deals</a></li>
            <li><a href="#search-cruises">Search Cruises</a></li>
            <li><a href="#family-cruises">Family Cruises</a></li>
            <li><a href="#weddings-occasions">Weddings & Occasions</a></li>
            <li><a href="#vip-club">VIFP Club</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Cruise Destinations</h4>
          <ul>
            <li><a href="#caribbean-cruises">Caribbean Cruises</a></li>
            <li><a href="#mexico-cruises">Mexico Cruises</a></li>
            <li><a href="#alaska-cruises">Alaska Cruises</a></li>
            <li><a href="#hawaii-cruises">Hawaii Cruises</a></li>
            <li><a href="#australia-cruises">Australia Cruises</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Already Booked</h4>
          <ul>
            <li><a href="#manage-booking">Manage My Cruises</a></li>
            <li><a href="#shore-excursions">Shore Excursions</a></li>
            <li><a href="#internet-plans">Internet Plans</a></li>
            <li><a href="#spa-services">Spa & Salon Services</a></li>
            <li><a href="#airport-transport">Airport Transportation</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#post-cruise">Post Cruise Inquiries</a></li>
            <li><a href="#disabilities">Guests with Disabilities</a></li>
            <li><a href="#legal">Legal Notices</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Corporate</h4>
          <ul>
            <li><a href="#sustainability">Sustainability</a></li>
            <li><a href="#business-ethics">Business Ethics</a></li>
            <li><a href="#diversity">Diversity, Equity, and Inclusion</a></li>
            <li><a href="#investor-relations">Investor Relations</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Carnival Clone. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

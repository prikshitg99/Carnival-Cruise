import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Marquee from './components/Marquee';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar component */}
        <Marquee /> {/* Marquee component */}
        <Body /> {/* Body component */}
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/cruises" element={<h2>Plan a Cruise Page</h2>} />
          <Route path="/about" element={<h2>About Our ships</h2>} />
          <Route path="/destinations" element={<h2>Destinations Page</h2>} />
          <Route path="/deals" element={<h2>Deals Page</h2>} />
          <Route path="/vifp club" element={<h2>VIFP Club Page</h2>} />
          <Route path="/bookings" element={<h2>Manage Bookings Page</h2>} />


        </Routes>
        <Footer /> {/* Footer component */}

      </div>
    </Router>
  );
};

export default App;
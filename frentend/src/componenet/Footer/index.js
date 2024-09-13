import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Top info for key company features */}
        <div className="topInfo row">
          <div className="col d-flex align-item-center">
            <span className="mi-2">Environmentally Friendly Recycling</span>
          </div>
          <div className="col d-flex align-item-center">
            <span className="mi-2">Nationwide Scrap Collection</span>
          </div>
          <div className="col d-flex align-item-center">
            <span className="mi-2">Efficient & Safe Disposal</span>
          </div>
          <div className="col d-flex align-item-center">
            <span className="mi-2">Competitive Market Pricing</span>
          </div>
        </div>

        {/* Service and Company Information */}
        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>OUR SERVICES</h5>
            <ul>
              <li><Link to="#">Scrap Metal Recycling</Link></li>
              <li><Link to="#">Industrial Waste Management</Link></li>
              <li><Link to="#">Vehicle Disposal</Link></li>
              <li><Link to="#">Iron & Steel Collection</Link></li>
              <li><Link to="#">Eco-Friendly Solutions</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>ABOUT US</h5>
            <ul>
              <li><Link to="#">Our Mission</Link></li>
              <li><Link to="#">Our Team</Link></li>
              <li><Link to="#">Sustainability Commitment</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Testimonials</Link></li>
            </ul>
          </div>

          <div className="col">
            <h5>CONTACT</h5>
            <ul>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Schedule a Pickup</Link></li>
              <li><Link to="#">Find a Location</Link></li>
              <li><Link to="#">Support</Link></li>
            </ul>
          </div>
          
          <div className="col">
            <h5>FOLLOW US</h5>
            <ul className="social-links">
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">LinkedIn</Link></li>
              <li><Link to="#">Instagram</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">© 2024 Iron Garbage Collection. All rights reserved.</p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
            <li className="list-inline-item"><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

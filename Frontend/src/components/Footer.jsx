import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="shopnest-footer">
      <div className="footer-glow" />

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <i className="footer-bag">S</i>
            </span>
            <span>
              ShopNest<span className="footer-dot">.</span>
            </span>
          </Link>

          <p className="footer-description">
            Your style. Your choice. Your nest.
          </p>

          <p className="footer-tagline">
            Discover products you'll love and make every shopping experience
            special.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>
          <Link to="/shop">Shop Products</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Customer care */}
        <div className="footer-column">
          <h3>Customer Care</h3>
          <Link to="/return">Return Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>

        {/* Newsletter presentation */}
        <div className="footer-newsletter">
          <h3>Stay in the loop.</h3>
          <p>Get inspired by the latest products and shopping trends.</p>

          <Link to="/shop" className="footer-cta">
            Explore Shop <span>→</span>
          </Link>
        </div>
      </div>

      {/* Trust highlights */}
      <div className="footer-benefits">
        <div className="footer-benefit">
          <span className="benefit-icon">✓</span>
          <span>Secure Shopping</span>
        </div>

        <div className="footer-benefit">
          <span className="benefit-icon">↻</span>
          <span>Easy Returns</span>
        </div>

        <div className="footer-benefit">
          <span className="benefit-icon">♡</span>
          <span>Made for You</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ShopNest. All rights reserved.</p>

        <p className="footer-made">
          Crafted with <span>♥</span> for shoppers
        </p>
      </div>
    </footer>
  );
};

export default Footer;

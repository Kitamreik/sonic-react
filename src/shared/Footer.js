import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
//const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-container-group">
        <h3>VISIT US</h3>
        <span>
          Kit Cloud Services
          <br />
          10101 Coder Avenue
          <br />
         Denver, Colorado
        </span>
      </div>
      <div className="footer-container-group">
        <h3>LINKS</h3>
        <ul className="navbar" id="nav-menu">
          <li>
          <Link to="/">HOME</Link>
          </li>
          <li>
          <Link to="/about">ABOUT</Link>
          </li>
          <li>
          <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="footer-container-group">
        <h3>FOLLOW US</h3>
        <div className="footer-container-font-awesome">
          <button>
            <i className="fab fa-facebook"></i>
          </button>
          <button>
            <i className="fab fa-instagram"></i>
          </button>
          <button>
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>
      <div className="footer-container-group">
        <h3>A PRODUCT OF</h3>
        <a
          href="http://codesquad.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
        </a>
      </div>
    </footer>
  );
};

export default Footer;
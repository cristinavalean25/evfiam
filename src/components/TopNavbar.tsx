import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../CssPages/TopNavbar.css";

function TopNavbar() {
  return (
    <div className="main-container">
      <div className="top-navbar-container">
        <div className="row p-2">
          <div className="col-md-6 d-flex align-items-center">
            <FaMapMarkerAlt className="ms-4 me-2" />
            <Link
              to="https://www.google.com/maps/place/Strada+Gradinarilor+nr.+6,+Sibiu"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Strada Gradinarilor nr. 6
            </Link>
            <span className="mx-4">/</span>
            <FaEnvelope className="me-2" />
            <a href="mailto:office@evfiam.com" className="navbar-link">
              office@evfiam.com
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            <FaPhone className="me-2" />
            <a href="tel:+40753082874" className="navbar-link">
              +40 753 082 874
            </a>
            <span className="mx-4">/</span>
            <div className="social-links">
              <Link
                to="https://www.facebook.com/evfiam"
                target="_blank"
                className="social-link"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.instagram.com/evfiam/"
                target="_blank"
                className="social-link"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

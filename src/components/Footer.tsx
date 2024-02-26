import { Link } from "react-router-dom";
import "../CssPages/Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="second-footer">
          <div className="black-footer">
            <div className="column-group">
              <div className="column-second-group">
                <p className="evf-title">EVFIAM INVESTMENT GROUP SRL</p>
                <p className="text-footer">
                  <Link
                    to="https://www.google.com/maps/place/Strada+Gradinarilor+nr.+4,+Sibiu"
                    style={{ textDecoration: "none", color: "#476788" }}
                    target="_blank"
                  >
                    Strada Gradinarilor nr. 4, Sibiu
                  </Link>
                </p>
              </div>
              <div className="column-second-group">
                <Link to="tel:+40753082874" className="text-footer">
                  Phone: +40 745 985 832
                </Link>

                <p>
                  <Link to="mailto:office@evfiam.com" className="text-footer">
                    Email: office@evfiam.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="line-footer"></div>

            <div className="secound-footer-details">
              <span style={{ color: "#476788" }}>© Copyright 2024 </span>
              <span style={{ color: "#ED5E9F" }}>EVFIAM INVESTMENT GROUP</span>
              <span style={{ color: "#476788" }}>All Rights Reserved </span>
              <span style={{ color: "#476788" }}>
                Powered by{" "}
                <span>
                  <Link to="https://gesp.io/" target="blank">
                    GESP IT SOLUTION
                  </Link>
                </span>
              </span>
            </div>

            <div className="icon-footer">
              <Link
                to="https://www.facebook.com/evfiam"
                target="blank"
                style={{ color: "#0B3558", marginRight: "10px" }}
              >
                <FaFacebook />
              </Link>

              <Link
                to="https://www.instagram.com/evfiam/"
                target="blank"
                style={{ color: "#0B3558", marginRight: "10px" }}
              >
                <FaInstagram />
              </Link>

              <Link to="/" style={{ color: "#0B3558", marginRight: "10px" }}>
                <FaTimes />
              </Link>

              <Link to="/" style={{ color: "#0B3558", marginRight: "10px" }}>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

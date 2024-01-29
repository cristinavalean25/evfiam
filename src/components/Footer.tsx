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
              <div>
                <p
                  style={{
                    color: "#ED5E9F",
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  EVFIAM INVESTMENT GROUP SRL
                </p>
                <p className="text-footer">
                  str. Gradinarilor, nr. 4 Sibiu, 550129, Romania
                </p>
              </div>
              <div>
                <p className="text-footer">Phone: +40 745 985 832</p>
                <p className="text-footer">Email: office@evfiam.com</p>
              </div>
            </div>

            <div className="line-footer"></div>

            <div className="secound-footer-details">
              <span style={{ color: "#796F67" }}>© Copyright 2024 |</span>
              <span style={{ color: "#ED5E9F" }}>
                EVFIAM INVESTMENT GROUP <span>|</span>
              </span>
              <span style={{ color: "#796F67" }}>All Rights Reserved |</span>
              <span style={{ color: "#796F67" }}>
                Powered by <span>GESP IT SOLUTION</span>
              </span>
            </div>

            <div className="icon-footer">
              <Link
                to="https://www.facebook.com/evfiam"
                target="blank"
                style={{ color: "#E91E63", marginRight: "10px" }}
              >
                <FaFacebook />
              </Link>

              <Link
                to="https://www.instagram.com/evfiam/"
                target="blank"
                style={{ color: "#E91E63", marginRight: "10px" }}
              >
                <FaInstagram />
              </Link>

              <Link to="/" style={{ color: "#E91E63", marginRight: "10px" }}>
                <FaTimes />
              </Link>

              <Link to="/" style={{ color: "#E91E63", marginRight: "10px" }}>
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

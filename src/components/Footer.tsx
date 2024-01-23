import { Link } from "react-router-dom";
import "../CssPages/Footer.css";
import acrImg from "../images/Logo-CECCAR-conta-123.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="secound-container-footer">
          {/* 
          <div className="row">
            <div className="column-icon">
              <p
                style={{ color: "#ED5E9F", fontSize: "22px", fontWeight: 600 }}
              >
                Urmareste-ne pe
              </p>
              <div className="icon-footer">
                <Link
                  to="https://www.facebook.com/evfiam"
                  target="blank"
                  style={{ color: "#2779FF" }}
                >
                  <FaFacebook />
                </Link>

                <Link
                  to="https://www.instagram.com/evfiam/"
                  target="blank"
                  style={{ color: "#EA6238" }}
                >
                  <FaInstagram />
                </Link>

                <Link to="/" style={{ color: "#000" }}>
                  <FaTimes />
                </Link>

                <Link to="/" style={{ color: "red" }}>
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div> */}

          <div className="row">
            <div className="column-group">
              <p
                style={{ color: "#ED5E9F", fontSize: "24px", fontWeight: 600 }}
              >
                EVFIAM INVESTMENT GROUP SRL
              </p>
              <p className="text-footer">
                str. Gradinarilor, nr. 6 Sibiu, 550129, Romania
              </p>
              <p className="text-footer">Phone: +40 753 082 874</p>
              <p className="text-footer">Email: office@evfiam.com</p>
            </div>
          </div>

          <div className="row footer-row">
            <div className="column-home">
              <div className="details-footer">
                <p
                  style={{
                    color: "#ED5E9F",
                    fontSize: "22px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  Acreditari
                </p>
                <img src={acrImg} alt="acreditari" className="img-acreditari" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="column-group">
              <p
                style={{ color: "#ED5E9F", fontSize: "24px", fontWeight: 600 }}
              >
                EVFIAM AUDIT $ ACCOUNTANCY SRL
              </p>
              <p className="text-footer">
                str. Gradinarilor, nr. 6 Sibiu, 550129, Romania
              </p>
              <p className="text-footer">Phone: +40 753 082 874</p>
              <p className="text-footer">Email: office@evfiam.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="secound-footer">
        <div className="black-footer">
          <div className="secound-footer-details">
            <span style={{ color: "#796F67" }}>© Copyright 2024 |</span>
            <span style={{ color: "#ED5E9F" }}>
              EVFIAM INVESTMENT GROUP <span>|</span>
            </span>
            <span style={{ color: "#796F67" }}>All Rights Reserved |</span>
            <span style={{ color: "#796F67" }}>
              Powered by <span>ESTEFANIS SOLUTIONS</span>
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
    </>
  );
}

export default Footer;

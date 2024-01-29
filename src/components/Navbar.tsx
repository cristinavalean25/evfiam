import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/Logo_default.png";
import "../CssPages/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <BootstrapNavbar expand="lg" className="line-navbar">
          <BootstrapNavbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                width="120"
                height="35"
                className="d-inline-block align-top ms-1"
              />
            </Link>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Infiinteaza Firma" id="infiinteaza-dropdown">
                <Link to="/Srl" className="dropdown-item">
                  Infiinteaza SRL
                </Link>
                <Link to="/Pfa" className="dropdown-item">
                  Infiinteaza PFA
                </Link>
              </NavDropdown>
              <Link to="/ModificaFirma" className="nav-link">
                Modifica Firma
              </Link>
              <Link to="/AutorizatiiFirma" className="nav-link">
                Autorizatii de Functionare
              </Link>
              <Link to="/Osim" className="nav-link">
                Inregistrare Marca OSIM
              </Link>
              <Link
                to="https://evfiam.com/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contabilitate
              </Link>
              <Link to="/AboutUs" className="nav-link">
                Despre Noi
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </div>
    </>
  );
}

export default Navbar;

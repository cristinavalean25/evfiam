import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../images/Logo_default.png";
import "../CssPages/Navbar.css";

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <>
      <div className="navbar-container">
        <BootstrapNavbar
          expand="lg"
          className="line-navbar"
          expanded={expanded}
        >
          <BootstrapNavbar.Brand>
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="Logo"
                width="120"
                height="35"
                className="d-inline-block align-top ms-1"
              />
            </Link>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Infiinteaza Firma" id="infiinteaza-dropdown">
                <Link to="/srl" className="dropdown-item" onClick={closeMenu}>
                  Infiinteaza SRL
                </Link>
                <Link to="/pfa" className="dropdown-item" onClick={closeMenu}>
                  Infiinteaza PFA
                </Link>
              </NavDropdown>
              <Link
                to="/modifica-firma"
                className="nav-link"
                onClick={closeMenu}
              >
                Modifica Firma
              </Link>
              <Link
                to="/autorizatii-firma"
                className="nav-link"
                onClick={closeMenu}
              >
                Autorizatii de Functionare
              </Link>
              <Link to="/osim" className="nav-link" onClick={closeMenu}>
                Inregistrare Marca OSIM
              </Link>
              <Link
                to="https://evfiam.com/"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Contabilitate
              </Link>
              <Link to="/despre-noi" className="nav-link" onClick={closeMenu}>
                Despre Noi
              </Link>
              <Link to="/contact" className="nav-link" onClick={closeMenu}>
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

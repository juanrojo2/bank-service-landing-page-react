import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDoorLockFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <RiDoorLockFill className="navbar-icon" />
            REFUREST
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Pagina Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Productos
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/singUp" className="btn-link">
                  <Button buttonStyle="btn--outline">SING UP</Button>
                </Link>
              ) : (
                <Link to="/singUp" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SING UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

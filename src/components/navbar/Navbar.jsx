import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#porque">Por qué MSInvs</a>
      </p>
      <p>
        <a href="#quienes">Quiénes somos</a>
      </p>
      <p>
        <a href="#como">Cómo funciona</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="msinvs__navbar">
      <div className="msinvs__navbar-links">
        <div className="msinvs__navbar-links_logo">
          <h1>
            <a href="#home">MSInvs</a>
          </h1>
        </div>
        <div className="msinvs__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="msinvs__navbar-sign">
        <button type="button">Comienza a invertir</button>
      </div>
      <div className="msinvs__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#031b34"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#031b34"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="msinvs__navbar-menu_container scale-up-center">
            <div className="msinvs__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="msinvs__navbar-menu_container-links-sign">
              <button type="button">Comienza a invertir</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

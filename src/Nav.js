import React, { useEffect, useState } from "react";
//import NetflixLogo from "./img/NetflixLogo.png";
import NavLo from "./img/NavLo.png";
import NetflixLog from "./img/NetflixLog.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={NetflixLog} alt="Netflix logo" />
      <img className="nav_avatar" src={NavLo} alt="Netflix logo" />
    </div>
  );
}

export default Nav;

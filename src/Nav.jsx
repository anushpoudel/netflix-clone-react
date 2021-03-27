import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  // When scroll is a 100px (down in page) we add the navbar visibilty
  // if not remove visibility on navbar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      {/* Big main logo */}
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt=""
      />
      {/* Small corner logo */}
      <img
        className="nav_avatar"
        src="http://pngimg.com/uploads/netflix/netflix_PNG8.png"
        alt=""
      />
    </div>
  );
}

export default Nav;

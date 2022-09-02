import React, { useEffect, useState } from 'react'
import "./nav.css"

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt=""
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/1200x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg"
        alt="aavtar"
      />
    </div>
  );
}

export default Nav
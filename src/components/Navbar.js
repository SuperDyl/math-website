import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function NavItem({ link, text, active = false }) {
  const linkClass = "nav-link" + (active ? " active" : "");
  return (
    <li className="nav-item">
      <Link className={linkClass} to={link}>
        {text}
      </Link>
    </li>
  );
}

function Navbar({ active = null }) {
  const headerItems = [
    {
      link: "/Addition",
      text: "Addition"
    },
    {
      link: "/Subtraction",
      text: "Subtraction"
    },
    {
      link: "/Multiplication",
      text: "Multiplication"
    },
    {
      link: "/Division",
      text: "Division"
    }
  ];

  let logoActive = true;

  headerItems.forEach(item => {
    if (active !== null && active !== undefined && active === item.text) {
      item.active = true;
      logoActive = false;
    }
  });

  const logoClass = "navbar-brand" + (logoActive ? " active" : "");

  return (
    <nav id="navbarNav" className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className={logoClass} to="/">
        <img src={require("../images/a-cute-angle.jpg")} alt="A cute angle" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {headerItems.map(({ link, text, active = false }) =>
            <NavItem
              key={"navitem-" + text}
              link={link}
              text={text}
              active={active}
            />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

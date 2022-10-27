import React from "react";

function NavItem({ link, text }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {text}
      </a>
    </li>
  );
}

function Navbar(props) {
  const headerItems = [
    {
      link: "./addition",
      text: "Addition"
    },
    {
      link: "./subtraction",
      text: "Subtraction"
    },
    {
      link: "./multiplication",
      text: "Multiplication"
    },
    {
      link: "./division",
      text: "Division"
    }
  ];
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand active" href="#">
        <img src={require("../images/a-cute-angle.jpg")} />
      </a>
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
          {headerItems.map(({ link, text }) =>
            <NavItem link={link} text={text} />
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

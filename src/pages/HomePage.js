import React from "react";
import Navbar from "../components/Navbar";
import "./styles.css";
import { Link } from "react-router-dom";
import MathPractice from "../components/MathPractice";

function HomePage({ children, ...other }) {
  return (
    <div className="reading-pane">
      <Navbar />
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

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/Addition">
                Addition
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Subtraction">
                Subtraction
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Multiplication">
                Multiplication
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Division">
                Division
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="page-content">
        <h1>The Website of Mathematics</h1>

        <p>
          Mathematics is an area of knowledge that includes such topics as
          numbers formulas and related structures shapes and the spaces in which
          they are contained and quantities and their changes.{" "}
          <a href="https://en.wikipedia.org/wiki/Mathematics">Source</a>
        </p>

        <hr />

        <h2>Topics</h2>
        <ul>
          <li>
            <Link to="/Addition">Addition</Link>: The addition of two whole
            numbers results in the total amount or sum of those values combined.
          </li>
          <li>
            <a href="./subtraction/index.html">Subtraction</a>: an arithmetic
            operation that represents the operation of removing objects from a
            collection.
          </li>
          <li>
            <a href="./multiplication/index.html">Multiplication</a>: may be
            thought of as repeated addition.
          </li>
          <li>
            <a href="./division/index.html">Division</a>: At an elementary level
            the division of two natural numbers is the process of calculating
            the number of times one number is contained within another.
          </li>
        </ul>
        <hr />

        <h2>Practice</h2>
        <MathPractice operation="random" />

        <hr />
        <p>
          Dear Algebra please stop asking us to find your X. She's never coming
          back and don't ask Y.
        </p>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme1.jpg")}
                width="100%"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme2.jpg")}
                width="100%"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme3.jpg")}
                width="100%"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme4.jpg")}
                width="100%"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme5.png")}
                width="100%"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme6.png")}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          <a href="https://github.com/SuperDyl/math-website">GitHub</a> | Design
          by the Fabulous Ryan Harper and his sidekick Dylan Jones
        </p>
      </div>
    </div>
  );
}

export default HomePage;

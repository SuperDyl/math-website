import React from "react";
import MathPractice from "../components/MathPractice.js";
import "./styles.css";

function Addition({ children, ...other }) {
  return (
    <div className="reading-pane">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="../">
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
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Addition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../subtraction/">
                Subtraction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../multiplication/">
                Multiplication
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../division/">
                Division
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="page-content">
        <h1>Addition</h1>

        <p>
          Addition (usually signified by the plus symbol +) is one of the four
          basic operations of arithmetic, the other three being subtraction,
          multiplication and division.The addition of two whole numbers results
          in the total amount or sum of those values combined. The example in
          the adjacent image shows a combination of three apples and two apples,
          making a total of five apples. This observation is equivalent to the
          mathematical expression "3 + 2 = 5" (that is, "3 plus 2 is equal to
          5"). Addition has several important properties. It is commutative,
          meaning that order does not matter, and it is associative, meaning
          that when one adds more than two numbers, the order in which addition
          is performed does not matter. Repeated addition of 1 is the same as
          counting. Addition of 0 does not change a number. Addition also obeys
          predictable rules concerning related operations such as subtraction
          and multiplication.
          <a href="https://en.wikipedia.org/wiki/Addition">Source</a>
        </p>

        <img src={require("../images/addition.jpg")} className="pageImage" />

        {/*
        <h2>Practice</h2>
        <MathPractice operation="add" />
        */}
        
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

export default Addition;

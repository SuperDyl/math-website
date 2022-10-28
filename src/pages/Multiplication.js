import React from "react";
import MathPractice from "../components/MathPractice.js";
import Navbar from "../components/Navbar.js";
import "./styles.css";

function Multiplication({ children, ...other }) {
  return (
    <div className="reading-pane">
      <Navbar active="Multiplication" />
      <div className="page-content">
        <h1>Multiplication</h1>
        <p>
          Multiplication (often denoted by the cross symbol ×, by the mid-line
          dot operator ⋅, by juxtaposition, or, on computers, by an asterisk *)
          is one of the four elementary mathematical operations of arithmetic,
          with the other ones being addition, subtraction, and division. The
          result of a multiplication operation is called a product. The
          multiplication of whole numbers may be thought of as repeated
          addition; that is, the multiplication of two numbers is equivalent to
          adding as many copies of one of them, the multiplicand, as the
          quantity of the other one, the multiplier. Both numbers can be
          referred to as factors.
          <a href="https://en.wikipedia.org/wiki/Multiplication">Source</a>
        </p>
        <img
          src={require("../images/multiplication.png")}
          className="pageImage"
        />
        {/*
        `<h2>Practice</h2>
        <MathPractice operation="mul" />
        */}
      </div>
      <div className="footer">
        <p>
          <a href="https://github.com/SuperDyl/math-website/tree/react-ify">GitHub</a> | Design
          by the Fabulous Ryan Harper and his sidekick Dylan Jones
        </p>
      </div>
    </div>
  );
}

export default Multiplication;

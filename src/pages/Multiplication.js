import React from "react";
// import MathPractice from "../components/MathPractice.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
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
          alt="dots arranged as 3 rows of 4 columns is 12 dots in total, just as 3 times 4 is 12"
        />
        {/*
        `<h2>Practice</h2>
        <MathPractice operation="mul" />
        */}
      </div>
      <Footer />
    </div>
  );
}

export default Multiplication;

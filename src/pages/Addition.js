import React from "react";
// import MathPractice from "../components/MathPractice.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function Addition({ children, ...other }) {
  return (
    <div className="reading-pane">
      <Navbar active="Addition" />

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

        <img
          src={require("../images/addition.jpg")}
          className="pageImage"
          alt="Example '4+6=10'. 10 is the sum because it is what you get from combining 4 and 6"
        />

        {/*
        <h2>Practice</h2>
        <MathPractice operation="add" />
        */}
      </div>
      <Footer />
    </div>
  );
}

export default Addition;

import React from "react";
// import MathPractice from "../components/MathPractice.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import "./styles.css";

function Subtraction({ children, ...other }) {
  return (
    <div className="reading-pane">
      <Navbar active="Subtraction" />
      <div className="page-content">
        <h1>Subtraction</h1>

        <p>
          Subtraction is an arithmetic operation that represents the operation
          of removing objects from a collection. Subtraction is signified by the
          minus sign, −. While primarily associated with natural numbers in
          arithmetic, subtraction can also represent removing or decreasing
          physical and abstract quantities using different kinds of objects
          including negative numbers, fractions, irrational numbers, vectors,
          decimals, functions, and matrices. Subtraction follows several
          important patterns. It is anticommutative, meaning that changing the
          order changes the sign of the answer. It is also not associative,
          meaning that when one subtracts more than two numbers, the order in
          which subtraction is performed matters. Because 0 is the additive
          identity, subtraction of it does not change a number. Subtraction also
          obeys predictable rules concerning related operations, such as
          addition and multiplication. All of these rules can be proven,
          starting with the subtraction of integers and generalizing up through
          the real numbers and beyond. General binary operations that follow
          these patterns are studied in abstract algebra.
          <a href="https://en.wikipedia.org/wiki/Subtraction">Source</a>
        </p>

        <img src={require("../images/subtraction.png")} className="pageImage" />

        {/*
        <h2>Practice</h2>
        <MathPractice operation="sub" />
        */}
      </div>
      <Footer />
    </div>
  );
}

export default Subtraction;

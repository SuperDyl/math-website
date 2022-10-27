import React from "react";
import "./styles.css";

function Subtraction({ children, ...other}) {
    return(
        <div class="reading-pane">
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
              <a class="navbar-brand" href="../">
                <img src="../images/a-cute-angle.jpg" />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="../addition/">Addition</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Subtraction</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../multiplication/">Multiplication</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../division/">Division</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="page-content">
              <h1>Subtraction</h1>
        
            <p>
                Subtraction is an arithmetic operation that represents the operation of
                removing objects from a collection. Subtraction is signified by the
                minus sign, −. While primarily associated with natural numbers in
                arithmetic, subtraction can also represent removing or decreasing
                physical and abstract quantities using different kinds of objects
                including negative numbers, fractions, irrational numbers, vectors,
                decimals, functions, and matrices. Subtraction follows several important
                patterns. It is anticommutative, meaning that changing the order changes
                the sign of the answer. It is also not associative, meaning that when
                one subtracts more than two numbers, the order in which subtraction is
                performed matters. Because 0 is the additive identity, subtraction of it
                does not change a number. Subtraction also obeys predictable rules
                concerning related operations, such as addition and multiplication. All
                of these rules can be proven, starting with the subtraction of integers
                and generalizing up through the real numbers and beyond. General binary
                operations that follow these patterns are studied in abstract algebra.
                <a href="https://en.wikipedia.org/wiki/Subtraction">Source</a>
            </p>
        
            <img src="./images/subtraction.png" class="pageImage" />
        
            <h2>
                Practice
            </h2>
            <div class="practice-box">
        
                <div class="practice-box-equation">
                  <span>
                    <span id="practice-expression"></span> =
                  </span>
                  <input id="user-answer"/>
                </div>
                <div class="practice-box-buttons">
                  <button id="another">
                    Another
                  </button>
                  <button id="check-button">
                    Check
                  </button>
                </div>
            </div>
        
            </div>
            <div class="footer">
              <p>
                <a href="https://github.com/SuperDyl/math-website">GitHub</a> | Design by the Fabulous Ryan Harper and his
                sidekick Dylan Jones
              </p>
            </div>
        
        </div>
    )
}

export default Subtraction;
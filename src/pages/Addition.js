import React from "react";
import "./styles.css";

function Addition({ children, ...other}) {
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
                    <a class="nav-link active" href="#">Addition</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../subtraction/">Subtraction</a>
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
              <h1>Addition</h1>
        
              <p>
                Addition (usually signified by the plus symbol +) is one of the four
                basic operations of arithmetic, the other three being subtraction,
                multiplication and division.The addition of two whole numbers results in
                the total amount or sum of those values combined. The example in the
                adjacent image shows a combination of three apples and two apples,
                making a total of five apples. This observation is equivalent to the
                mathematical expression "3 + 2 = 5" (that is, "3 plus 2 is equal to 5").
                Addition has several important properties. It is commutative, meaning
                that order does not matter, and it is associative, meaning that when one
                adds more than two numbers, the order in which addition is performed
                does not matter. Repeated addition of 1 is the same as
                counting. Addition of 0 does not change a number. Addition also obeys
                predictable rules concerning related operations such as subtraction and
                multiplication.
                <a href="https://en.wikipedia.org/wiki/Addition">Source</a>
              </p>
        
              <img src="./images/addition.jpg" class="pageImage" />
        
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

export default Addition;
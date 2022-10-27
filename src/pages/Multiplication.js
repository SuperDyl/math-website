import React from "react";
import "./styles.css";

function Multiplication({ children, ...other}) {
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
                    <a class="nav-link" href="../subtraction/">Subtraction</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Multiplication</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../division/">Division</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="page-content">
              <h1>Multiplication</h1>
            
              <p>
                Multiplication (often denoted by the cross symbol ×, by the mid-line dot
                operator ⋅, by juxtaposition, or, on computers, by an asterisk *) is one
                of the four elementary mathematical operations of arithmetic, with the
                other ones being addition, subtraction, and division. The result of a
                multiplication operation is called a product. The multiplication of
                whole numbers may be thought of as repeated addition; that is, the
                multiplication of two numbers is equivalent to adding as many copies of
                one of them, the multiplicand, as the quantity of the other one, the
                multiplier. Both numbers can be referred to as factors.
                <a href="https://en.wikipedia.org/wiki/Multiplication">Source</a>
              </p>
            
              <img src="./images/multiplication.png" class="pageImage" />
            
              `<h2>
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

export default Multiplication;
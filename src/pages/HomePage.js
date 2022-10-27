import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";

// let answer = 0;

// function mathWiz(opp) {
//   const url = "https://x-math.herokuapp.com/api/" + opp;
//   const item = document.getElementById("practice-expression");

//   fetch(url)
//     .then(function(r) {
//       return r.json();
//     })
//     .then(function(e) {
//       answer = e.answer;
//       console.log(answer);

//       let expression = document.createTextNode(e.expression);
//       // item.removeChild();
//       item.appendChild(expression);
//     });
// }

// window.onload = function() {
//   mathWiz("random");
// };

// document.getElementById("another").onclick = function() {
//   document.getElementById("practice-expression").textContent = "";
//   mathWiz("random");
// };

// document.getElementById("check-button").onclick = function() {
//   const userResponse = document.getElementById("user-answer");
//   const userValue = userResponse.value;
//   userResponse.value =
//     userValue + (userValue === answer + "" ? " Correct" : " Wrong");
// };

function HomePage({ children, ...other }) {
  return (
    <div class="reading-pane">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand active" href="#">
          <img src={require("../images/a-cute-angle.jpg")} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
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
      <div class="page-content">
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
            <Link to="/Addition">Addition</Link>: The addition of two
            whole numbers results in the total amount or sum of those values
            combined.
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
        <div class="practice-box">
          <div class="practice-box-equation">
            <span>
              <span id="practice-expression" /> =
            </span>
            <input id="user-answer" />
          </div>
          <div class="practice-box-buttons">
            <button id="another">Another</button>
            <button id="check-button">Check</button>
          </div>
        </div>

        <hr />
        <p>
          Dear Algebra please stop asking us to find your X. She's never coming
          back and don't ask Y.
        </p>

        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme1.jpg")}
                width="100%"
              />
            </div>
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme2.jpg")}
                width="100%"
              />
            </div>
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme3.jpg")}
                width="100%"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme4.jpg")}
                width="100%"
              />
            </div>
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme5.png")}
                width="100%"
              />
            </div>
            <div class="col-sm">
              <img
                class="gridPic"
                src={require("../images/mathMeme6.png")}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>
          <a href="https://github.com/SuperDyl/math-website">GitHub</a> | Design
          by the Fabulous Ryan Harper and his sidekick Dylan Jones
        </p>
      </div>
    </div>
  );
}

export default HomePage;

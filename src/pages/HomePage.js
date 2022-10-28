import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles.css";
import { Link } from "react-router-dom";
// import MathPractice from "../components/MathPractice";

function HomePage({ children, ...other }) {
  return (
    <div className="reading-pane">
      <Navbar />
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
            <Link to="/Subtraction">Subtraction</Link>: an arithmetic operation
            that represents the operation of removing objects from a collection.
          </li>
          <li>
            <Link to="/Multiplication">Multiplication</Link>: may be thought of
            as repeated addition.
          </li>
          <li>
            <Link to="/Division">Division</Link>: At an elementary level the
            division of two natural numbers is the process of calculating the
            number of times one number is contained within another.
          </li>
        </ul>
        <hr />

        {/*
        <h2>Practice</h2>
        <MathPractice operation="random" />
        

        <hr />*/}
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
                alt="'When you get the answer right but the teacher says you didn't use the right method:' Mr. Incredible: 'Math is Math!'"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme2.jpg")}
                width="100%"
                alt="'When you realize you won't use [extremely complicated math equation] at the while shopping' Buzz Lightyear: 'Years of academy training wasted!'"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme3.jpg")}
                width="100%"
                alt={
                  '"Parents: Two wrongs don\'t make a right. Math:" character suspisiously looks away'
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme4.jpg")}
                width="100%"
                alt="'When you solve a maths problem 3 times and get a different answer each time' Peter Parker crying"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme5.png")}
                width="100%"
                alt="'Talking to my x': 'Hi, what's up' in a text message; 'Talking to my y': message is vertical; 'Talking to my X=Y': message is diagnal; 'Talking to my [complicated equation]': message is a 3d donut shape"
              />
            </div>
            <div className="col-sm">
              <img
                className="gridPic"
                src={require("../images/mathMeme6.png")}
                width="100%"
                alt="'What is Pi?'; Programmer: 'Math.PI', Mathematician: 'pi = 4/(1 + 1^2/3^2....), Engineer: 'Three, take it or leave it'"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

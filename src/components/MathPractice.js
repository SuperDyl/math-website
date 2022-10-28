import React from "react";
import { useState, useLayoutEffect, memo, useRef, useCallback } from "react";
import "./styles.css";

function MathPractice({ operation = "random" }) {
  const [answer, setAnswer] = useState(0);
  const practiceExpRef = useRef(null);
  const userAnswerRef = useRef(null);

  const mathWiz = useCallback(
    () => {
      // const url = "https://x-math.herokuapp.com/api/" + operation;
      // fetch(url).then(r => r.json()).then(e => {
      //   setAnswer(e.answer);
      //   console.log(answer);
      //   let expression = document.createTextNode(e.expression);
      //   practiceExpRef.current.appendChild(expression);
      // });
    },
    [operation]
  );

  const getAnother = useCallback(
    () => {
      practiceExpRef.current.textContent = "";
      userAnswerRef.current.value = "";
      mathWiz();
    },
    [mathWiz]
  );

  const checkAnswer = () => {
    const userValue = userAnswerRef.current.value;
    userAnswerRef.current.value +=
      userValue === answer + "" ? " Correct" : " Wrong";
  };

  useLayoutEffect(
    () => {
      mathWiz("random");
    },
    [mathWiz]
  );

  return (
    <div className="practice-box">
      <div className="practice-box-equation">
        <span>
          <span ref={practiceExpRef} /> =
        </span>
        <input ref={userAnswerRef} />
      </div>
      <div className="practice-box-buttons">
        <button onClick={getAnother}>Another</button>
        <button onClick={checkAnswer}>Check</button>
      </div>
    </div>
  );
}

export default memo(MathPractice);

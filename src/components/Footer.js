import React from "react";
import { memo } from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        <a href="https://github.com/SuperDyl/math-website/tree/react-ify">
          GitHub
        </a>{" "}
        | Design by the Fabulous Ryan Harper and his sidekick Dylan Jones
      </p>
    </div>
  );
}

export default memo(Footer);

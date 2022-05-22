import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["FullStack Developer", "Backend Developer", "Softaware Engineer", "Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 80
      }}
    />
  );
}

export default Type;

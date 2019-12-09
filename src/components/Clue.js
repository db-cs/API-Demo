import React from "react";

const Clue = ({ question, answer }) => {
  return (
    <div>
      <h1>{question}</h1>
      <h2>{answer}</h2>
    </div>
  );
};

export default Clue;

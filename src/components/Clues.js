import React, { useState, useEffect } from "react";
import Clue from "./Clue";

const Clues = () => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://jservice.io/api/clues");
      response.json().then(res => setClues(res));
    };

    fetchData();
  }, []);

  return (
    <div>
      {clues.map(clue => (
        <Clue key={clue.id} question={clue.question} answer={clue.answer} />
      ))}
    </div>
  );
};

export default Clues;

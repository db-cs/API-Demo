import React, { useState, useEffect } from "react";
import Clue from "./Clue";

const Random = () => {
  const [clues, setClues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://jservice.io/api/random");
      response
        .json()
        .then(res => res[0])
        .then(res => setClues(res));
    };

    fetchData();
  }, []);

  return (
    <div>
      <Clue key={clues.id} question={clues.question} answer={clues.answer} />
    </div>
  );
};

export default Random;

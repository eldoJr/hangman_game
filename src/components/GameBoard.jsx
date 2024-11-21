import { useContext, useEffect, useRef } from "react";
import GameContext from "../context/GameContext";
import GameKeyboard from "./GameKeyboard";
import { wordList } from "../constants";

// GameBoard component
const GameBoard = () => {
  // Extract necessary values and functions from GameContext
  const { currentWord, setCurrentWord, correctLetters, setCorrectLetters, clickedKeys,  setClickedKeys, wrongGuesses, setWrongGuesses, setIsGameWon, setShowModal, isGameReset, setIsGameReset } = useContext(GameContext);

  // Reference for the hint element
  const hintRef = useRef();
  const maxGuesses = 6;

  // Effect to initialize the game board with a random word and hint
  useEffect(() => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    hintRef.current.innerText = hint;
    setCurrentWord(word);
    setCorrectLetters(new Array(word.length).fill(""));
    setIsGameReset(false);
  }, [isGameReset, setCorrectLetters, setCurrentWord, setIsGameReset]);

  // Effect to check game status (win/lose) based on guesses and correct letters
  useEffect(() => {
    if (currentWord && correctLetters.length) {
      if (wrongGuesses >= maxGuesses) {
        setIsGameWon(false);
        setShowModal(true);
      } else if (correctLetters.join("") === currentWord) {
        setIsGameWon(true);
        setShowModal(true);
      }
    }
  }, [correctLetters, wrongGuesses, currentWord, setIsGameWon, setShowModal]);

   // Handle key clicks and update the game state accordingly
  const handleClickedKey = (clickedKey) => {
    if (currentWord.includes(clickedKey)) {
      const updatedCorrectLetters = correctLetters.map((letter, index) =>
        currentWord[index] === clickedKey ? clickedKey : letter,
      );
      setCorrectLetters(updatedCorrectLetters);
    } else {
      setWrongGuesses((prevGuesses) => prevGuesses + 1);
    }

    setClickedKeys((prevKeys) => [...prevKeys, clickedKey]);
  };

  return (
    <div>
      {/* Display the current word with guessed letters */}
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {currentWord?.split("").map((_, index) => (
          <li key={index} className={`-mt-10 mb-10 w-7 text-center text-3xl font-semibold uppercase ${ !correctLetters[index] && "mt-0 border border-b-2 border-black"}`}>
            {correctLetters[index]}
          </li>
        ))}
      </ul>

      {/* Display the hint */}
      <h4 className="mb-4 text-center text-lg font-medium max-md:text-base">
        Hint:{" "}
        <b ref={hintRef} className="font-semibold text-neutral-700"></b>
      </h4>

      {/* Display the number of incorrect guesses and max guesses */}
      <h4 className="mb-4 text-center text-lg font-medium text-neutral-800 max-md:text-base">
        Incorrect guesses:{" "}
        <b className="font-bold text-red-500">
          {wrongGuesses} / {maxGuesses}
        </b>
      </h4>

      {/* Display the game keyboard */}
      <GameKeyboard handleClickedKey={handleClickedKey} clickedKeys={clickedKeys} />
    </div>
  );
};

export default GameBoard;

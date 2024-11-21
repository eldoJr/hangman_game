import { createContext, useState } from "react";

// Create a new context for the game
const GameContext = createContext();

// Provider component to manage game state and provide it to children components
export const GameProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [clickedKeys, setClickedKeys] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isGameReset, setIsGameReset] = useState(false);

  // Function to reset the game board to its initial state
  const resetGameBoard = () => {
    setShowModal(false);
    setCurrentWord("");
    setCorrectLetters([]);
    setClickedKeys([]);
    setWrongGuesses(0);
    setIsGameWon(false);
    setIsGameReset(true);
  };

  return (
    // Provide the state and functions to the children components
    <GameContext.Provider
      value={{ currentWord, setCurrentWord, correctLetters, setCorrectLetters, clickedKeys, setClickedKeys, wrongGuesses, setWrongGuesses, isGameWon, setIsGameWon, showModal, setShowModal, resetGameBoard, isGameReset, setIsGameReset }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;

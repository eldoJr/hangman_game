import { useContext } from "react";
import GameContext from "../context/GameContext";

// HangmanIllustration component
const HangmanIllustration = () => {
  // Extract wrongGuesses value from GameContext
  const { wrongGuesses } = useContext(GameContext);

  return (
    <div>
      {/* Display the hangman image based on the number of wrong guesses */}
      <img
        className="pointer-events-none max-w-[270px] select-none max-md:max-w-[200px]"
        src={`hangman-${wrongGuesses}.svg`}
        alt="Hangman Illustration"
      />
      <h2 className="mt-6 text-center text-2xl font-bold uppercase max-md:hidden">Hangman Game</h2>
    </div>
  );
};

export default HangmanIllustration;

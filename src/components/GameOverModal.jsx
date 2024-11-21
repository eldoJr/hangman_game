import { useContext } from "react";
import GameContext from "../context/GameContext";

// GameOverModal component
const GameOverModal = () => {
  // Extract necessary values from GameContext
  const { currentWord, isGameWon, showModal, resetGameBoard } = useContext(GameContext);

  return (
    // Modal container with conditional visibility
    <div className={`inset fixed z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.4)] px-3 backdrop-blur-lg ${showModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}  transition-opacity duration-300`}>
      <div className="flex max-w-[420px] flex-grow flex-col items-center rounded-lg border bg-white p-7 text-center shadow-2xl">
        {/* Display appropriate gif based on game outcome */}
        <img className="mb-5 max-w-32 max-md:w-28" src={`${showModal && (isGameWon ? 'won' : 'lost')}.gif`} alt="Gif" />

        {/* Display game outcome message */}
        <h4 className="text-2xl font-bold">
          {showModal && (isGameWon ? "Congratulations!" : "Better Luck Next Time!")}
        </h4>

        {/* Display game result and the correct word */}
        <p className="mb-8 mt-4 text-xl max-lg:text-lg">
          {isGameWon ? "You guessed the word" : "The correct word was"}
          <br />
          <b className="font-bold uppercase text-emerald-700">{" "} {showModal && currentWord}</b>
        </p>

        {/* Display Play Again button */}
        <button
          onClick={resetGameBoard}
          className="max-lg:2 rounded-md border bg-emerald-700 px-5 py-2.5 font-medium uppercase text-white hover:bg-emerald-600 max-lg:px-4"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;

// Importing necessary components and context
import GameBoard from "./components/GameBoard";
import GameOverModal from "./components/GameOverModal";
import HangmanIllustration from "./components/HangmanIllustration";
import { GameProvider } from "./context/GameContext";

// Main application component
export default function App() {
  return (
    // Wrapping the app with GameProvider for state management
    <GameProvider>
      <div className="flex h-screen items-center justify-center px-3">
        <div className="flex w-[850px] items-end justify-between gap-16 rounded-lg bg-white px-10 py-14 shadow-xl max-md:flex-col max-md:items-center max-md:px-2.5 max-md:py-8">
          <HangmanIllustration />
          <GameBoard />
        </div>
        <GameOverModal />
      </div>
    </GameProvider>
  );
}

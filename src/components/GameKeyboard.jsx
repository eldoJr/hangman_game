// GameKeyboard component, receives handleClickedKey and clickedKeys as props
const GameKeyboard = ({ handleClickedKey, clickedKeys }) => {
  // Create an array of alphabet letters from 'a' to 'z'
  const alphabetArray = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i),
  );

  return (
    // Container for the keyboard buttons
    <div className="mt-9 flex flex-wrap justify-center gap-1">
      {alphabetArray.map((char) => (
        <button
          onClick={() => handleClickedKey(char)}
          disabled={clickedKeys.includes(char)} // Disable button if key is already clicked
          key={char}
          className={`w-[calc(100%/9-5px)] rounded-md border bg-emerald-700 py-1.5 font-semibold text-white hover:bg-emerald-600 ${clickedKeys.includes(char) && "pointer-events-none opacity-60"}`}
        >
          {char.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default GameKeyboard;

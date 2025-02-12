import { useState, useEffect } from "react";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import MemorizeGrid from "../../components/memorizeGrid/memorizeGrid.jsx";
import { getChordsFilteredRandomized } from "../../lib/utils.js";
import { useLocalStorage } from "@uidotdev/usehooks";

const MEMORIZE_STYLE_KEY_NAME = "memorize-style";

const MemorizePage = () => {
  const [chords, setChords] = useState(null);
  const [index, setIndex] = useState(0);
  const [memorizeStyle, setMemorizeStyle] = useLocalStorage(MEMORIZE_STYLE_KEY_NAME, "Diagram");
  const [shown, setShown] = useState(false);

  const prevDisabled = index <= 0;
  const nextDisabled = index >= (chords?.length ?? 0) - 1;

  const handleReveal = () => {
    setShown(true);
  };

  const handlePrev = () => {
    setShown(false);
    setIndex(index - 1);
  };

  const handleNext = () => {
    setShown(false);
    setIndex(index + 1);
  };

  const handleReset = () => {
    setShown(false);
    setChords(getChordsFilteredRandomized);
    setIndex(0);
  };

  const handleMemorizationToggle = (key) => {
    setMemorizeStyle(key);
  };

  useEffect(() => {
    setChords(getChordsFilteredRandomized);
  }, []);

  if (!chords) {
    return null;
  }

  return (
    <>
      <CommandBar
        toggleButtons={["Diagram", "Chord"]}
        activeToggleButton={memorizeStyle}
        onToggleButton={(key) => handleMemorizationToggle(key)}
        specialButtons={[{ label: "Reset", callback: handleReset }]}
      />
      <MemorizeGrid
        chord={chords[index]}
        shown={shown}
        memorizeStyle={memorizeStyle}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleReveal={handleReveal}
      />
    </>
  );
};

export default MemorizePage;

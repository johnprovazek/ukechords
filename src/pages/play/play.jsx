import { useState, useEffect, useRef } from "react";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import PlayGrid from "../../components/playGrid/playGrid.jsx";
import PlayChordSelector from "../../components/playChordSelector/playChordSelector.jsx";
import { getChordsFilteredRandomized } from "../../lib/utils.js";
import { useLocalStorage } from "@uidotdev/usehooks";

const MAX_PLAY_CHORDS = 8;
const DEFAULT_PLAY_CHORDS = 3;
const TEMPO_KEY_NAME = "tempo";
const TEMPO_MS = {
  Slow: 4000,
  Medium: 2000,
  Fast: 1000,
};

const getPlayChords = (chordCount) => {
  return getChordsFilteredRandomized().slice(0, chordCount);
};

const PlayPage = () => {
  const [chords, setChords] = useState(null);
  const [chordIndex, setChordIndex] = useState(0);
  const [tempo, setTempo] = useLocalStorage(TEMPO_KEY_NAME, "Medium");
  const [active, setActive] = useState(true);
  const intervalId = useRef(null);

  const randomize = () => {
    let randomChordsLength = chords.length >= 2 ? chords.length : DEFAULT_PLAY_CHORDS;
    setChords(getPlayChords(randomChordsLength));
  };

  const toggleActiveChangeButton = () => {
    if (chords.length === 0) {
      setChords(getPlayChords(DEFAULT_PLAY_CHORDS));
    } else if (chords.length === 1) {
      let selectedChord = chords[0];
      let randomChords = getPlayChords(1);
      while (randomChords[0] === selectedChord) {
        randomChords = getPlayChords(1);
      }
      setChords([selectedChord, randomChords[0]]);
    }
    setActive(!active);
  };

  const toggleChord = (chord) => {
    if (chords.includes(chord)) {
      setChords(chords.filter((item) => item !== chord));
    } else {
      setChords([...chords, chord]);
    }
  };

  useEffect(() => {
    if (chords && active) {
      let delay = TEMPO_MS[tempo];
      let newIndex = (chordIndex + 1) % chords.length;
      intervalId.current = setInterval(() => {
        setChordIndex(newIndex);
      }, delay);
    } else {
      setChordIndex(0);
      clearInterval(intervalId.current);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [chords, chordIndex, tempo, active]);

  useEffect(() => {
    setChords(getPlayChords(DEFAULT_PLAY_CHORDS));
  }, []);

  if (!chords) {
    return null;
  }

  return (
    <>
      <CommandBar
        toggleButtons={["Slow", "Medium", "Fast"]}
        activeToggleButton={tempo}
        onToggleButton={(key) => setTempo(key)}
        specialButtons={[
          { label: "Randomize", callback: randomize },
          { label: active ? "Change" : "Play", callback: toggleActiveChangeButton },
        ]}
      />
      {active ? (
        <PlayGrid chords={chords} chordIndex={chordIndex} />
      ) : (
        <PlayChordSelector chords={chords} maxChords={MAX_PLAY_CHORDS} toggleChord={toggleChord} />
      )}
    </>
  );
};

export default PlayPage;

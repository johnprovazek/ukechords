import { useState, useEffect, useRef } from "react";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import UkeChord from "../../components/ukeChord/ukeChord.jsx";
import chordsList from "../../assets/data/chordsList.json";
import { getAllChords, getChordRating } from "../../hooks/useLocalStorageChords";

const getPlayChords = (chordCount) => {
  // Selecting chords to display in play page.
  let allChords = getAllChords();
  let playChords = allChords.filter((c) => c.rating < 5);
  let selectChords = playChords.length >= chordCount ? playChords : allChords;
  let selectChordsNames = selectChords.map((v) => v.name);
  // Randomizing chords.
  const randChords = selectChordsNames.slice();
  for (let i = randChords.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [randChords[i], randChords[rand]] = [randChords[rand], randChords[i]];
  }
  return randChords.slice(0, chordCount);
};

const maxChords = 8;
const idealChords = 3;

const tempoMs = {
  Slow: 4000,
  Medium: 2000,
  Fast: 1000,
};

const PlayPage = () => {
  const [chords, setChords] = useState(() => getPlayChords(idealChords));
  const prevChordsLengthRef = useRef(idealChords);
  const [chordIndex, setChordIndex] = useState(0);
  const [tempo, setTempo] = useState("Medium");
  const prevTempoRef = useRef("Medium");
  const extraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [active, setActive] = useState(true);

  const randomize = () => {
    let randomChordsLength = chords.length >= 2 ? chords.length : idealChords;
    setChords(getPlayChords(randomChordsLength));
  };

  const toggleActiveChangeButton = () => {
    if (chords.length === 0) {
      setChords(getPlayChords(2));
    } else if (chords.length === 1) {
      let soloChord = chords[0];
      let newChords = getPlayChords(2);
      if (newChords[0] !== soloChord && newChords[1] !== soloChord) {
        newChords[0] = soloChord;
      }
      setChords(newChords);
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
    let delay = tempoMs[tempo];
    let newIndex = (chordIndex + 1) % chords.length;
    if (prevChordsLengthRef.current !== chords.length) {
      prevChordsLengthRef.current = chords.length;
      if (chordIndex >= chords.length) {
        delay = 0;
        newIndex = 0;
      }
    }
    if (prevTempoRef.current !== tempo) {
      delay = 0;
      prevTempoRef.current = tempo;
    }
    const interval = setInterval(() => {
      setChordIndex(newIndex);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [chords, chordIndex, tempo]);

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
      {active && (
        <Grid container columns={24} spacing={2} mb={4} alignItems="center" justifyContent="center">
          {extraSmallScreen && (
            <Grid size={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
              <UkeChord chord={chords[chordIndex]} blink={true} />
            </Grid>
          )}
          {!extraSmallScreen &&
            chords.map((key) => (
              <Grid key={key} size={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
                <UkeChord chord={key} highlight={key === chords[chordIndex]} />
              </Grid>
            ))}
        </Grid>
      )}
      {!active && (
        <Grid container columns={24} spacing={2} mb={4} justifyContent="center" alignItems="center">
          {chordsList["base"].map((baseKey) =>
            chordsList["quality"].map((qualityKey) => (
              <Grid key={`${baseKey}${qualityKey}`} size={{ xs: 8, sm: 6, md: 4, lg: 3 }}>
                <Badge badgeContent={chords.indexOf(`${baseKey}${qualityKey}`) + 1} color="highlight" sx={{ width: 1 }}>
                  <Button
                    disabled={chords.length >= maxChords && !chords.includes(`${baseKey}${qualityKey}`)}
                    variant="contained"
                    color="default"
                    sx={{
                      textTransform: "capitalize",
                      width: "100%",
                      minWidth: 0,
                    }}
                    onClick={() => toggleChord(`${baseKey}${qualityKey}`)}
                  >
                    {`${baseKey}${qualityKey}${getChordRating(`${baseKey}${qualityKey}`) === 5 ? " ★" : ""}`}
                  </Button>
                </Badge>
              </Grid>
            )),
          )}
        </Grid>
      )}
    </>
  );
};

export default PlayPage;

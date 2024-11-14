import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import UkeChord from "../../components/ukeChord/ukeChord.jsx";
import { getAllChords } from "../../hooks/useLocalStorageChords";

const getMemorizeChords = () => {
  // Selecting chords to display in memorize page.
  let allChords = getAllChords();
  let memorizeChords = allChords.filter((c) => c.rating < 5);
  let selectChords = memorizeChords.length > 0 ? memorizeChords : allChords;
  let selectChordsNames = selectChords.map((v) => v.name);
  // Randomizing chords.
  const randChords = selectChordsNames.slice();
  for (let i = randChords.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [randChords[i], randChords[rand]] = [randChords[rand], randChords[i]];
  }
  return randChords;
};

const MemorizePage = () => {
  const [chords, setChords] = useState(getMemorizeChords);
  const [index, setIndex] = useState(0);
  const [memorizeStyle, setMemorizeStyle] = useState("Diagram");
  const [shown, setShown] = useState(false);

  const handleReveal = () => {
    if (!shown) {
      setShown(true);
    }
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
    setChords(getMemorizeChords);
    setIndex(0);
  };

  const handleMemorizationToggle = (key) => {
    setMemorizeStyle(key);
  };

  return (
    <>
      <CommandBar
        toggleButtons={["Diagram", "Chord"]}
        activeToggleButton={memorizeStyle}
        onToggleButton={(key) => handleMemorizationToggle(key)}
        specialButtons={[{ label: "Reset", callback: handleReset }]}
      />
      <Grid container columns={24} spacing={2} mb={2} justifyContent="center" alignItems="center">
        <Grid
          size={{ sm: 6, md: 4, lg: 3 }}
          align="center"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <IconButton
            disabled={index <= 0}
            color="highlight"
            sx={{
              height: "min(100%, 100px)",
              width: "min(100%, 100px)",
            }}
            onClick={handlePrev}
          >
            <KeyboardArrowLeftIcon sx={{ height: "100%", width: "100%" }} />
          </IconButton>
        </Grid>
        <Grid
          size={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          sx={{
            cursor: shown ? "default" : "pointer",
          }}
          onClick={handleReveal}
        >
          <UkeChord chord={chords[index]} highlight={shown} hidden={!shown} memorizeStyle={memorizeStyle} />
        </Grid>
        <Grid
          size={{ sm: 6, md: 4, lg: 3 }}
          align="center"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <IconButton
            disabled={index >= chords.length - 1}
            color="highlight"
            sx={{
              height: "min(100%, 100px)",
              width: "min(100%, 100px)",
            }}
            onClick={handleNext}
          >
            <KeyboardArrowRightIcon sx={{ height: "100%", width: "100%" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        container
        columns={24}
        spacing={1}
        mb={2}
        mx="auto"
        sx={{
          display: {
            sm: "none",
          },
          width: "100%",
        }}
      >
        <Grid size={{ xs: 12 }}>
          <Button
            disabled={index <= 0}
            variant="contained"
            color="highlight"
            startIcon={<KeyboardArrowLeftIcon />}
            sx={{
              textTransform: "capitalize",
              width: "100%",
              minWidth: 0,
            }}
            onClick={handlePrev}
          >
            previous
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            disabled={index >= chords.length - 1}
            variant="contained"
            color="highlight"
            endIcon={<KeyboardArrowRightIcon />}
            sx={{
              textTransform: "capitalize",
              width: "100%",
              minWidth: 0,
            }}
            onClick={handleNext}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MemorizePage;

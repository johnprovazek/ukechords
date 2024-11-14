import { useState } from "react";
import Grid from "@mui/material/Grid2";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import UkeChord from "../../components/ukeChord/ukeChord.jsx";
import chordsList from "../../assets/data/chordsList.json";

const toggleButtons = chordsList["base"];

const ChordsPage = () => {
  const [activeChord, setActiveChord] = useState("C");

  return (
    <>
      <CommandBar
        toggleButtons={toggleButtons}
        activeToggleButton={activeChord}
        onToggleButton={(key) => setActiveChord(key)}
      />
      <Grid container columns={24} spacing={2} mb={4} justifyContent="center">
        {chordsList["quality"].map((key) => (
          <Grid key={key} size={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
            <UkeChord chord={activeChord + key} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ChordsPage;

import Grid from "@mui/material/Grid2";
import CommandBar from "../../components/commandBar/commandBar.jsx";
import UkeChord from "../../components/ukeChord/ukeChord.jsx";
import chordsList from "../../assets/data/chordsList.json";
import { useLocalStorage } from "@uidotdev/usehooks";

const SELECTED_BASE_CHORD_KEY_NAME = "selected-base-chord";

const ChordsPage = () => {
  const [activeChord, setActiveChord] = useLocalStorage(SELECTED_BASE_CHORD_KEY_NAME, "C");

  return (
    <>
      <CommandBar
        toggleButtons={chordsList["base"]}
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

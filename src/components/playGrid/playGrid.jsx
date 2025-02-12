import UkeChord from "../../components/ukeChord/ukeChord.jsx";
import Grid from "@mui/material/Grid2";

function PlayGrid({ chords, chordIndex }) {
  return (
    <Grid container columns={24} spacing={2} mb={4} alignItems="center" justifyContent="center">
      <Grid
        size={{ xs: 24, sm: 12, md: 8, lg: 6 }}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
      >
        <UkeChord chord={chords[chordIndex]} blink={true} />
      </Grid>
      {chords.map((key) => (
        <Grid
          key={key}
          size={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <UkeChord chord={key} highlight={key === chords[chordIndex]} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PlayGrid;

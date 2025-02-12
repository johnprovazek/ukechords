import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Badge from "@mui/material/Badge";
import chordsList from "../../assets/data/chordsList.json";
import { getChordRating } from "../../lib/utils.js";

function PlayChordSelector({ chords, maxChords, toggleChord }) {
  return (
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
  );
}

export default PlayChordSelector;

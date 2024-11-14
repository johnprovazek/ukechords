import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Chord from "@tombatossals/react-chords/lib/Chord";
import useLocalStorageChords from "../../hooks/useLocalStorageChords";
import chordDiagram from "../../assets/data/chordsDiagram.json";

const instrument = {
  name: "ukelele",
  strings: 4,
  fretsOnChord: 4,
  tunings: {
    standard: ["G", "C", "E", "A"],
  },
};

const UkeChord = ({ chord, hidden = false, highlight = false, blink = false, memorizeStyle = "Diagram" }) => {
  const [chordData, setChordData] = useLocalStorageChords(chord);
  const [blinkCount, setBlinkCount] = useState(0);

  useEffect(() => {
    setBlinkCount((prev) => prev + 1);
  }, [chord]);

  return (
    <>
      <Card
        key={blinkCount}
        sx={{
          border: "0.2rem solid",
          borderColor: highlight ? "highlight.main" : "default.white",
          "@keyframes borderHighlightAnimation": {
            "0%": {
              borderColor: "highlight.main",
            },
            "100%": {
              borderColor: "default.main",
            },
          },
          animation: blink ? "borderHighlightAnimation 0.25s linear" : "none",
        }}
      >
        <CardContent>
          <Box
            sx={{
              height: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="default.black" variant="h3" sx={{ visibility: hidden ? "hidden" : "visible" }}>
              {chord}
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,
              aspectRatio: 8 / 7,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {(memorizeStyle == "Diagram" || !hidden) && (
              <Chord chord={chordDiagram[chord]["chordDiagram"]} instrument={instrument} />
            )}
            {memorizeStyle == "Chord" && hidden && <Typography variant="h3">{chord}</Typography>}
          </Box>
          <Box
            sx={{
              height: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating
              value={chordData}
              icon={<StarIcon fontSize="medium" />}
              emptyIcon={<StarBorderIcon fontSize="medium" sx={{ color: "default.black" }} />}
              sx={{
                color: "highlight.main",
                visibility: hidden ? "hidden" : "visible",
              }}
              onChange={(event, newValue) => {
                setChordData(newValue);
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UkeChord;

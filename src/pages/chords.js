import React from "react";
import chordData from '../data/chords.json';
import Chord from '@tombatossals/react-chords/lib/Chord'

import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const instrument = {
  "strings": 4,
  "fretsOnChord": 4,
  "name": "ukulele",
  "keys": [],
  "tunings": {
      standard: ["G", "C", "E", "A"]
  }
}

const lite = false
  
const ChordsPage = () => {

  const [activeChord, setActiveChord] = React.useState("C");

  const handleChordChange = (event, newActiveChord) => {
    setActiveChord(newActiveChord);
  };

  var activeChordObjectList = chordData[activeChord]["common"]

  return (
    <div>
      <Typography variant="h3" mt={2} ml={2}>
        Chords
      </Typography>
      <Typography paragraph={true} mt={2} ml={2}>
        This page will show your progess on learning chords.
      </Typography>
      <ToggleButtonGroup value={activeChord} exclusive onChange={handleChordChange} aria-label="text alignment">
        <ToggleButton value="All" aria-label="All" disabled>All</ToggleButton>
        <ToggleButton value="C" aria-label="C">C</ToggleButton>
        <ToggleButton value="Db" aria-label="Db">Db</ToggleButton>
        <ToggleButton value="D" aria-label="D">D</ToggleButton>
        <ToggleButton value="Eb" aria-label="Eb">Eb</ToggleButton>
        <ToggleButton value="E" aria-label="E">E</ToggleButton>
        <ToggleButton value="F" aria-label="F">F</ToggleButton>
        <ToggleButton value="Gb" aria-label="Gb">Gb</ToggleButton>
        <ToggleButton value="G" aria-label="G">G</ToggleButton>
        <ToggleButton value="Ab" aria-label="Ab">Ab</ToggleButton>
        <ToggleButton value="A" aria-label="A">A</ToggleButton>
        <ToggleButton value="Bb" aria-label="Bb">Bb</ToggleButton>
        <ToggleButton value="B" aria-label="B">B</ToggleButton>
      </ToggleButtonGroup>
      <Grid container spacing={2}>
        {Object.keys(activeChordObjectList).map((key) =>
          <Grid item xs={4}>
            <Item>
              <h1>{key}</h1>
              <Chord chord={activeChordObjectList[key]["chordDiagram"]} instrument={instrument} lite={lite}/>
              <h5> Memorize Slider</h5>
              <Slider
                aria-label="Memorize Slider"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
              <h5> Play Slider</h5>
              <Slider
                aria-label="Play Slider"
                defaultValue={30}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Item>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
  
export default ChordsPage;



/* <Grid container spacing={2}>
<Grid item xs={4}>
  <Item>hello</Item>
</Grid>
<Grid item xs={4}>
  <Item>hello</Item>
</Grid>
<Grid item xs={4}>
  <Item>hello</Item>
</Grid>
<Grid item xs={4}>
  <Item>hello</Item>
</Grid>
</Grid> */


/* <div className={chordList}>
<button className={activeChord === "All" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("All")} value="All">All</button>
<button className={activeChord === "C" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("C")} value="C">C</button>
<button className={activeChord === "Db" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Db")} value="Db">Db</button>
<button className={activeChord === "D" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("D")} value="D">D</button>
<button className={activeChord === "Eb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Eb")} value="Eb">Eb</button>
<button className={activeChord === "E" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("E")} value="E">E</button>
<button className={activeChord === "F" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("F")} value="F">F</button>
<button className={activeChord === "Gb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Gb")} value="Gb">Gb</button>
<button className={activeChord === "G" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("G")} value="G">G</button>
<button className={activeChord === "Ab" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Ab")} value="Ab">Ab</button>
<button className={activeChord === "A" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("A")} value="A">A</button>
<button className={activeChord === "Bb" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("Bb")} value="Bb">Bb</button>
<button className={activeChord === "B" ? chordListItemActive : chordListItemInactive} onClick={() => changeChord("B")} value="B">B</button>
</div>
<Grid activeChord={activeChord}></Grid> */
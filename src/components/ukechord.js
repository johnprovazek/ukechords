import * as React from 'react'
import { useEffect } from 'react';
import { useContext } from "react";
import chordDiagramJSON from '../data/chordsDiagram.json';
import Chord from '@tombatossals/react-chords/lib/Chord'
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ChordDataContext from "./chordDataContext";

const instrument = {
  "strings": 4,
  "fretsOnChord": 4,
  "name": "ukulele",
  "keys": [],
  "tunings": {
    standard: ["G", "C", "E", "A"]
  }
}

function UkeChord(props) {

  const {chordData, updateChordData} = useContext(ChordDataContext);
  const [mSliderValue, setMSliderValue] = React.useState(chordData[props.chord]["m"]);
  const [pSliderValue, setPSliderValue] = React.useState(chordData[props.chord]["p"]);

  useEffect(() => {
    setMSliderValue(chordData[props.chord]["m"])
    setPSliderValue(chordData[props.chord]["p"])
  },[props.chord, chordData]);

  // TODO: works for now, write this better
  // Works in Play Page Only
  const removeChord = () => {
    props.removeChord(props.chord)
  }

  // TODO: works for now, write this better
  // Works in Play Page Only
  const displayChordSelector = () => {
    props.displayChordSelector("displaystring")
  }

  // TODO: works for now, write this better
  // Works in Play Page Only
  const randomizeChord = () => {
    props.randomizeChord(props.chord)
  }

  // Refactor this later
  if (props.pageStyle === "chords") {
    return (
      <Paper sx={{  pt: 2, pb: 2 }}>
        <Typography variant="h3">{props.chord}</Typography>
        <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
        <Box className="memorizeSliderContainer">
          <Typography variant="h6"> Memorize Slider</Typography>
          <Slider value={mSliderValue} step={10} min={0} max={100}
            marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'}]}
            sx={{ width: 1/2, color: mSliderValue === 100 ? "#F58800" : "#1A4645"} } 
            aria-label="Memorize Slider" name="m" 
            onChange={e => {
              const chord = props.chord
              const slider = "m"
              const value = e.target.value
              updateChordData(chord, slider, value)
            }}
          />
        </Box>
        <Box className="playSliderContainer">
          <Typography variant="h6"> Play Slider</Typography>
          <Slider value={pSliderValue} step={10} min={0} max={100}
            marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
            sx={{ width: 1/2, color: pSliderValue === 100 ? "#F8BC24" : "#1A4645"}} 
            aria-label="Play Slider" name="m" 
            onChange={e => {
              const chord = props.chord
              const slider = "p"
              const value = e.target.value
              updateChordData(chord, slider, value)
            }}
          />
        </Box>
      </Paper>
    );
  }
  else if (props.pageStyle === "memorize") {
    return (
      <Paper 
        sx={{
          pt: 2, 
          pb: 2,
          borderWidth: 4,
          borderColor: props.mHidden ? "#1A4645" : "#F58800",
          animation: props.mHidden ? "none" : "fadeOutBorder 0.5s",
          borderStyle: "solid"
        }}
      >
        <Typography variant="h3" 
          sx={{
            opacity: props.mHidden ? 0.0 : 1.0,
            animation: props.mHidden ? "none" : "fadeOutOpacity 0.5s"
          }}
        >{props.chord}</Typography>
        { props.mStyle === "Chord" && props.mHidden ? 
          <svg width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 80 70">
            <text textAnchor="middle" fontSize="large" x="40" y="40" fill="#444444">{props.chord}</text>
          </svg>
        : 
          <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
        }
        <Typography className="mSliderLabel" variant="h6" 
          sx={{
            opacity: props.mHidden ? 0.0 : 1.0,
            animation: props.mHidden ? "none" : "fadeOutOpacity 0.5s"
          }}
        > Memorize Slider</Typography>
        <Slider className="mSlider" value={mSliderValue} step={10} min={0} max={100}
          marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
          sx={{ 
            width: 1/2, 
            opacity: props.mHidden ? 0.0 : 1.0,
            animation: props.mHidden ? "none" : "fadeOutOpacity 0.5s", 
            color: mSliderValue === 100 ? "#F58800" : "#1A4645"
          }} 
          aria-label="Memorize Slider" name="m" 
          onChange={e => {
            const chord = props.chord
            const slider = "m"
            const value = e.target.value
            updateChordData(chord, slider, value)
          }}
        />
      </Paper>
    );
  }
  else if (props.pageStyle === "play") {
    return (
      <Paper sx={{  pt: 2, pb: 2 }}>
        <Typography variant="h3">{props.chord}</Typography>
        <Chord chord={chordDiagramJSON[props.chord]["chordDiagram"]} instrument={instrument} lite={false}/>
        <Box className="playSliderContainer">
          <Typography variant="h6"> Play Slider</Typography>
          <Slider value={pSliderValue} step={10} min={0} max={100}
            marks={[{value: 0,label: 'Beginner'},{value: 100,label: 'Advanced'},]}
            sx={{ width: 1/2, color: pSliderValue === 100 ? "#F8BC24" : "#1A4645"}} 
            aria-label="Play Slider" name="m" 
            onChange={e => {
              const chord = props.chord
              const slider = "p"
              const value = e.target.value
              updateChordData(chord, slider, value)
            }}
          />
        </Box>
        <Stack  spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
        >
          <Button variant="outlined" onClick={randomizeChord}>Randomize</Button>
          <Button variant="outlined" onClick={displayChordSelector} >Change</Button>
          <Button variant="outlined" onClick={removeChord} >Remove</Button>
        </Stack>
      </Paper>
    );
  }
  else{
    return <div>error</div>
  }
}
export default UkeChord;